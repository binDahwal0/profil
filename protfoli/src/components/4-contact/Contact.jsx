import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";

import doneAnimation from "./../../../public/animation/done.json";
import contactAnimation from "./../../../public/animation/contact.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("xqkrjpkl");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-mail"></span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when i publish
        something new.
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <br /> <br />
          <div className="flex">
            <label htmlFor="message">Your Message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            onSubmit={handleSubmit}
            className="submit"
          >
            {state.submitting ? "submitting" : "submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.8rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: "40px" }}
                animationData={doneAnimation}
              />
              Your Message Has Been Sent Successfully!!
            </p>
          )}
        </form>
        <div className="  animation">
          <Lottie
            className="contact-animation"
            style={{ height: "400px" }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
