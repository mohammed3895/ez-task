import { GROUPS } from "@/data/groups";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "../ui/use-toast";

interface GroupCardProps {
  group: (typeof GROUPS)[number];
}

// eslint-disable-next-line react-refresh/only-export-components
export const handleDelete = (id: number) => {
  const groups = localStorage.getItem("groups");
  const parsedGroups = groups ? JSON.parse(groups) : [];
  const groupToDelete = parsedGroups.find((el: { id: number }) => el.id === id);

  // Remove the group from the array
  const index = parsedGroups.indexOf(groupToDelete);
  if (index !== -1) {
    parsedGroups.splice(index, 1);
  }

  // Save new array to local storage
  localStorage.setItem("groups", JSON.stringify(parsedGroups));

  window.location.href = "/";
};

const GroupCard = ({ group }: GroupCardProps) => {
  const { toast } = useToast();

  return (
    <div className="w-full p-4 rounded-md border">
      <div className="flex items-start justify-start gap-2">
        {/* GROUP IMAGE */}
        <div className="w-9 h-9 min-w-9 rounded-md bg-accent flex items-center justify-center">
          {group.image ? (
            <img
              src={group.image}
              alt={`${group.name} image`}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <span className="text-base text-muted-foreground">G</span>
          )}
        </div>
        {/* NAME & DESCRIPTION */}
        <div className="w-full flex flex-col items-start justify-start">
          <h1 className="text-sm font-medium capitalize">{group.name}</h1>
          <p className="text-xs font-normal text-muted-foreground capitalize">
            {group.description}
          </p>
        </div>
      </div>

      <div className="w-full flex items-end justify-end gap-2 mt-3">
        <Button
          variant="ghost"
          className="text-xs px-3 py-1.5 text-destructive"
          onClick={() => {
            handleDelete(group.id);
            toast({
              title: `The Group ${group.name} Deleted`,
              variant: "destructive",
            });
          }}
        >
          Delete
        </Button>
        <Link
          to={`/groups/${group.id}`}
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-xs px-3 py-1.5"
          )}
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default GroupCard;
