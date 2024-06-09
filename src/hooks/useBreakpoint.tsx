import { useState, useEffect } from "react";
import useWindowWidth from "./useWindowWidth";
import { BREAKPOINTS } from "../utils/constants/breakpoints";

const useBreakpoint = (): string => {
  const windowWidth = useWindowWidth();
  const [breakpoint, setBreakpoint] = useState<string>(BREAKPOINTS.XS.key);

  useEffect(() => {
    const getBreakpoint = (): string => {
      if (windowWidth >= BREAKPOINTS.XXL.min) return BREAKPOINTS.XXL.key;
      if (windowWidth >= BREAKPOINTS.XL.min) return BREAKPOINTS.XL.key;
      if (windowWidth >= BREAKPOINTS.LG.min) return BREAKPOINTS.LG.key;
      if (windowWidth >= BREAKPOINTS.MD.min) return BREAKPOINTS.MD.key;
      if (windowWidth >= BREAKPOINTS.SM.min) return BREAKPOINTS.SM.key;
      return BREAKPOINTS.XS.key;
    };

    setBreakpoint(getBreakpoint());
  }, [windowWidth]);

  return breakpoint;
};

export default useBreakpoint;
