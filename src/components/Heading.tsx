import type { IconType } from "react-icons";

type Props = {
  icon?: IconType;
  children: React.ReactNode;
};

const Heading: React.FC<Props> = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-3 mb-10">
    {Icon && <Icon size={20} className="text-accent" />}
    <h2 className="font-code font-bold uppercase tracking-wide text-2xl md:text-3xl">
      {children}
    </h2>
  </div>
);

export default Heading;
