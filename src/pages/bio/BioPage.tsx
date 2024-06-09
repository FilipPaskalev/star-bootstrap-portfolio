import EducationCard from "../../components/cards/EducationCard";
import ExperienceCard from "../../components/cards/ExperienceCard";
import "./bio-page.scss";

const BioPage = () => {
  return (
    <>
      <h2 className="mb-5">Experience</h2>
      <ExperienceCard />
      <hr className="my-3" />
      <h2 className="my-5">Education</h2>
      <EducationCard />
    </>
  );
};

export default BioPage;
