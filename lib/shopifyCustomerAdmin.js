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
  const inputt = input.replace(/"([^"]+)":/g, "$1:");
  const query = gql`
    mutation {
      customerCreate(input: ${inputt}) {
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
  const customer = response.customerCreate
    ? response.customerCreate
    : [];
  return customer;
}

// see https://shopify.dev/api/admin-graphql/2022-07/mutations/customerUpdate for input json format (id mendatory and id metafield)
export async function updateCustomer(input) {
  const inputt = input.replace(/"([^"]+)":/g, "$1:");
  const query = gql`
    mutation {
      customerUpdate(input: ${inputt}) {
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
  const customer = response.customerUpdate
    ? response.customerUpdate
    : [];
  return customer;
}