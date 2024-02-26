import Button from "../../../generics/Button.tsx";
import AddReminderPageView from "../add/AddReminderPageView.tsx";
import ReminderCard from "../components/ReminderCard.tsx";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus.js";
import { useReminders } from "./useReminders.ts";

const RemindersList = () => {
  const remindersBehavior = useReminders();
  const { handleOpenAddReminderPage } = remindersBehavior;
  return (
    <div className="relative h-full p-10 flex flex-col gap-5">
      <AddReminderPageView remindersBehavior={remindersBehavior} />
      <Button
        className="absolute z-40 bottom-20 right-20 border-tertiary bg-tertiary"
        onClick={() => handleOpenAddReminderPage()}
      >
        <BsPlus size="2rem" className="fill-secondary stroke-secondary" />
      </Button>
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
    </div>
  );
};

export default RemindersList;
