import { UseFormRegister } from "react-hook-form";
import { AddReminderFormFeilds } from "../dashboard/reminders/components/ReminderForm.tsx";

interface OwnProps {
  name: string;
  label: string;
  register: UseFormRegister<AddReminderFormFeilds>;
}

const InputCheckbox: React.FC<OwnProps> = ({ label, register, name }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        {...register("selectedDays")}
        name={name}
        type="checkbox"
        id={name}
        value={name}
      />
      <label
        className="capitalize text-lg font-medium text-secondary flex flex-col items-start gap-1"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default InputCheckbox;
