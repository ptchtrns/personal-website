"use client"

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import React, { useState, useCallback } from "react";
import { formSubmit } from "@/actions/formSubmit";
import GoogleCaptchaWrapper from "../google-captcha-wrapper";

const initialFormState = {
  name: "",
  email: "",
  message: "",
  result: ""
};

const Contact = () => {
  return(
    <>
      <GoogleCaptchaWrapper>
        <ContactInside />
      </GoogleCaptchaWrapper>
    </>
  )
}

function ContactInside(){
  const [formState, setFormState] = useState(initialFormState);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleFormSubmission = useCallback(async (formData: any) => {
    console.log(formData)
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      return {
        name: "",
        email: "",
        message: "",
        result: "Execute recaptcha not available yet likely meaning key not recaptcha key not set"
      };
    }
    return executeRecaptcha("enquiryFormSubmit").then(async (gReCaptchaToken) => {
      const result: any = await formSubmit(gReCaptchaToken, formData);
      return setFormState(result);
    });
  }, [executeRecaptcha]);

  return(
    <>
      <div className="px-8 lg:px-12" id="contact">
        <h2>Contact me</h2>
        <div className="py-8">
          <form action={handleFormSubmission}>
            <div className="w-full md:w-1/2 xl:w-1/3">
              <label htmlFor="name" className="block w-fit">Your name</label>
              <input className="form-input mb-3" placeholder="Your name" id="name" name="name" />
              <span className="text-red-700">{formState?.name}</span>
              <label htmlFor="email" className="block w-fit">Your e-mail</label>
              <input className="form-input mb-3" type="email" placeholder="Your e-mail" id="email" name="email" />
              <span className="text-red-700">{formState?.email}</span>
              <label htmlFor="message" className="block w-fit">Message</label>
              <textarea className="form-input mb-6" placeholder="Type your message here" id="message" name="message" rows={6}></textarea>
              <span className="text-red-700">{formState?.message}</span>
              <button type="submit" className="btn btn-main btn-green mb-6 w-full">Submit</button>
              <p>
                This site is protected by reCAPTCHA and the Google&nbsp;
                <a href="https://policies.google.com/privacy" className="text-blue-800 hover:text-blue-600 transition ease-in-out duration-1000">Privacy Policy</a> and&nbsp;
                <a href="https://policies.google.com/terms" className="text-blue-800 hover:text-blue-600 transition ease-in-out duration-1000">Terms of Service</a> apply.
              </p>
              {formState?.result}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact