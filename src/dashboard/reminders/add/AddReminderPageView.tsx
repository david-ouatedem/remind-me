import ReminderForm from "../components/ReminderForm.tsx";
import { BsXCircleFill } from "@react-icons/all-files/bs/BsXCircleFill.js";

const AddReminderPageView = () => {
  return (
    <div className="absolute z-50 top-0 right-0 bg-white p-5">
      <div className="flex justify-end">
        <BsXCircleFill size="2rem" className="fill-secondary" />
      </div>
      <ReminderForm />
    </div>
  );
};

export default AddReminderPageView;
