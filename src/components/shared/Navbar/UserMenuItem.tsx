import { USERITEMS } from "@/constants/user-items";

interface UserItemProps {
  item: (typeof USERITEMS)[number];
}

const UserMenuItem = ({ item }: UserItemProps) => {
  return (
    <div className="w-full cursor-pointer hover:bg-accent transition-colors py-2.5 border-b last:border-none flex items-center justify-start gap-2">
      <item.icon className="w-4 h-4 text-muted-foreground" />
      <p className="text-sm font-medium capitalize">{item.name}</p>
    </div>
  );
};

export default UserMenuItem;
