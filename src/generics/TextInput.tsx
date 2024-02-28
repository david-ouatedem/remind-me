import { InputHTMLAttributes } from "react";

interface OwnProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  type: React.HTMLInputTypeAttribute | undefined;
}

const TextInput: React.FC<OwnProps> = ({ htmlFor, type, ...props }) => {
  return (
    <div>
      <label
        className="capitalize text-lg font-medium text-secondary flex flex-col items-start gap-1"
        htmlFor={htmlFor}
      >
        {htmlFor}:
      </label>
      <input
        className="rounded-md border border-primary outline-none focus:border-tertiary p-2 w-full text-secondary bg-primary bg-opacity-20"
        type={type}
        id={htmlFor}
        required
        {...props}
      />
    </div>
  );
};

export default TextInput;
