import { useLoaderData } from "react-router";
import TProfileData from "../../types/TProfileData";
import "./home-page.scss";

const HomePage = () => {
  const DATA = useLoaderData() as TProfileData;

  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
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

        <p className="lead mb-5">{DATA.aboutMe}</p>
        <p className="lead mb-5">{DATA.aboutMe}</p>
        <p className="lead mb-5">{DATA.aboutMe}</p>
        <p className="lead mb-5">{DATA.aboutMe}</p>
        <p className="lead mb-5">{DATA.aboutMe}</p>
        <p className="lead mb-5">{DATA.aboutMe}</p>
        <p className="lead mb-5">{DATA.aboutMe}</p>
        <p className="lead mb-5">{DATA.aboutMe}</p>
      </div>
    </section>
  );
};

export default HomePage;
