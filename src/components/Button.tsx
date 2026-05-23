import type { IconType } from "react-icons";

type Props = {
  icon?: IconType;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const Button: React.FC<React.PropsWithChildren<Props>> = ({
  onClick,
  children,
  className,
  disabled = false,
  type = "button",
  icon: Icon,
}) => (
  <div className={`flex ${className ?? ""}`}>
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-bg transition-colors hover:bg-[#7ed4fa] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      {Icon && <Icon aria-hidden="true" fontSize={16} />}
      <span>{children}</span>
    </button>
  </div>
);

export default Button;
