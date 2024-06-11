import GroupListWrapper from "../groups/GroupListWrapper";

const HomePage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center gap-6 p-4 md:p-6">
      <GroupListWrapper />
    </div>
  );
};

export default HomePage;
