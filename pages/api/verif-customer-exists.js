import { queryCustomerByEmail } from "../../lib/shopifyCustomerAdmin";

export default async function handler(req, res) {
  const customer = await queryCustomerByEmail(req.query.email);
  return res.status(200).json({ customer });
}
