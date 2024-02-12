import { twMerge } from "tailwind-merge";

interface OwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<OwnProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={twMerge("rounded-full border bg-opacity-20", className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
