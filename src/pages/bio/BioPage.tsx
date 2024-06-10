import Row from "react-bootstrap/esm/Row";
import EducationCard from "../../components/cards/EducationCard";
import ExperienceCard from "../../components/cards/ExperienceCard";
import "./bio-page.scss";
import {
  DiBitbucket,
  DiBootstrap,
  DiCss3,
  DiDatabase,
  DiDropbox,
  DiEclipse,
  DiGit,
  DiGitBranch,
  DiGithub,
  DiGithubAlt,
  DiGithubBadge,
  DiGithubFull,
  DiHtml5,
  DiIntellij,
  DiJava,
  DiJavascript,
  DiJavascript1,
  DiJqueryLogo,
  DiJsBadge,
  DiLess,
  DiMarkdown,
  DiMitlicence,
  DiMongodb,
  DiMysql,
  DiNetbeans,
  DiNodejs,
  DiNodejsSmall,
  DiNpm,
  DiOnedrive,
  DiOpera,
  DiReact,
  DiSass,
  DiSqllite,
  DiTerminal,
  DiTerminalBadge,
  DiTrello,
  DiVisualstudio,
  DiW3C,
  DiWindows,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import Col from "react-bootstrap/esm/Col";

const BioPage = () => {
  const devIconSize: string = "4rem";

  return (
    <>
      <h2 className="mb-5">Experience</h2>

      <ExperienceCard />

      <hr className="my-3" />

      <h2 className="my-5">Education</h2>

      <EducationCard />

      <hr className="my-5" />

      <h2 className="mb-5">Skills</h2>

      <Row className="text-center d-flex">
        <Col>
          <DiHtml5 size={devIconSize} /> HTML5
        </Col>
        <Col>
          <DiCss3 size={devIconSize} /> CSS3
        </Col>
        <Col>
          <DiJsBadge size={devIconSize} /> JavaScript
        </Col>
        <Col>
          <SiTypescript size={devIconSize} /> TypeScript
        </Col>
        <Col>
          <DiBootstrap size={devIconSize} /> Bootstrap
        </Col>
        <Col>
          <DiGit size={devIconSize} /> Git
        </Col>
        <Col>
          <DiJava size={devIconSize} /> Java
        </Col>
        <Col>
          <DiReact size={devIconSize} /> React
        </Col>
        <Col>
          <DiMongodb size={devIconSize} /> MongoDB
        </Col>
        <Col>
          <DiMysql size={devIconSize} /> MySQL
        </Col>
      </Row>
      <Row>
        <Col>
          <DiLess size={devIconSize} /> Less
        </Col>
        <Col>
          <DiSass size={devIconSize} /> Sass
        </Col>
        <Col>
          <DiJqueryLogo size={devIconSize} /> jQuery
        </Col>
        <Col>
          <DiNodejsSmall size={devIconSize} /> Node.js
        </Col>
        <Col>
          <DiNpm size={devIconSize} /> npm
        </Col>
        <Col>
          <DiMarkdown size={devIconSize} /> Markdown
        </Col>
        <Col>
          <DiSqllite size={devIconSize} /> SQLite
        </Col>
        <Col>
          <DiDatabase size={devIconSize} /> Database
        </Col>
      </Row>

      <Row>
        {/* <DiEclipse size={devIconSize} /> */}
        {/* <DiDropbox size={devIconSize} /> */}
        {/* <DiBitbucket size={devIconSize} /> */}
        {/* <DiGitBranch size={devIconSize} /> */}
        {/* <DiIntellij size={devIconSize} /> */}
        {/* <DiNetbeans size={devIconSize} /> */}
        {/* <DiMitlicence size={devIconSize} /> */}
        {/* <DiOnedrive size={devIconSize} /> */}
        {/* <DiOpera size={devIconSize} /> */}
        {/* <DiTrello size={devIconSize} /> */}
        {/* <DiTerminalBadge size={devIconSize} /> */}
        {/* <DiTerminal size={devIconSize} /> */}
        {/* <DiVisualstudio size={devIconSize} /> */}
        {/* <DiW3C size={devIconSize} /> */}
        {/* <DiWindows size={devIconSize} /> */}
      </Row>

      <hr className="my-5" />

      <h2 className="mb-5">Interests</h2>
      <p>
        Apart from being a web developer, I enjoy most of my time being
        outdoors. In the winter, I am an avid skier and novice ice climber.
        During the warmer months here in Colorado, I enjoy mountain biking, free
        climbing, and kayaking.
      </p>
      <p className="mb-0">
        When forced indoors, I follow a number of sci-fi and fantasy genre
        movies and television shows, I am an aspiring chef, and I spend a large
        amount of my free time exploring the latest technology advancements in
        the front-end web development world.
      </p>

      <hr className="my-5" />

      <h2 className="mb-5">Awards & Certifications</h2>

      <ul className="fa-ul mb-0">
        <li>
          <span className="fa-li">
            <i className="fas fa-trophy text-warning"></i>
          </span>
          Google Analytics Certified Developer
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-trophy text-warning"></i>
          </span>
          Mobile Web Specialist - Google Certification
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-trophy text-warning"></i>
          </span>
          1<sup>st</sup>
          Place - University of Colorado Boulder - Emerging Tech Competition
          2009
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-trophy text-warning"></i>
          </span>
          1<sup>st</sup>
          Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI
          Design Category)
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-trophy text-warning"></i>
          </span>
          2<sup>nd</sup>
          Place - University of Colorado Boulder - Emerging Tech Competition
          2008
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-trophy text-warning"></i>
          </span>
          1<sup>st</sup>
          Place - James Buchanan High School - Hackathon 2006
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-trophy text-warning"></i>
          </span>
          3<sup>rd</sup>
          Place - James Buchanan High School - Hackathon 2005
        </li>
      </ul>
    </>
  );
};

export default BioPage;
