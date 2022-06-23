import { gql, GraphQLClient } from "graphql-request";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const URL = `https://${domain}/api/2021-07/graphql.json`;
const storeFrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

const Shopify = async (query) => {
  const graphQLClient = new GraphQLClient(URL, {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storeFrontAccessToken,
    },
  });
  return await graphQLClient.request(query);
};

export async function getProductsInCollection() {
  const query = gql`
    query {
      collectionByHandle(handle: "frontpage") {
        title
        products(first: 25) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 5) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const products = response.collectionByHandle.products.edges
    ? response.collectionByHandle.products.edges
    : [];

  return products;
}

export async function getAllProducts() {
  const query = gql`
    {
      products(first: 250) {
        edges {
          node {
            handle
            id
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const slugs = response.products.edges ? response.products.edges : [];

  return slugs;
}

export async function getProduct(handle) {
  const query = gql`
    {
      productByHandle(handle: "${handle}") {
        collections(first: 1) {
          edges{
            node {
              products(first: 4){
                edges{
                  node{
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                    handle
                    title
                    id
                    images(first:1){
                      edges{
                        node{
                          originalSrc
                          altText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        id
        title
        handle
        description
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        options {
          name
          values
          id
        }
        variants(first: 1) {
          edges {
            node {
              selectedOptions {
                name
                value
              }
              image {
                originalSrc
                altText
              }
              title
              id
              priceV2 {
                amount
              }
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const product = response.productByHandle ? response.productByHandle : [];

  return product;
}

export async function createCheckout(id, quantity) {
  const query = gql`
    mutation {
      checkoutCreate(input: { lineItems: [{ variantId: "${id}", quantity: ${quantity} }] }) {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const checkout = response.checkoutCreate.checkout
    ? response.checkoutCreate.checkout
    : [];

  return checkout;
}

export async function updateCheckout(id, lineItems) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
      variantId: "${item.id}",
      quantity: ${item.variantQuantity}
    }`;
  });

  const query = gql`
    mutation {
      checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const checkout = response.checkoutLineItemsReplace.checkout
    ? response.checkoutLineItemsReplace.checkout
    : [];

  return checkout;
}
