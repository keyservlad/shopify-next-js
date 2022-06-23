import { gql, GraphQLClient } from "graphql-request";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const URL = `https://${domain}/api/2021-07/graphql.json`;
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

async function getProduct(handle) {
  const query = gql`
    {
      productByHandle(handle: "${handle}") {
        id
        variants(first: 1) {
          edges {
            node {
              selectedOptions {
                name
                value
              }
              image {
                originalSrc
                altText
              }
              title
              id
              priceV2 {
                amount
              }
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const product = response.productByHandle ? response.productByHandle : [];

  return product;
}

export default async function productAvailable(req, res) {
  const {
    query: { id },
  } = req;

  res.status(200).json({ name: "John Doe" });
}
