import { InputHTMLAttributes } from "react";

interface OwnProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const RadioInput: React.FC<OwnProps> = ({ name, label, ...props }) => {
  return (
    <div className="flex items-center gap-2">
      <label
        className="capitalize text-lg font-medium text-secondary flex flex-col items-start gap-1"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        value={label}
        name={name}
        type="radio"
        id={name}
        {...props}
        required
      />
    </div>
  );
};

export default RadioInput;
