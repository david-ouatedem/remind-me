import { useState } from "react";
import Button from "../../generics/Button.tsx";
import AddReminderModal from "./AddReminderModal.tsx";
import ReminderCard from "./components/ReminderCard.tsx";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus.js";

const RemindersList = () => {
  const [isAddReminderModalOpen, setIsAddReminderModalOpen] = useState(true);
  const handleOpenAddReminderModal = () => {
    setIsAddReminderModalOpen(true);
  };
  return (
    <div className="relative h-full p-10 flex flex-col gap-5">
      <Button
        className="absolute z-50 bottom-20 right-20 border-tertiary bg-tertiary"
        onClick={handleOpenAddReminderModal}
      >
        <BsPlus size="2rem" className="fill-secondary stroke-secondary" />
      </Button>
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <AddReminderModal
        isAddReminderModalOpen={isAddReminderModalOpen}
        setIsAddReminderModalOpen={setIsAddReminderModalOpen}
      />
    </div>
  );
};

export default RemindersList;
