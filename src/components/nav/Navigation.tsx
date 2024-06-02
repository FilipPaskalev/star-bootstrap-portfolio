import EBreakpoints from "../../enum/EBreakpoints";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MobileNav from "./mobile/MobileNav";
import SideNav from "./side/SideNav";
import TopNav from "./top/TopNav";

type TScreenSizeParams = {
  width: number;
  height: number;
};

const Navigation = () => {
  const { width, height }: TScreenSizeParams = useWindowDimensions();

  if (width < EBreakpoints.MD) return <MobileNav />;

  if (width < EBreakpoints.XL) return <TopNav />;

  return <SideNav />;
};

export default Navigation;
