import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border py-4">
      <div className="page-wrapper">
        <p className="text-sm text-muted-foreground">
          BeetleJz &copy; {new Date().getFullYear()} | <Link href='/' className="hover:text-primary">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;