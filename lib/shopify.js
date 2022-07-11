import { gql, GraphQLClient } from "graphql-request";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const URL = `https://${domain}/api/2022-07/graphql.json`;
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

export async function getAllProductsNotreCave() {
  const query = gql`
    query {
      collectionByHandle(handle: "notre-cave") {
        title
        products(first: 250) {
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
              images(first: 1) {
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

// export async function getAllProductsNotreCave() {
//   const query = gql`
//     {
//       products(first: 250) {
//         edges {
//           node {
//             handle
//             id
//           }
//         }
//       }
//     }
//   `;

//   const response = await Shopify(query);
//   const slugs = response.products.edges ? response.products.edges : [];

//   return slugs;
// }

// get product infos and related products
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


export async function getCarte(handle) {
  const query = gql`
    {
      productByHandle(handle: "${handle}") {
        sellingPlanGroups(first:2){
          edges{
            node{
              name
            }
          }
        }
        id
        title
        handle
        description
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
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
  const carte = response.productByHandle ? response.productByHandle : [];

  return carte;
}

export async function test() {
  const query = gql`
  {
    productByHandle(handle:"carte-prestige") {
      requiresSellingPlan
      sellingPlanGroups(first:1) {
        edges {
          node {
            name
            options {
              name
              values
            }
            sellingPlans(first: 3) {
              edges {
                node {
                  id
                  name
                  description
                  recurringDeliveries
                  options {
                    name
                    value
                  }
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
  const carte = response.productByHandle ? response.productByHandle : [];

  return carte;
}


