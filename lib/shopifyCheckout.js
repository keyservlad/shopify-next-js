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
