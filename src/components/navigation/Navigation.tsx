// Enums
import EBreakpoints from "../../enum/EBreakpoints";

// Components
import MobileNav from "./MobileNav";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

type NavigationProps = {
  width: number;
};

const Navigation = ({ width }: NavigationProps) => {
  if (width >= EBreakpoints.XL) return <SideNav />;
  if (width >= EBreakpoints.MD) return <TopNav />;
  return <MobileNav />;
};

export default Navigation;
