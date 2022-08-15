// called by webhook when order is paid
// verify that a card is in the order
// create the account with the field "status" toBeActivated + add the card
// send mail to email adress to create the account

import {
  getOrderCustomAttributes,
  updateCustomer,
  createCustomer,
  queryCustomerByEmail,
} from "../../lib/shopifyCustomerAdmin";
import { sendMail } from "../../utils/sendMail";

// TODO add validation with the token in the header of the request
// TODO set up email to my address with logs when there is an error
// TODO check que le membre n'a pas deja été créé car les webhooks sont appelé plusieurs fois souvent
export default async function send(req, res) {
  // check for the POST request
  // if (req.method !== "POST") {
  //   return res
  //     .status(400)
  //     .json({ error: "Invalid HTTP method. Only POST requests are allowed." });
  // }

  req.body.line_items.map((item) => {
    if (
      item.title == "Carte Prestige" ||
      item.title == "Carte Découverte" ||
      item.title == "Carte Immanquables"
    ) {
      console.log("card trigger");
    }
  });

  // sendMail(customer.email, "subject", "<h1>html</h1>");

  // we get the order ID to get access to the custom attribute where the request is
  var headers = JSON.stringify(req.headers);
  headers = headers.replace("x-shopify-order-id", "orderId");

  const orderId = "gid://shopify/Order/" + JSON.parse(headers).orderId;
  var attribute = await getOrderCustomAttributes(orderId);

  var input = attribute[0].value;
  input = input.replaceAll("~", '\\"'); // formatting the request as it is stringified inside a parsed object

  // traiter les cas ou les deux adresses sont differentes
  // if userErrors not empty return 400

  console.log("attribute :", attribute);
  console.log("input :", input);
  var customer = await createCustomer(input);
  console.log("create", customer);
  var userByEmail = queryCustomerByEmail("email");
  // get id and add it to input
  customer = await updateCustomer(input);
  console.log("update", customer);

  return res.status(200).json({ status: "Ok" });
}
