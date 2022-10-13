import { getCustomer } from "../../lib/shopifyCustomer";

export default async function handler(req, res) {
  const customer = await getCustomer(req.query.clientAccessToken);
  return res.status(200).json({ customer });
}
