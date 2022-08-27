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
import { createCustomer as createCustomerStorefront } from "../../lib/shopifyCustomer";
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

  // res.send("ok"); // we have to return status 200 to avoid shopify from sending multiple webhooks requests and avoid multiple failures in a row resulting in deleting the webhook
  req.body.line_items.map((item) => {
    if (
      item.title == "Carte Prestige" ||
      item.title == "Carte Découverte" ||
      item.title == "Carte Immanquables"
    ) {
      // console.log("card trigger");
    }
  });

  // sendMail(customer.email, "subject", "<h1>html</h1>");

  // we get the order ID to get access to the custom attribute where the request is
  var headers = JSON.stringify(req.headers);
  headers = headers.replace("x-shopify-order-id", "orderId");

  const orderId = "gid://shopify/Order/" + JSON.parse(headers).orderId;
  var attribute = await getOrderCustomAttributes(orderId);

  var input = attribute[0].value;

  // traiter les cas ou les deux adresses sont differentes
  // if userErrors not empty return 400

  // var customer = await createCustomer(input);
  // console.log("create", customer);

  // sanatize JSON using regex
  input = input.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": ');
  input = JSON.parse(input);
  const email = input.email;

  var inputCreate = JSON.stringify(input);
  inputCreate = inputCreate.replaceAll("\\", "");
  inputCreate = inputCreate.replace(/"([^"]+)":/g, "$1:"); // remove quotes for keys
  inputCreate = inputCreate.replaceAll("~", '\\"'); // formatting the request as it is stringified inside a parsed object

  console.log(inputCreate);
  // we first call create in case the user didnt enter the same address so the account is not yet created
  var customerCreate = await createCustomer(inputCreate);
  console.log("create", customerCreate);

  var userByEmail = await queryCustomerByEmail(email);

  input.id = userByEmail[0].id;
  input = JSON.stringify(input);
  input = input.replaceAll("\\", "");
  input = input.replace(/"([^"]+)":/g, "$1:"); // remove quotes for keys
  input = input.replaceAll("~", '\\"');

  var customer = await updateCustomer(input);
  console.log("update", customer);

  var customerStoreFront = await createCustomerStorefront(
    email,
    process.env.PASSWORD_CREATE_ACCOUNT
  );
  console.log(customerStoreFront);

  return res.status(200).json({ status: "Good" });
}
