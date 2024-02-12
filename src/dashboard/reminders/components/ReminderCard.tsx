import Button from "../../../generics/Button.tsx";
import { BsTrashFill } from "@react-icons/all-files/bs/BsTrashFill.js";
import { BsPencilSquare } from "@react-icons/all-files/bs/BsPencilSquare.js";
import Card from "../../../generics/Card.tsx";

const ReminderCard = () => {
  return (
    <Card className="flex items-center justify-between gap-10 w-full">
      <div className="flex flex-col gap-1 items-start">
        <h1 className="font-bold text-lg text-secondary">rappel de polos</h1>
        <p className="text-tertiary">tous les dimanches à 17hr00</p>
      </div>
      <div className="bg-primary h-full p-2 rounded-md overflow-hidden">
        <p>hey les amis(es) lundi nous sommes en polo blanc</p>
      </div>
      <div className="flex items-center gap-7">
        <Button className=" bg-tertiary p-2">
          <BsPencilSquare
            size="1rem"
            className="fill-secondary stroke-secondary"
          />
        </Button>
        <Button className="p-2 bg-red">
          <BsTrashFill
            size="1rem"
            className="fill-secondary stroke-secondary"
          />
        </Button>
      </div>
    </Card>
  );
};

export default ReminderCard;
