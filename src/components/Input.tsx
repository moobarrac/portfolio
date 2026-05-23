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
    const base =
      "text-base bg-bg-elevated border border-line text-fg px-4 py-3 rounded-md placeholder:text-fg-subtle focus:outline-none focus:border-accent transition-colors";
    const error = hasError ? "border-red-500 focus:border-red-500" : "";
    const inputClassName = `${base} ${error}`;

    return (
      <label className={`flex flex-col gap-2 ${className}`}>
        <span className="font-semibold text-sm">{label}</span>

        {type === "textarea" ? (
          <textarea
            ref={ref}
            rows={4}
            placeholder={placeholder}
            aria-invalid={hasError || undefined}
            className={inputClassName}
            {...props}
          />
        ) : (
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            aria-invalid={hasError || undefined}
            className={inputClassName}
            {...props}
          />
        )}

        <span
          className={`text-xs ${hasError ? "text-red-400" : "text-fg-subtle"}`}
        >
          {description}
        </span>
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
