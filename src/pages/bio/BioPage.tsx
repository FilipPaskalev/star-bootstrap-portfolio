import ExperienceCard from "../../components/cards/ExperienceCard";
import useBreakpoint from "../../hooks/useBreakpoint";
import MainContentWrapper from "../../wrappers/mainContent/MainContentWrapper";
import "./bio-page.scss";

const BioPage = () => {
  const breakpoint = useBreakpoint();

  return (
    <MainContentWrapper breakpoint={breakpoint}>
      <h2>Experience</h2>

      <ExperienceCard />
    </MainContentWrapper>
  );
};

export default BioPage;
