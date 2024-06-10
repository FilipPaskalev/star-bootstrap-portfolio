import ProjectsCarousel from "../../components/carousel/ProjectsCarousel";
import useBreakpoint from "../../hooks/useBreakpoint";
import MainContentWrapper from "../../wrappers/mainContent/MainContentWrapper";
import "./my-work-page.scss";

const MyWorkPage = () => {
  const breakpoint = useBreakpoint();

  return <ProjectsCarousel />;
};

export default MyWorkPage;
