import { useState } from "react";
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
import Profiles from "../components/Profiles";

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
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-bg-elevated border border-line rounded-2xl p-6 lg:p-8 flex flex-col">
          <h3 className="text-lg md:text-2xl font-bold mb-6">
            Mubarak Abdulwahab
          </h3>
          <a
            href="mailto:wahabajibola01@gmail.com"
            className="text-sm text-fg-muted mb-3 flex items-center gap-3 hover:text-accent transition-colors"
          >
            <MdEmail aria-hidden="true" />
            wahabajibola01@gmail.com
          </a>
          <a
            href="tel:+23486690112"
            className="text-sm text-fg-muted mb-3 flex items-center gap-3 hover:text-accent transition-colors"
          >
            <AiFillPhone aria-hidden="true" /> +234 8669 0112
          </a>
          <p className="text-sm text-fg-muted mb-6 flex items-center gap-3">
            <MdLocationOn aria-hidden="true" /> Lagos, Nigeria
          </p>
          <Profiles />
          <Button
            className="mt-auto pt-8 self-start"
            onClick={() => openURLInNewTab(resumeLink)}
          >
            Resume
          </Button>
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
            <form onSubmit={onSubmit} className="grid gap-8" noValidate>
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

              <Button
                type="submit"
                icon={FaPaperPlane}
                className="mt-2"
                disabled={submitting}
              >
                Send Message
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
