import { getCustomerById } from "../../lib/shopifyCustomerAdmin";

export default async function handler(req, res) {
  const customer = await getCustomerById(req.query.id);
  return res.status(200).json({ customer });
}
