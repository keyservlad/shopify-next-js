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
  console.log(cart);
  return cart;
}

export async function increaseQuantCart(cartId, lineItems) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
        id: "${item.node.id}",
        quantity: ${item.node.quantity}
      }`;
  });

  const query = gql`
      mutation {
        cartLinesUpdate(lines: [${lineItemsObject}], cartId: "${cartId}") {
          cart {
            id
            checkoutUrl
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
          }
        }
      }
    `;

  const response = await Shopify(query);
  const cart = response.cartLinesUpdate.cart
    ? response.cartLinesUpdate.cart
    : [];

  return cart;
}

export async function addCartLine(id, quantity, cartId) {
  const query = gql`
    mutation {
      cartLinesAdd(
        cartId: "${cartId}"
        lines: [
          {
            quantity: ${quantity}
            merchandiseId: "${id}"
          }
        ]
      ) {
        cart {
          id
          checkoutUrl
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
        }
      }
    }
  `;

  const response = await Shopify(query);
  const cart = response.cartLinesAdd.cart ? response.cartLinesAdd.cart : [];
  console.log(cart);
  console.log(query);
  return cart;
}


export async function removeCartLine(id, cartId) {
  const query = gql`
    mutation {
      cartLinesRemove(
        cartId: "${cartId}"
        lineIds: "${id}"
      ) {
        cart {
          id
          checkoutUrl
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
        }
      }
    }
  `;

  const response = await Shopify(query);
  const cart = response.cartLinesRemove.cart ? response.cartLinesRemove.cart : [];
  console.log(cart);
  console.log(query);
  return cart;
}
