// called by webhook when order is paid
// verify that a card is in the order
// create the account with the field "status" toBeActivated + add the card
// send mail to email adress to create the account

import {
  getOrderCustomAttributes,
  updateCustomer,
  createCustomer,
  queryCustomerByEmail,
  getCustomerById,
} from "../../lib/shopifyCustomerAdmin";
import { createCustomer as createCustomerStorefront } from "../../lib/shopifyCustomer";
import { sendMail } from "../../utils/sendMail";

// TODO add validation with the token in the header of the request
// TODO set up email to my address with logs when there is an error
// TODO check que le membre n'a pas deja été créé car les webhooks sont appelé plusieurs fois souvent
export default async function send(req, res) {
  try {
    // check for the POST request
    // if (req.method !== "POST") {
    //   return res
    //     .status(400)
    //     .json({ error: "Invalid HTTP method. Only POST requests are allowed." });
    // }

    // TODO done by mail for now but wanna create elastic search to store logs
    sendMail(
      "arnaud.guilhamat@emovin.fr",
      "mail automatique nouvelle commade",
      "body : " +
        JSON.stringify(req.body) +
        " headers" +
        JSON.stringify(req.headers)
    );

    // TODO have to figure out a solution
    // res.send("ok"); // we have to return status 200 to avoid shopify from sending multiple webhooks requests and avoid multiple failures in a row resulting in deleting the webhook
    let isCard = false;
    req.body.line_items.map((item) => {
      if (item.title.includes("Carte")) {
        isCard = true;
      }
    });

    if (isCard) {
      // sendMail(customer.email, "subject", "<h1>html</h1>");

      // we get the order ID to get access to the custom attribute where the request is
      var headers = JSON.stringify(req.headers);
      headers = headers.replace("x-shopify-order-id", "orderId");

      const orderId = "gid://shopify/Order/" + JSON.parse(headers).orderId;
      var attribute = await getOrderCustomAttributes(orderId);

      var input = attribute[0].value;

      // TODO if userErrors not empty return 400

      // sanatize JSON using regex because we had to remove the quotes around the keys for the query to work
      input = input.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": ');
      input = JSON.parse(input);
      const email = input.email;

      var userByEmail = await queryCustomerByEmail(email);

      // if (userByEmail[0].carte?.value === "expired") { // TODO think expired works the same as create account
      // } else
      let isRenew = false;
      if (
        userByEmail[0].carte?.value === "decouverte" ||
        userByEmail[0].carte?.value === "prestige" ||
        userByEmail[0].carte?.value === "immanquables" ||
        userByEmail[0].carte?.value === "expired" // TODO For now we put it here cause i don't have time to worry about deliveryAddress and getting the id of the metafields etc...
      ) {
        isRenew = true;
        // TODO await tag order with "renew"
      }
      // recup l'adresse si isDomicile est false
      var jsonAddress;
      var isDomicile = false;
      input.metafields.map((metafield) => {
        if (
          metafield.key == "isDomicile" &&
          metafield.value == "true" &&
          !isRenew
        ) {
          isDomicile = true;
          jsonAddress = {
            address1: input.addresses[0].address1,
            city: input.addresses[0].city,
            country: input.addresses[0].country,
            firstName: input.addresses[0].firstName,
            lastName: input.addresses[0].lastName,
            phone: input.addresses[0].phone,
            zip: input.addresses[0].zip,
          };
        }
      });

      // TODO check / code removed for testing as member already created by shopify when order is created
      // var inputCreate = JSON.stringify(input);
      // inputCreate = inputCreate.replaceAll("\\", "");
      // inputCreate = inputCreate.replace(/"([^"]+)":/g, "$1:"); // remove quotes for keys
      // inputCreate = inputCreate.replaceAll("~", '\\"'); // formatting the request as it is stringified inside a parsed object

      // we first call create in case the user didnt enter the same address so the account is not yet created
      // var customerCreate = await createCustomer(inputCreate);

      input.id = userByEmail[0].id;
      input = JSON.stringify(input);
      input = input.replaceAll("\\", "");
      input = input.replace(/"([^"]+)":/g, "$1:"); // remove quotes for keys
      input = input.replaceAll("~", '\\"');
      input = input.replaceAll("Ƶ", ":");

      var customer = await updateCustomer(input);
      console.log(customer);

      if (!isRenew) {
        var customerStoreFront = await createCustomerStorefront(
          email,
          process.env.PASSWORD_CREATE_ACCOUNT
        );
      }

      // TODO after creating to get the id of the address and add it to the input
      if (isDomicile && !isRenew) {
        // requete des addresses du user avec l'id user
        // si l'adresse match avec celle de l'input alors on ajoute l'id de l'adresse a l'input
        // sinon on crée l'adresse et on ajoute l'id a l'input
        var userWithAddresses = await queryCustomerByEmail(email);
        userWithAddresses[0].addresses.map((address) => {
          if (address.address1 == jsonAddress.address1) {
            jsonAddress.id = address.id;
          } else {
            // TODO create address (think it works bc we don't use shipping address anymore)
          }
        });
        jsonAddress = JSON.stringify(jsonAddress);
        let inputAddress = {
          id: userWithAddresses[0].id,
          metafields: [
            {
              key: "boxDeliveryAddress",
              namespace: "custom",
              type: "json",
              value: jsonAddress,
            },
          ],
        };
        inputAddress = JSON.stringify(inputAddress);
        inputAddress = inputAddress.replaceAll('\\"', "~");
        inputAddress = inputAddress.replace(/"([^"]+)":/g, "$1:");
        inputAddress = inputAddress.replaceAll("~", '\\"');
        let cust = await updateCustomer(inputAddress);
      }
    }

    let email = req.body.customer?.email
      ? req.body.customer.email
      : req.body.email
      ? req.body.email
      : req.body.contact_email
      ? req.body.contact_email
      : null;

    // TODO add a check that the order has not been processed already (using the metafield point on order)
    if (email) {
      var customer = await queryCustomerByEmail(email);
      if (customer[0].carte?.value !== "expired" && customer[0].carte?.value) {
        const orderId = req.body.admin_graphql_api_id; // TODO use this to add metafield points to order

        const totalSpentWithoutShipping = req.body.subtotal_price;

        let pts = {};
        if (customer[0].points) {
          pts["points"] = Number(customer[0].points.value);
          pts["id"] = customer[0].points.id.replaceAll(":", "Ƶ");
        } else {
          pts["points"] = 0;
        }

        pts["points"] += Math.round(totalSpentWithoutShipping / 10);

        let input = {
          id: customer[0].id.replaceAll(":", "Ƶ"),
          email: email,
          metafields: [
            {
              id: pts["id"] ? pts["id"] : null,
              key: "points",
              namespace: "custom",
              value: `${pts["points"]}`,
              type: "number_integer",
            },
          ],
        };
        input = JSON.stringify(input);
        input = input.replace(/"([^"]+)":/g, "$1:"); // remove quotes for keys
        input = input.replaceAll("Ƶ", ":");

        var customer = await updateCustomer(input);
        console.log(customer);
      }
    }

    return res.status(200).json({ status: "Good" });
  } catch (error) {
    console.log(error);
    sendMail(
      "arnaud.guilhamat@emovin.fr",
      "URGENT error with checkout webhook!",
      error
    );
    return res.status(400).json({ status: "Bad" });
  }
}
