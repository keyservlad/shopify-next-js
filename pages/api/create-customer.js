// called by webhook when order is paid
// verify that a card is in the order
// create the account with the field "status" toBeActivated + add the card
// send mail to email adress to create the account

import {
  getOrderCustomAttributes,
  updateCustomer,
  createCustomer,
} from "../../lib/shopifyCustomerAdmin";
import { sendMail } from "../../utils/sendMail";

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

  // const customer = {
  //   id: "gid://shopify/Customer/" + 6392490164373,
  //   email: "guilhamat.arnaud@gmail.com",
  // };
  // const customer = {
  //   id: "gid://shopify/Customer/" + req.body.customer.id,
  //   email: req.body.customer.email,
  // };

  // const title = "prestige";

  // const input = {
  //   email: customer.email,
  //   id: customer.id,
  //   metafields: [
  //     {
  //       key: "status",
  //       namespace: "custom",
  //       value: "toBeActivated",
  //     },
  //     {
  //       key: "carte",
  //       namespace: "custom",
  //       value: title,
  //     },
  //   ],
  // };

  // const user = await updateCustomer(JSON.stringify(input));
  // console.log(user);
  // const user2 = await createCustomer(customer.email, "test");
  // console.log(user2);

  // sendMail(customer.email, "subject", "<h1>html</h1>");
  // console.log("full:", req.headers)
  var headers = JSON.stringify(req.headers);
  headers = headers.replace("x-shopify-order-id", "orderId");

  const orderId = "gid://shopify/Order/" + JSON.parse(headers).orderId;

  var attribute = await getOrderCustomAttributes(orderId);

  const input = attribute[0].value;
  console.log("input", input);

  const inputJson = JSON.parse(input);
  console.log("inputJson", inputJson);

  const meta = inputJson.metafields;
  console.log("meta", meta);
  for (item in meta) {
    if (item.key.includes(boxBilling)) {
      console.log("item : ", JSON.stringify(item));
    }
  }
  // console.log(JSON.stringify(input));

  // customer = await createCustomer(input);
  // console.log(customer);

  return res.status(200).json({ status: "Ok" });

  // // check for the POST request
  // if (req.method !== "POST") {
  //   return res
  //     .status(400)
  //     .json({ error: "Invalid HTTP method. Only POST requests are allowed." });
  // }
}
