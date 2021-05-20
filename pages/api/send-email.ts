import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async ({ name, email, message }) => {
  const msg = {
    to: "jure.mikec1@gmail.com",
    from: "jure.mikec1@gmail.com",
    subject: "Web upit",
    text: `${message} from ${name}. Please respond to: ${email}`,
  };
  try {
    await sgMail.send(msg);
  } catch (err) {
    throw new Error("something went wrong");
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    try {
      await sendEmail({ name, email, message });
      return res.status(200).json({ status: "ok" });
    } catch (err) {
      return res.status(500).json({ status: "fail" });
    }
  }
  return res.status(500).json({ status: "fail" });
};
