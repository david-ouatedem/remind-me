import ReminderForm from "../components/ReminderForm.tsx";
import { BsXCircleFill } from "@react-icons/all-files/bs/BsXCircleFill.js";
import { RemindersBehavior } from "../index/useReminders.ts";
import Button from "../../../generics/Button.tsx";

interface OwnProps {
  remindersBehavior: RemindersBehavior;
}

const AddReminderPageView: React.FC<OwnProps> = ({ remindersBehavior }) => {
  const { reminderPageIsOpen, handleCloseAddReminderPage } = remindersBehavior;
  return (
    <>
      {reminderPageIsOpen && (
        <div className="absolute z-50 top-0 bottom-0 right-0 bg-white border border-primary p-5">
          <div className="flex justify-end">
            <Button
              onClick={() => handleCloseAddReminderPage()}
              className="border-none"
            >
              <BsXCircleFill size="2rem" className="fill-tertiary" />
            </Button>
          </div>
          <ReminderForm remindersBehavior={remindersBehavior} />
        </div>
      )}
    </>
  );
};

export default AddReminderPageView;
