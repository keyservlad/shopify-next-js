import { updateCustomer } from "../../lib/shopifyCustomerAdmin";

export default async function handler(req, res) {
  const customer = await updateCustomer(req.query.inputAddress);
  return res.status(200).json({ customer });
}
