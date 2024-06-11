import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UserMenuItems from "./UserMenuItems";

const UserMenu = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className="w-9 h-9">
          <AvatarImage src="https://randomuser.me/api/portraits/men/46.jpg" />
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-[160px] mr-2">
        <UserMenuItems />
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;
