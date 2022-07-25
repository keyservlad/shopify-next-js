import { gql, GraphQLClient } from "graphql-request";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const URL = `https://${domain}/admin/api/2022-07/graphql.json`;
const adminAccessToken = process.env.SHOPIFY_ADMIN_ACCESSTOKEN;

const Shopify = async (query) => {
  const graphQLClient = new GraphQLClient(URL, {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": adminAccessToken,
    },
  });
  return await graphQLClient.request(query);
};

// see https://shopify.dev/api/admin-graphql/2022-07/mutations/customerCreate for input json format
export async function createCustomer(input) {
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
  const customer = response.customerCreate.customer
    ? response.customerCreate.customer
    : [];
  return customer;
}

// see https://shopify.dev/api/admin-graphql/2022-07/mutations/customerUpdate for input json format (id mendatory and id metafield)
export async function updateCustomer(input) {
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
  const customer = response.customerUpdate.customer
    ? response.customerUpdate.customer
    : [];
  return customer;
}
