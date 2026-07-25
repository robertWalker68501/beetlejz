import Navbar from "../navigation/Navbar";

const Header = () => {
  return (
    <header className="border-b border-border backdrop-blur-2xl sticky top-0 py-4">
      <div className="page-wrapper"><Navbar /></div>
    </header>
  );
}

export default Header