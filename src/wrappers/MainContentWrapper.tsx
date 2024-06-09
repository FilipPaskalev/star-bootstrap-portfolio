import { BREAKPOINTS } from "../utils/constants/breakpoints";
import "./main-content-wrapper.scss";

type TMainWrapperProps = {
  breakpoint: string;
  children: React.ReactNode;
};

const MainContentWrapper = ({ breakpoint, children }: TMainWrapperProps) => {
  if (breakpoint === BREAKPOINTS.XL.key || breakpoint === BREAKPOINTS.XXL.key) {
    return <main className="left-pusher">{children}</main>;
  } else {
    return <main>{children}</main>;
  }
};

export default MainContentWrapper;
