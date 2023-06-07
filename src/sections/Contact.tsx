import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { Section } from "../types/Section";
import { getSectionHeading, openURLInNewTab } from "../utils";
import { resumeLink } from "../data/links";
const Myself = require("../images/myself.jpeg");

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [isSubmitted, setSubmitted] = useState(false);

  const [submit, submitting] = useFormspark({ formId: "KnUBwEdC" });

  const onSubmit = handleSubmit(async (data) => {
    await submit(data);
    setSubmitted(true);
  });

  return (
    <div id={Section.Contact} className="py-24">
      {getSectionHeading(Section.Contact)}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="col-span-1 grid lg:grid-cols-2   h-auto bg-black rounded-2xl gap-4 p-4 lg:p-6">
          <div className="col-span-1 bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 flex flex-col">
            <h2 className="text-lg md:text-2xl font-bold mb-4">
              Mubarak Abdulwahab
            </h2>
            <p className="text-xs text- md:text-sm text-gray-700 mb-2 flex items-center gap-2">
              <MdEmail />
              wahabajibola01@gmail.com
            </p>
            <p className="text-xs md:text-sm text-gray-700 mb-2 flex items-center gap-2">
              <AiFillPhone /> +23486690112
            </p>
            <p className="text-xs md:text-sm text-gray-700 mb-2 flex items-center gap-2">
              <MdLocationOn /> Lagos, Nigeria
            </p>
            <Button
              className="mt-36 self-center"
              onClick={() => openURLInNewTab(resumeLink)}
            >
              Resume
            </Button>
          </div>
          <div className="hidden md:block col-span-1  h-full transform hover:scale-105 transition duration-300">
            <img src={Myself} alt="" className="h-full w-full rounded-2xl" />
          </div>
        </div>
        {isSubmitted ? (
          <div className="col-span-1">
            <p className="text-lg leading-loose">
              Thank you for your message.
              <br />
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <div className="col-span-1">
            <form onSubmit={onSubmit} className="grid gap-8">
              <Input
                type="text"
                label="Full Name"
                className="md:w-3/4"
                hasError={!!errors.name}
                placeholder="John Doe"
                description={
                  errors.name?.message || "The one where you tell me your name"
                }
                {...register("name", {
                  required: {
                    value: true,
                    message: "This is a required field",
                  },
                })}
              />

              <Input
                type="email"
                className="md:w-3/4"
                label="Email Address"
                hasError={!!errors.email}
                placeholder="abc@example.com"
                description={
                  errors.email?.message ||
                  "The one where you tell me how I can contact you back"
                }
                {...register("email", {
                  required: {
                    value: true,
                    message: "This is a required field",
                  },
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />

              <Input
                type="textarea"
                label="Message"
                hasError={!!errors.message}
                placeholder="Type your message here"
                description={
                  errors.message?.message ||
                  "The one where you tell me what I can do to help you"
                }
                {...register("message", {
                  required: {
                    value: true,
                    message: "This is a required field",
                  },
                  minLength: {
                    value: 10,
                    message: "Your message must be at least 10 characters long",
                  },
                })}
              />
            </form>

            <Button
              icon={FaPaperPlane}
              className="mt-8"
              onClick={onSubmit}
              disabled={submitting}
            >
              Send Message
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
