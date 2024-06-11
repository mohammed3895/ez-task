import CreateGroup from "./CreateGroup";
import GroupList from "./GroupList";

const GroupListWrapper = () => {
  return (
    <div className="w-96 h-full p-4 rounded-lg border max-w-96">
      <div className="w-full flex items-center justify-between mb-4">
        <h1 className="text-sm font-semibold text-muted-foreground">
          Your Groups
        </h1>
        <CreateGroup />
      </div>
      <GroupList />
    </div>
  );
};

export default GroupListWrapper;
