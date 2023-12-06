import axios from "axios";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const URL = `https://${domain}/admin/api/2023-10/`;
const adminAccessToken = process.env.SHOPIFY_ADMIN_ACCESSTOKEN;

// https://{shop}.myshopify.com/admin/api/{api_version}/shop.json

// write fetchShop() with axios
export async function fetchShopTest() {
  const response = await axios.get(`${URL}shop.json`, {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": adminAccessToken,
      "Access-Control-Allow-Origin": "*",
    },
  });
  console.log(response.data);
  return response.data;
}

export async function createDraftProductTest() {
  const response = await axios.post(
    `${URL}products.json`,
    {
      product: {
        title: "Burton Custom Freestyle 151",
        body_html: "<strong>Good snowboard!</strong>",
        vendor: "Burton",
        product_type: "Snowboard",
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": adminAccessToken,
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  console.log(response.data);
  return response.data;
}

// access denied too :(((((
export async function createGiftCard() {
  const response = await axios.post(
    `${URL}gift_cards.json`,
    {
      gift_card: {
        initial_value: 50,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": adminAccessToken,
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  console.log(response.data);
  return response.data;
}
