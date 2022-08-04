// called by webhook when order is paid
// verify that a card is in the order
// create the account with the field "status" toBeActivated
// send mail to email adress to create the account

import { updateCustomer } from "../../lib/shopifyCustomerAdmin";

// TODO add validation with the token in the header of the request
// TODO set up email to my address with logs when there is an error
export default async function send(req, res) {
  // req.body.line_items.map((item) => {
  //   console.log(item);
  //   if(item.title == "Carte Prestige") {
  //     console.log("found it");
  //     console.log("customer : " + req.body.customer.id + req.body.customer.email + req.body.customer.first_name + req.body.customer.last_name);
  //   }
  // })

  // console.log(
  //   "line items : " +
  //     JSON.stringify(req.body.line_items) +
  //     "customer : " +
  //     JSON.stringify(req.body.customer)
  // );

  const customer = {
    id: req.body.customer.id,
    email: req.body.customer.email,
  };

  const title = "prestige";

  const input = {
    email: customer.email,
    id: "gid://shopify/Customer/" + customer.id,
    metafields: [
      {
        id: "gid://shopify/Metafield/22028108824725",
        key: "status",
        namespace: "custom",
        value: "toBeActivated",
      },
      {
        id: "gid://shopify/Metafield/22028208078997",
        key: "carte",
        namespace: "custom",
        value: title,
      },
    ],
  };

  const user = await updateCustomer(JSON.stringify(input));
  console.log(user);

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
