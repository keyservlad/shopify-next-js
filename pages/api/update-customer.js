import { gql } from "graphql-request";

export default async function send(req, res) {
  const {
    query: { input },
  } = req;

  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const adminAccessToken = process.env.SHOPIFY_ADMIN_ACCESSTOKEN;

  async function ShopifyData(query) {
    const URL = `https://${domain}/admin/api/2022-07/graphql.json`;

    const options = {
      endpoint: URL,
      method: "POST",
      headers: {
        "X-Shopify-Access-Token": adminAccessToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };

    try {
      const data = await fetch(URL, options).then((response) => {
        return response.json();
      });

      return data;
    } catch (error) {
      throw new Error("customers not fetched");
    }
  }

  async function getProduct(input) {
    const inputt = input.replace(/"([^"]+)":/g, "$1:");
    const query = gql`
    mutation {
      customerCreate(input: ${inputt}) {
        customer {
          email
          firstName
          lastName
          id
        }
        userErrors {
          field
          message
        }
      }
    }`;
    console.log(query);

    const response = await ShopifyData(query);

    const product = response ? response : [];

    return product;
  }

  const product = await getProduct(input);
  console.log(product);

  res.json(product);
}
