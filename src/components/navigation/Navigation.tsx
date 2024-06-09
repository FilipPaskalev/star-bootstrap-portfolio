import { BREAKPOINTS } from "../../constants/breakpoints";
import SideNav from "./sideNav/SideNav";
import TopNav from "./topNav/TopNav";
import MobileNav from "./mobileNav/MobileNav";

type NavigationProps = {
  brandLabel: string;
  breakpoint: string;
};

const Navigation = ({ brandLabel, breakpoint }: NavigationProps) => {
  if (breakpoint === BREAKPOINTS.XXL.key || breakpoint === BREAKPOINTS.XL.key)
    return <SideNav brandLabel={brandLabel} />;

  if (breakpoint === BREAKPOINTS.LG.key || breakpoint === BREAKPOINTS.MD.key)
    return <TopNav brandLabel={brandLabel} />;

  return <MobileNav brandLabel={brandLabel} />;
};

export default Navigation;
