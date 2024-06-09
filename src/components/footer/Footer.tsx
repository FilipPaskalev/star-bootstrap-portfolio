import useBreakpoint from "../../hooks/useBreakpoint";
import { BREAKPOINTS } from "../../utils/constants/breakpoints";
import "./footer.scss";

const Footer = () => {
  const breakpoint = useBreakpoint();

  return (
    <footer
      className={
        breakpoint === BREAKPOINTS.XL.key || breakpoint === BREAKPOINTS.XXL.key
          ? "left-pusher"
          : ""
      }
    >
      <p>© 2024 Footer section</p>
    </footer>
  );
};

export default Footer;
