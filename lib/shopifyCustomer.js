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

export async function createCustomer(email, password) {
  const query = gql`
    mutation {
      customerCreate(input: {
        email: "${email}",
        password: "${password}"
      }) {
        customerUserErrors {
          code
          field
          message
        }
        customer {
          id
        }
      }
    }
  `;

  const response = await Shopify(query);
  const customer = response.customerCreate ? response.customerCreate : [];
  return customer;
}

export async function updateCustomer(email, password, customerAccessToken) {
  const query = gql`
    mutation {
      customerUpdate(customer: {email:"${email}", password:"${password}"}, customerAccessToken: "${customerAccessToken}") {
        customerUserErrors {
          code
          field
          message
        }
        customer {
          id
        }
        customerAccessToken {
          accessToken
          expiresAt
        }
      }
    }
  `;

  const response = await Shopify(query);
  const customer = response.customerUpdate ? response.customerUpdate : [];
  return customer;
}
export async function modifPassword(password, customerAccessToken) {
  const query = gql`
    mutation {
      customerUpdate(customer: {password:"${password}"}, customerAccessToken: "${customerAccessToken}") {
        customerUserErrors {
          code
          field
          message
        }
        customer {
          id
          email
        }
        customerAccessToken {
          accessToken
          expiresAt
        }
      }
    }
  `;

  const response = await Shopify(query);
  const customer = response.customerUpdate ? response.customerUpdate : [];
  return customer;
}

// password must be more than 5 char
export async function activateCustomer(id, activationToken, password) {
  const query = gql`
    mutation {
      customerActivate(id: "${id}", input: {
        activationToken: "${activationToken}",
        password: "${password}"
      }) {
        customerUserErrors {
          code
          field
          message
        }
        customer {
          id
          email
        }
      }
    }
  `;

  console.log(query);

  const response = await Shopify(query);
  const customer = response.customerActivate ? response.customerActivate : [];
  return customer;
}

export async function createAccessToken(email, password) {
  const query = gql`
    mutation {
      customerAccessTokenCreate(input: {
        email: "${email}",
        password: "${password}"
      }) {
        customerUserErrors {
          code
          field
          message
        }
        customerAccessToken {
          accessToken
          expiresAt
        }
      }
    }
  `;

  const response = await Shopify(query);
  const customerAccessToken = response.customerAccessTokenCreate
    ? response.customerAccessTokenCreate
    : [];
  return customerAccessToken;
}

export async function sendPasswordRecoverEmail(email) {
  const query = gql`
    mutation {
      customerRecover(email: "${email}") {
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  const response = await Shopify(query);
  const error = response.customerRecover.customerUserErrors
    ? response.customerRecover.customerUserErrors
    : [];
  return error;
}

export async function resetPasswordByUrl(url, password) {
  const query = gql`
    mutation {
      customerResetByUrl(resetUrl: "${url}", password: "${password}") {
        customer {
          id
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  const response = await Shopify(query);
  const customerAccessToken = response.customerAccessTokenCreate
    .customerAccessToken
    ? response.customerAccessTokenCreate.customerAccessToken
    : [];
  return customerAccessToken;
}

export async function getCustomer(clientAccessToken) {
  const query = gql`
    {
      customer(customerAccessToken: "${clientAccessToken}") {
        email
        firstName
        id
        lastName
        phone
        birthDay: metafield(namespace: "custom", key: "birthDay") {
          id
          key
          namespace
          value
        }
        boxDeliveryAddress: metafield(
          namespace: "custom"
          key: "boxDeliveryAddress"
        ) {
          id
          key
          namespace
          value
        }
        expirationDate: metafield(namespace: "custom", key: "expirationDate") {
          id
          key
          namespace
          value
        }
        boxBilling: metafield(namespace: "custom", key: "boxBilling") {
          id
          key
          namespace
          value
        }
        isDomicile: metafield(namespace: "custom", key: "isDomicile") {
          id
          key
          namespace
          value
        }
        carte: metafield(namespace: "custom", key: "carte") {
          id
          key
          namespace
          value
        }
        orders(first: 50) {
          edges {
            node {
              id
            }
          }
        }
        defaultAddress {
          address1
          city
          company
          country
          firstName
          id
          lastName
          phone
          zip
        }
        addresses(first: 5) {
          edges {
            node {
              address1
              city
              company
              country
              firstName
              id
              lastName
              phone
              zip
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const customer = response.customer ? response.customer : [];
  return customer;
}

export async function modifyCustomer(customer, customerAccessToken) {
  let cust = JSON.stringify(customer);
  cust = cust.replace(/"([^"]+)":/g, "$1:"); // remove quotes for keys
  const query = gql`
    mutation {
      customerUpdate(customer: ${cust}, customerAccessToken: "${customerAccessToken}") {
        customerUserErrors {
          code
          field
          message
        }
        customer {
          id
        }
        customerAccessToken {
          accessToken
          expiresAt
        }
      }
    }
  `;

  const response = await Shopify(query);
  const user = response.customerUpdate ? response.customerUpdate : [];
  return user;
}

export async function createAddress(address, customerAccessToken) {
  let add = JSON.stringify(address);
  add = add.replace(/"([^"]+)":/g, "$1:"); // remove quotes for keys
  const query = gql`
    mutation {
      customerAddressCreate(address: ${add}, customerAccessToken: "${customerAccessToken}") {
        customerUserErrors {
          code
          field
          message
        }
        customerAddress {
          address1
        }
      }
    }
  `;

  const response = await Shopify(query);
  const user = response.customerAddressCreate
    ? response.customerAddressCreate
    : [];
  return user;
}

export async function modifAddress(address, customerAccessToken, id) {
  let add = JSON.stringify(address);
  add = add.replace(/"([^"]+)":/g, "$1:"); // remove quotes for keys
  const query = gql`
    mutation {
      customerAddressUpdate(address: ${add}, customerAccessToken: "${customerAccessToken}", id: "${id}") {
        customerUserErrors {
          code
          field
          message
        }
        customerAddress {
          address1
        }
      }
    }
  `;

  const response = await Shopify(query);
  const user = response.customerAddressUpdate
    ? response.customerAddressUpdate
    : [];
  return user;
}

export async function deleteAddress(customerAccessToken, id) {
  const query = gql`
    mutation {
      customerAddressDelete(customerAccessToken: "${customerAccessToken}", id: "${id}") {
        customerUserErrors {
          code
          field
          message
        }
        deletedCustomerAddressId
      }
    }
  `;

  const response = await Shopify(query);
  const user = response.customerAddressDelete
    ? response.customerAddressDelete
    : [];
  return user;
}

export async function updateDefaultAddress(customerAccessToken, id) {
  const query = gql`
    mutation {
      customerDefaultAddressUpdate(customerAccessToken: "${customerAccessToken}", addressId: "${id}") {
        customerUserErrors {
          code
          field
          message
        }
        customer {
          id
        }
      }
    }
  `;

  const response = await Shopify(query);
  const user = response.customerDefaultAddressUpdate
    ? response.customerDefaultAddressUpdate
    : [];
  return user;
}
