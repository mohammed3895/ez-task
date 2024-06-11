import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="w-full h-16 border-b">
      <div className="w-full h-full flex items-center justify-center px-6">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
