import { DaysOfTheWeek } from "../../../domain/reminders/DaysOfTheWeek.ts";
import Button from "../../../generics/Button.tsx";
import DatePicker from "../../../generics/DatePicker.tsx";
import InputCheckbox from "../../../generics/InputCheckbox.tsx";
import RadioInput from "../../../generics/RadioInput.tsx";
import TextArea from "../../../generics/TextArea.tsx";
import TextInput from "../../../generics/TextInput.tsx";

const ReminderForm = () => {
  const { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY } =
    DaysOfTheWeek;
  return (
    <form action="">
      <TextInput htmlFor="title" type="text" />
      <div className="flex items-start gap-20 mt-2">
        <div>
          <div>
            <RadioInput name="date-radio" label="jours" />
          </div>
          <div className="mt-2">
            <InputCheckbox label="lundi" name={MONDAY} />
            <InputCheckbox label="mardi" name={TUESDAY} />
            <InputCheckbox label="mercredi" name={WEDNESDAY} />
            <InputCheckbox label="jeudi" name={THURSDAY} />
            <InputCheckbox label="vendredi" name={FRIDAY} />
            <InputCheckbox label="samedi" name={SATURDAY} />
            <InputCheckbox label="dimanche" name={SUNDAY} />
          </div>
        </div>
        <div>
          <div>
            <RadioInput name="date-radio" label="date" />
          </div>
          <div className="mt-2">
            <DatePicker htmlFor="date-picker" label="choisir la date" />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <TextArea htmlFor="message-text" label="message" />
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
