import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <main className="w-full h-full min-h-screen antialiased">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default RootLayout;
