"use server"

import axios from "axios";

export async function formSubmit(gReCaptchaToken: string, formData: FormData) {
  console.log("something 1")
  const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;

  const gRecaptchaToken = gReCaptchaToken

  console.log(formData)

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  console.log(
    "gRecaptchaToken,name,email,message:",
    gRecaptchaToken?.slice(0, 10) + "...",
    name,
    email,
    message
  );

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

  return {
    name: "",
    email: "",
    message: "",
    result: "something good"
  };

}