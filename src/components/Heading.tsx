import type { IconType } from "react-icons";

type Props = {
  icon?: IconType;
  children: React.ReactNode;
};

const Heading: React.FC<Props> = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 mb-8 transition-colors">
    {Icon && <Icon size={14} />}

    <span className="font-bold uppercase text-xl relative -bottom-px font-code">
      {children}
    </span>
  </div>
);

export default Heading;
