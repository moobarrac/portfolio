import React from "react";

type RefProps = HTMLInputElement & HTMLTextAreaElement;

type Props = {
  label: string;
  hasError?: boolean;
  className?: string;
  placeholder: string;
  description: string;
  type?: React.HTMLInputTypeAttribute | "textarea";
};

const Input = React.forwardRef<RefProps, Props>(
  (
    {
      label,
      description,
      placeholder,
      className,
      hasError = false,
      type = "text",
      ...props
    },
    ref
  ) => {
    const inputClassName = `
      "text-base bg-transparent border-2 border-slate-300 dark:border-slate-700 px-5 py-3 rounded focus:outline-none focus:border-slate-700 dark:focus:border-slate-300 transition-[border]",
      ${
        hasError &&
        "animate__animated animate__shakeX border-red-300 dark:border-red-700 focus:border-red-700 dark:focus:border-red-300"
      }
    `;

    return (
      <label className={`flex flex-col gap-2 ${className}`}>
        <span className="font-bold">{label}</span>

        {type === "textarea" ? (
          <textarea
            ref={ref}
            rows={4}
            placeholder={placeholder}
            className={inputClassName}
            {...props}
          />
        ) : (
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={inputClassName}
            {...props}
          />
        )}

        <span className={`text-xs ${hasError && "text-red-500"}`}>
          {description}
        </span>
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
