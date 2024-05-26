// Enums
import EBreakpoints from "../../enum/EBreakpoints";

// Components
import MobileNav from "./mobile/MobileNav";
import SideNav from "./side/SideNav";
import TopNav from "./top/TopNav";

type NavigationProps = {
  width: number;
};

const Navigation = ({ width }: NavigationProps) => {
  if (width >= EBreakpoints.XL) return <SideNav />;
  if (width >= EBreakpoints.MD) return <TopNav />;
  return <MobileNav />;
};

export default Navigation;
