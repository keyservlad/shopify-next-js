import { removePoints } from "../../lib/shopifyCustomerAdmin";

export default async function handler(req, res) {
  const customer = await removePoints(
    req.query.id,
    req.query.points,
    req.query.idPoints
  );
  return res.status(200).json({ customer });
}
