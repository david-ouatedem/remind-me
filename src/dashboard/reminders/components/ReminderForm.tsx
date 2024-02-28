import { SubmitHandler, useForm } from "react-hook-form";
import { DaysOfTheWeek } from "../../../domain/reminders/DaysOfTheWeek.ts";
import Button from "../../../generics/Button.tsx";
import DatePicker from "../../../generics/DatePicker.tsx";
import InputCheckbox from "../../../generics/InputCheckbox.tsx";
import InputTime from "../../../generics/InputTime.tsx";
import RadioInput from "../../../generics/RadioInput.tsx";
import TextArea from "../../../generics/TextArea.tsx";
import TextInput from "../../../generics/TextInput.tsx";
import { RemindersBehavior } from "../index/useReminders.ts";

interface OwnProps {
  remindersBehavior: RemindersBehavior;
}

type AddReminderFormFeilds = {
  title: string;
  time: Date;
  date?: Date;
  message: string;
  selectedDays?: string[];
};

const ReminderForm: React.FC<OwnProps> = ({ remindersBehavior }) => {
  const { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY } =
    DaysOfTheWeek;
  const { handleChangeDateRadioOption, selectedRadioOption } =
    remindersBehavior;
  const { register, handleSubmit } = useForm<AddReminderFormFeilds>();

  const submitAddReminderFormData: SubmitHandler<AddReminderFormFeilds> = (
    data
  ) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submitAddReminderFormData)}>
      <TextInput {...register("title")} htmlFor="title" type="text" />
      <div className="flex items-start gap-20 mt-2">
        <div>
          <div>
            <RadioInput
              onChange={(e) => handleChangeDateRadioOption(e)}
              name="date-radio"
              label="jours"
            />
          </div>
          {selectedRadioOption === "jours" && (
            <div className="mt-2">
              <InputCheckbox
                {...register("selectedDays")}
                label="lundi"
                name={MONDAY}
              />
              <InputCheckbox
                {...register("selectedDays")}
                label="mardi"
                name={TUESDAY}
              />
              <InputCheckbox
                {...register("selectedDays")}
                label="mercredi"
                name={WEDNESDAY}
              />
              <InputCheckbox
                {...register("selectedDays")}
                label="jeudi"
                name={THURSDAY}
              />
              <InputCheckbox
                {...register("selectedDays")}
                label="vendredi"
                name={FRIDAY}
              />
              <InputCheckbox
                {...register("selectedDays")}
                label="samedi"
                name={SATURDAY}
              />
              <InputCheckbox
                {...register("selectedDays")}
                label="dimanche"
                name={SUNDAY}
              />
            </div>
          )}
        </div>
        <div>
          <div>
            <RadioInput
              onChange={(e) => handleChangeDateRadioOption(e)}
              name="date-radio"
              label="date"
            />
          </div>
          {selectedRadioOption === "date" && (
            <div className="mt-2">
              <DatePicker
                {...register("date")}
                htmlFor="date-picker"
                label="choisir la date"
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-2">
        <InputTime {...register("time")} />
      </div>
      <div className="mt-2">
        <TextArea
          {...register("message")}
          htmlFor="message-text"
          label="message"
        />
      </div>
      <div className="flex items-center justify-center gap-20">
        <Button
          className="border border-tertiary rounded-lg bg-transparent p-2"
          type="button"
          onClick={() => {}}
        >
          Annuler
        </Button>
        <Button className="bg-tertiary rounded-lg p-2" type="submit">
          Confirmer
        </Button>
      </div>
    </form>
  );
};

export default ReminderForm;
