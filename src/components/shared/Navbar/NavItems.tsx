import { NAVITEMS } from "@/constants/nav-items";
import NavLink from "./NavLink";

const NavItems = () => {
  return (
    <ul className="flex items-center justify-center gap-2.5">
      {NAVITEMS.map((item) => (
        <NavLink key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default NavItems;
