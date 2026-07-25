import SiteLogo from "../SiteLogo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      {/* Site Logo */}
      <SiteLogo href="/" />
      
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4"></div>
      
      {/* Mobile Nav */}
      <div className="block md:hidden"></div>
    </nav>
  );
}

export default Navbar;