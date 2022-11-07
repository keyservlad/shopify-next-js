import { sendMail } from "../../utils/sendMail";

export default async function handler(req, res) {
  await sendMail(req.query.email, req.query.subject, req.query.message);
  return res.status(200).json({ message: "ok" });
}
