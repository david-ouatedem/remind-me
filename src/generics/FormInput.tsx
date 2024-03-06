import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { AddReminderFormFeilds } from "../dashboard/reminders/components/ReminderForm.tsx";

interface OwnProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  type: React.HTMLInputTypeAttribute | undefined;
  register: UseFormRegister<AddReminderFormFeilds>;
}

const FormInput: React.FC<OwnProps> = ({
  htmlFor,
  register,
  type,
  ...props
}) => {
  return (
    <div>
      <label
        className="capitalize text-lg font-medium text-secondary flex flex-col items-start gap-1"
        htmlFor={htmlFor}
      >
        {htmlFor}:
      </label>
      <input
        {...register("title")}
        className="rounded-md border border-primary outline-none focus:border-tertiary p-2 w-full text-secondary bg-primary bg-opacity-20"
        type={type}
        id={htmlFor}
        name={htmlFor}
        required
        {...props}
      />
    </div>
  );
};

export default FormInput;
