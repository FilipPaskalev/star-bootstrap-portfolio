import { useLoaderData } from "react-router";
import TypeProfileData from "../../utils/types/TypeProfileData";
import "./about-me-page.scss";
// import MainContentWrapper from "../../wrappers/mainContent/MainContentWrapper";
import useBreakpoint from "../../hooks/useBreakpoint";

const AboutMePage = () => {
  const DATA = useLoaderData() as TypeProfileData;
  const breakpoint = useBreakpoint();

  return (
    <>
      <h1 className="mb-0">
        {DATA.firstName} <span className="text-primary">{DATA.lastName}</span>
      </h1>
      <div className="subheading mb-5">
        {DATA.address} · {DATA.phone} ·{" "}
        <a href={`mailto:${DATA.email}`}>{DATA.email}</a>
      </div>
      <p className="lead mb-5">{DATA.aboutMe}</p>
      <div className="social-icons">
        {DATA.socialLinks.map((link) => (
          <a key={link.platform} className="social-icon" href={link.url}>
            <i className={`fab fa-${link.platform}`}></i>
          </a>
        ))}
      </div>
    </>
  );
};

export default AboutMePage;
