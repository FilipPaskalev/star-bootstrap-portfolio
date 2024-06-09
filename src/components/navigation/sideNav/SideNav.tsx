// import { Link } from "react-router-dom";
import "./side-nav.scss";
// import EnumPaths from "../../../router/EnumPaths";
// import {
//   FaFileLines,
//   FaHouseUser,
//   FaLaptopCode,
//   FaPaperPlane,
// } from "react-icons/fa6";
import { Menu } from "../menu/Menu";

type TSideNavProps = {
  brandLabel: string;
};

const SideNav = ({ brandLabel }: TSideNavProps) => {
  return (
    <>
      <div className="side-bar">
        <Menu />
      </div>
    </>
  );
};

export default SideNav;
