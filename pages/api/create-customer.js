import { gql } from "graphql-request";

export default async function send(req, res) {
  console.log(req);
  // check for the POST request
  if (req.method !== "POST") {
    return res
      .status(400)
      .json({ error: "Invalid HTTP method. Only POST requests are allowed." });
  }

  return res.status(200).json({ status: "Ok" });
  // const {
  //   query: { input },
  // } = req;

  // const domain = process.env.SHOPIFY_STORE_DOMAIN;

  // const storeFrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;
  // const passwordCreateUser = process.env.PASSWORD_CREATE_USER;

  // async function ShopifyData(query) {
  //   const URL = `https://${domain}/api/2022-07/graphql.json`;

  //   const options = {
  //     endpoint: URL,
  //     method: "POST",
  //     headers: {
  //       "X-Shopify-Access-Token": storeFrontAccessToken,
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ query }),
  //   };

  //   try {
  //     const data = await fetch(URL, options).then((response) => {
  //       return response.json();
  //     });

  //     return data;
  //   } catch (error) {
  //     throw new Error("customers not fetched");
  //   }
  // }

  // async function getProduct(input) {
  //   const inputt = input.replace(/"([^"]+)":/g, "$1:");
  //   const query = gql`
  //   mutation {
  //     customerCreate(input: ${inputt}) {
  //       customer {
  //         email
  //         firstName
  //         lastName
  //         id
  //       }
  //       userErrors {
  //         field
  //         message
  //       }
  //     }
  //   }`;
  //   console.log(query);

  //   const response = await ShopifyData(query);

  //   const product = response ? response : [];

  //   return product;
  // }

  // const product = await getProduct(input);
  // console.log(product);

  // res.json(product);
}
