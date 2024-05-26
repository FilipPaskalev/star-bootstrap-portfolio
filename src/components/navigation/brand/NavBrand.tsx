import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import EPagesPaths from "../../../enum/EPagesPaths";

type NavBarProps = {
  label: string;
  children?: React.ReactNode;
};

const NavBrand = ({ label, children }: NavBarProps) => {
  return (
    <Navbar.Brand>
      <Link to={EPagesPaths.HOME}>{label}</Link>
      {children}
    </Navbar.Brand>
  );
};

export default NavBrand;
