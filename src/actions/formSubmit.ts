"use server"

import axios from "axios";
import { z, ZodError } from "zod";
import nodemailer from "nodemailer";

export async function formSubmit(gReCaptchaToken: string, formData: FormData) {
  const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;

  const gRecaptchaToken = gReCaptchaToken

  const name: string = formData.get("name") as string
  const email: string = formData.get("email") as string
  const message: string = formData.get("message") as string

  let res: any;
  const captchaFormData = `secret=${secretKey}&response=${gRecaptchaToken}`;
  try {
    res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      captchaFormData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  } catch (e) {
    return console.log("recaptcha error:", e);
  }

  const Data = z.object({
    name: z.string().min(3, { message: "Name ust be 3 or more characters long" }).max(45, { message: "Name must be 45 or less characters long" }),
    email: z.string().email({ message: "Invalid e-mail address" }).min(5, { message: "E-mail must be 5 or more characters long" }).max(45, { message: "E-mail must be 45 or less characters long" }).toLowerCase(),
    message: z.string().min(10, { message: "Message must be 10 or more characters long" }).max(500, { message: "Message must be 500 or less characters long" })
  });

  let result: any = {
    user: "",
    email: "",
    message: "",
    result: ""
  };

  try {
    const validatedFields = Data.parse({
      name: name,
      email: email,
      message: message
    })
  
    // If validation succeeds, set the result to "Success!"
    result.result = "Message has been sent! You will get a reply shortly :)";
  } catch (error) {
    if (error instanceof ZodError) {
      // Handle validation errors
      error.errors.forEach((err) => {
        const field = err.path[0];
        result[field] = err.message;
      });
      return result
    } else {
      result.result = "An unexpected error occurred during validation.";
      return result
    }
  }

  const emailSmtp: string = process?.env?.EMAIL_SMTP as string;

  const senderEmail: string = process?.env?.EMAIL_SEND_FROM as string;

  const receiverEmail: string = process?.env?.EMAIL_SEND_TO as string;

  const senderPassword: string = process?.env?.EMAIL_PASSWORD as string;

  const transporter = nodemailer.createTransport({
    host: emailSmtp,
    port: 465,
    secure: true,
    auth: {
      user: senderEmail,
      pass: senderPassword,
    },
  });

  const mailData = {
    from: senderEmail,
    to: receiverEmail,
    subject: `Message From ${email}`,
    text: `${name} says: ${message}`
   }

   try {
    // Await the completion of sendMail
    const info = await transporter.sendMail(mailData);
  } catch (err) {
    result.result = "Error sending the message.";
    return result
  }

  return result;

}