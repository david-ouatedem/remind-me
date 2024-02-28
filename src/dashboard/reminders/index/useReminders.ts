import { useState } from "react";

export interface RemindersBehavior {
  handleCloseAddReminderPage: () => void;
  handleOpenAddReminderPage: () => void;
  reminderPageIsOpen: boolean;
  handleChangeDateRadioOption: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  selectedRadioOption: string;
}

export const useReminders = (): RemindersBehavior => {
  const [reminderPageIsOpen, setReminderPageIsOpen] = useState(false);
  const [selectedRadioOption, setSelectedRadioOption] = useState("");


  const handleCloseAddReminderPage = () => {
    setReminderPageIsOpen(false);
  };

  const handleOpenAddReminderPage = () => {
    setReminderPageIsOpen(true);
  };

  const handleChangeDateRadioOption = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedRadioOption(event.target.value);
  };


  return {
    handleCloseAddReminderPage,
    handleOpenAddReminderPage,
    reminderPageIsOpen,
    handleChangeDateRadioOption,
    selectedRadioOption,
  };
};
