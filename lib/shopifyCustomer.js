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
  const customer = response.customerCreate.customer
    ? response.customerCreate.customer
    : [];
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
  const customer = response.customerUpdate
    ? response.customerUpdate
    : [];
  return customer;
}

// password must be more than 5 char
export async function activateCustomer(id, activationToken, password) {
  const query = gql`
    mutation {
      customerActivate(id: ${id}, input: {
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
        }
      }
    }
  `;

  const response = await Shopify(query);
  const customer = response.customerActivate.customer
    ? response.customerActivate.customer
    : [];
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
    .customerAccessToken
    ? response.customerAccessTokenCreate.customerAccessToken
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
        tags
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
