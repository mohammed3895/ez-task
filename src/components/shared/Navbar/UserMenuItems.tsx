import { USERITEMS } from "@/constants/user-items";
import UserMenuItem from "./UserMenuItem";

const UserMenuItems = () => {
  return (
    <div className="w-full flex flex-col">
      {USERITEMS.map((item) => (
        <UserMenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default UserMenuItems;
