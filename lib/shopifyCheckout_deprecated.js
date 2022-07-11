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
  