import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { AddReminderFormFeilds } from "../dashboard/reminders/components/ReminderForm.tsx";

interface OwnProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<AddReminderFormFeilds>;
}

const InputTime: React.FC<OwnProps> = ({ register, ...props }) => {
  return (
    <div className="flex items-center gap-2">
      <label
        className="capitalize text-lg font-medium text-secondary flex flex-col items-start gap-1"
        htmlFor="time-input"
      >
        Chosir l'heure:
      </label>
      <input
        {...register("time")}
        type="time"
        id="time-input"
        name="time"
        className="rounded-md border border-primary outline-none focus:border-tertiary p-2 text-secondary bg-primary bg-opacity-20"
        {...props}
      ></input>
    </div>
  );
};

export default InputTime;
