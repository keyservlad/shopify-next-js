import { deleteMetafield } from "../../lib/shopifyCustomerAdmin";

export default async function handler(req, res) {
  const customer = await deleteMetafield(req.query.id);
  return res.status(200).json({ customer });
}
