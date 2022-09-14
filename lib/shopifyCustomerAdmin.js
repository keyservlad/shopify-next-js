import { gql, GraphQLClient } from "graphql-request";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const URL = `https://${domain}/admin/api/2022-07/graphql.json`;
const adminAccessToken = process.env.SHOPIFY_ADMIN_ACCESSTOKEN;

const Shopify = async (query) => {
  const graphQLClient = new GraphQLClient(URL, {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": adminAccessToken,
      "Access-Control-Allow-Origin": "*",
    },
  });
  return await graphQLClient.request(query);
};

// see https://shopify.dev/api/admin-graphql/2022-07/mutations/customerCreate for input json format
export async function createCustomer(input) {
  // const inputt = input.replace(/"([^"]+)":/g, "$1:");
  const query = gql`
    mutation {
      customerCreate(input: ${input}) {
        customer {
          email
          firstName
          lastName
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  const response = await Shopify(query);
  const customer = response.customerCreate ? response.customerCreate : [];
  return customer;
}

// see https://shopify.dev/api/admin-graphql/2022-07/mutations/customerUpdate for input json format (id mendatory and id metafield)
export async function updateCustomer(input) {
  // const inputt = input.replace(/"([^"]+)":/g, "$1:");
  const query = gql`
    mutation {
      customerUpdate(input: ${input}) {
        customer {
          email
          firstName
          lastName
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const response = await Shopify(query);
  const customer = response.customerUpdate ? response.customerUpdate : [];
  return customer;
}

export async function getOrderCustomAttributes(id) {
  const query = gql`
    query {
      order(id: "${id}") {
        customAttributes {
          key
          value
        }
      }
    }
  `;
  const response = await Shopify(query);
  const attribute = response.order.customAttributes
    ? response.order.customAttributes
    : [];
  return attribute;
}

export async function queryCustomerByEmail(email) {
  const query = gql`
    query {
      customers(query: "${email}", first: 1) {
        nodes {
          email
          id
          addresses(first:3){
            address1
            id
          }
          metafields(first:5){
            nodes{
              value
              key
            }
          }
        }
      }
    }
  `;
  const response = await Shopify(query);
  const customer = response.customers.nodes ? response.customers.nodes : [];
  return customer;
}

export async function getCustomerById(id) {
  const query = gql`
    query {
      customer(id: "${id}") {
        id
        firstName
        lastName
        email
        verifiedEmail
        carte: metafield(namespace: "custom", key: "carte") {
          id
          key
          namespace
          value
        }
      }
    }
  `;
  const response = await Shopify(query);
  const customer = response.customer ? response.customer : [];
  return customer;
}

export async function removePoints(id, points, idPoints) {
  const query = gql`
    mutation {
      customerUpdate(input: {
        id: "${id}"
        metafields: [
          {
            id: "${idPoints}"
            key: "points"
            namespace: "custom"
            value: "${points}"
          }
        ]
      }) {
        customer {
          email
          firstName
          lastName
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const response = await Shopify(query);
  const user = response.customerUpdate ? response.customerUpdate : [];
  return user;
}
