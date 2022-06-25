// pages/api/revalidate.js

export default async function handler(req, res) {
    console.log(req);
    // check for the POST request
    if (req.method !== "POST") {
      return res
        .status(400)
        .json({ error: "Invalid HTTP method. Only POST requests are allowed." });
    }
    
    return res.status(200).json({ status: "Ok" });
    
  }