import useBreakpoint from "../../hooks/useBreakpoint";
import MainContentWrapper from "../../wrappers/mainContent/MainContentWrapper";
import "./my-work-page.scss";

const MyWorkPage = () => {
  const breakpoint = useBreakpoint();

  return (
    <MainContentWrapper breakpoint={breakpoint}>
      my projects page
    </MainContentWrapper>
  );
};

export default MyWorkPage;
