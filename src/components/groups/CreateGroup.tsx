import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { AiOutlinePlus } from "react-icons/ai";
import GroupForm from "./GroupForm";

const CreateGroup = () => {
  return (
    <Dialog>
      <DialogTrigger>
        {/* TRIGGER THE MODAL CONTAINS CREATE GROUP FORM */}
        <button className="p-2 flex items-center justify-center bg-accent rounded-md">
          <AiOutlinePlus className="w-4 h-4 text-foreground" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <GroupForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroup;
