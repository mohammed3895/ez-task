import { NAVITEMS } from "@/constants/nav-items";
import { Link } from "react-router-dom";

interface NavLinkProps {
  item: (typeof NAVITEMS)[number];
}

const NavLink = ({ item }: NavLinkProps) => {
  return (
    <li>
      <Link
        to={item.href}
        className="text-sm hover:text-primary transition-colors capitalize font-medium px-4 py-2 rounded-md hover:bg-accent"
      >
        {item.name}
      </Link>
    </li>
  );
};

export default NavLink;
