import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/about-me">About Me</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact-me">Contact Me</Link>
    </div>
  );
};

export default Navigation;
