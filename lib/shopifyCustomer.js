import { gql, GraphQLClient } from "graphql-request";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const URL = `https://${domain}/admin/api/2022-07/graphql.json`;
const adminAccessToken = process.env.SHOPIFY_ADMIN_ACCESSTOKEN;

const Shopify = async (query) => {
  const graphQLClient = new GraphQLClient(URL, {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": adminAccessToken,
    },
  });
  return await graphQLClient.request(query);
};

export async function createCart(id, quantity) {
  const query = gql`
    mutation {
      cartCreate(
        input: {
          lines: [
            {
              quantity: ${quantity}
              merchandiseId: "${id}"
            }
          ]
        }
      ) {
        cart {
          id
          createdAt
          updatedAt
          lines(first: 25) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                  }
                }
              }
            }
          }
          checkoutUrl
        }
      }
    }
    `;

  const response = await Shopify(query);
  const cart = response.cartCreate.cart ? response.cartCreate.cart : [];
  return cart;
}
