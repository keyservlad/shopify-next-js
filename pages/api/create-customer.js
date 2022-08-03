import { createCustomer } from "../../lib/shopifyCustomer";

export default async function send(req, res) {
  // const passwordCreateUser = process.env.PASSWORD_CREATE_USER;

  // const customer = await createCustomer("guilhamat.arnaud@gmail.com", passwordCreateUser);
  // console.log(req.oney);
  // console.log(req.oney.customer);
  // console.log(req.oney.line_items);
  console.log(req);
  return res.status(200).json({ status: "Ok" });

  // // check for the POST request
  // if (req.method !== "POST") {
  //   return res
  //     .status(400)
  //     .json({ error: "Invalid HTTP method. Only POST requests are allowed." });
  // }

  // return res.status(200).json({ status: "Ok" });

  // const domain = process.env.SHOPIFY_STORE_DOMAIN;

  // const storeFrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

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
  //     throw new Error("customers not fetched " + error);
  //   }
  // }

  // async function getProduct() {
  //   const query = `
  //   mutation {
  //     customerCreate(input: {email: "guilhamat.arnaud@gmail.com", password: "${passwordCreateUser}"}) {
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

  // const product = await getProduct();
  // console.log(product);

  // res.json(product);
}
