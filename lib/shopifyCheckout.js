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

export async function createCheckout(lineItems) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
        variantId: "${item.id}",
        quantity: ${item.variantQuantity}
      }`;
  });

  const query = gql`
      mutation {
        checkoutCreate(input: { lineItems: [${lineItemsObject}] }) {
          checkoutUserErrors{
            message
            code
          }
          checkout {
            id
            webUrl
            email
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

// we don't use anymore cause it created bugs when checkout complete for exemple
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
            email
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

export async function createCheckoutCustomAttribute(
  lineItems,
  customAttribute,
  email
) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
        variantId: "${item.id}",
        quantity: ${item.variantQuantity}
      }`;
  });
  let attribute = customAttribute.value.replace(/"([^"]+)":/g, "$1:");
  attribute = JSON.stringify(attribute);

  const query = gql`
      mutation {
        checkoutCreate(input: { lineItems: [${lineItemsObject}], email: "${email}", customAttributes: {
          key: "${customAttribute.key}",
          value: ${attribute}
        } }) {
          checkout {
            id
            webUrl
            email
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
          checkoutUserErrors{
            message
            code
            field
          }
        }
      }
    `;

  const response = await Shopify(query);
  const checkout = response.checkoutCreate ? response.checkoutCreate : [];

  return checkout;
}

// export async function createCheckoutCustomAttribute(
//   id,
//   quantity,
//   customAttribute
// ) {
//   var attribute = customAttribute.value.replace(/"([^"]+)":/g, "$1:");
//   attribute = JSON.stringify(attribute);
//   const query = gql`
//       mutation {
//         checkoutCreate(input: { lineItems: [{ variantId: "${id}", quantity: ${quantity} }], customAttributes: {
//           key: "${customAttribute.key}",
//           value: ${attribute}
//         } }) {
//           checkout {
//             id
//             webUrl
//             lineItems(first: 25) {
//               edges {
//                 node {
//                   id
//                   title
//                   quantity
//                 }
//               }
//             }
//           }
//         }
//       }
//     `;

//   const response = await Shopify(query);
//   const checkout = response.checkoutCreate.checkout
//     ? response.checkoutCreate.checkout
//     : [];

//   return checkout;
// }

export async function updateCheckoutCustomAttribute(
  id,
  lineItems,
  customAttribute
) {
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
            email
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

export async function createCheckoutVinotheque(
  lineItems,
  email,
  shippingAddress
) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
        variantId: "${item.id}",
        quantity: ${item.variantQuantity}
      }`;
  });

  const query = gql`
      mutation {
        checkoutCreate(input: { lineItems: [${lineItemsObject}] , shippingAddress: ${shippingAddress}, email: "${email}"}) {
          checkout {
            id
            availableShippingRates{
              shippingRates{
                handle
                title
              }
            }
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

export async function completeCheckoutFree(id) {
  const query = gql`
    mutation {
      checkoutCompleteFree(checkoutId: "${id}") {
        checkout {
          id
          email
          lineItems(first: 1) {
            nodes {
              id
              title
            }
          }
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  
    `;

  const response = await Shopify(query);
  const checkout = response.checkoutCompleteFree
    ? response.checkoutCompleteFree
    : [];

  return checkout;
}

export async function setFreeShipping(id) {
  const query = gql`
    mutation {
      checkoutShippingLineUpdate(checkoutId: "${id}", shippingRateHandle: "shopify-Standard-0.00") {
        checkout {
          id
          email
          lineItems(first: 1) {
            nodes {
              id
              title
            }
          }
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  
    `;
  const response = await Shopify(query);
  const checkout = response.checkoutShippingLineUpdate
    ? response.checkoutShippingLineUpdate
    : [];

  return checkout;
}

export async function checkoutCustomerAssociate(id, accessToken) {
  const query = gql`
    mutation {
      checkoutCustomerAssociateV2(checkoutId: "${id}", customerAccessToken: "${accessToken}") {
        checkout {
          id
          webUrl
          email
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
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  
    `;
  const response = await Shopify(query);
  const checkout = response.checkoutCustomerAssociateV2.checkout
    ? response.checkoutCustomerAssociateV2.checkout
    : [];

  return checkout;
}

export async function checkoutEmailAssociate(id, email) {
  const query = gql`
    mutation {
      checkoutEmailUpdateV2(checkoutId: "${id}", email: "${email}") {
        checkout {
          id
          webUrl
          email
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
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  
    `;
  const response = await Shopify(query);
  const checkout = response.checkoutEmailUpdateV2.checkout
    ? response.checkoutEmailUpdateV2.checkout
    : [];

  return checkout;
}

export async function checkoutDiscount(id, code) {
  const query = gql`
    mutation {
      checkoutDiscountCodeApplyV2(checkoutId: "${id}", discountCode: "${code}") {
        checkout {
          id
          webUrl
          email
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
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  
    `;
  const response = await Shopify(query);
  const checkout = response.checkoutDiscountCodeApplyV2.checkout
    ? response.checkoutDiscountCodeApplyV2.checkout
    : [];

  return checkout;
}

export async function checkoutAddress(id, shippingAddress) {
  const query = gql`
    mutation {
      checkoutShippingAddressUpdateV2(checkoutId: "${id}", shippingAddress: ${shippingAddress}) {
        checkout {
          id
          webUrl
          email
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
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  
    `;
  const response = await Shopify(query);
  const checkout = response.checkoutShippingAddressUpdateV2.checkout
    ? response.checkoutShippingAddressUpdateV2.checkout
    : [];

  return checkout;
}
