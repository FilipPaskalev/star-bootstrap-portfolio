import useBreakpoint from "../../hooks/useBreakpoint";
import MainContentWrapper from "../../wrappers/mainContent/MainContentWrapper";
import "./lets-talk-page.scss";

const LetsTalkPage = () => {
  const breakpoint = useBreakpoint();

  return (
    <MainContentWrapper breakpoint={breakpoint}>
      Lets talk page
    </MainContentWrapper>
  );
};

export default LetsTalkPage;
