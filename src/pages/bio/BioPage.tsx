import useBreakpoint from "../../hooks/useBreakpoint";
import MainContentWrapper from "../../wrappers/mainContent/MainContentWrapper";
import "./bio-page.scss";

const BioPage = () => {
  const breakpoint = useBreakpoint();

  return (
    <MainContentWrapper breakpoint={breakpoint}>
      mmy bio page
    </MainContentWrapper>
  );
};

export default BioPage;
