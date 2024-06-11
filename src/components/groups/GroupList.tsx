import GroupCard from "./GroupCard";
import { useEffect, useState } from "react";

const GroupList = () => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const storedGroups = localStorage.getItem("groups");
    if (storedGroups) {
      setGroups(JSON.parse(storedGroups));
    }
  }, [groups]);

  if (groups.length === 0) {
    return (
      <div className="w-full py-4 mt-5 flex items-center justify-center">
        <h1 className="text-sm font-medium capitalize">
          You don&apos;t have groups yet!
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col gap-3">
      {groups.map((group, i) => (
        <GroupCard key={i} group={group} />
      ))}
    </div>
  );
};

export default GroupList;
