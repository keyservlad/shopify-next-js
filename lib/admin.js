import { gql, GraphQLClient } from "graphql-request";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const URL = `https://${domain}/admin/api/2022-07/graphql.json`;
const adminAccessToken = process.env.SHOPIFY_ADMIN_ACCESSTOKEN;

const ShopifyAdmin = async (query) => {
  const graphQLClient = new GraphQLClient(URL, {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": adminAccessToken,
    },
  });
  return await graphQLClient.request(query);
};

export async function getCarte2() {
  const query = gql`
    {
      products(first: 3) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `;

  const response = await ShopifyAdmin(query);
  console.log(response);
  const carte = response.products ? response.products : [];

  return carte;
}
