import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface OwnProps {
  children: ReactNode;
  className: string;
}
const Card: React.FC<OwnProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "border border-primary rounded-md bg-primary bg-opacity-20 p-2 shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
