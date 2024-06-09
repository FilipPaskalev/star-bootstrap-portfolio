import { Container, Row, Image, Col } from "react-bootstrap";
import { FaUserFriends } from "react-icons/fa";
import {
  FaFacebookMessenger,
  FaFileLines,
  FaGitAlt,
  FaGithub,
  FaHouseUser,
  FaLaptopCode,
  FaPaperPlane,
  FaUserCheck,
} from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import EnumPaths from "../../../router/EnumPaths";
import AVATAR from "../../../assets/avatar.png";
import SwitchThemeButton from "../../buttons/SwitchThemeButton";
import { Link } from "react-router-dom";

type Props = {
  closeMenu?: () => void;
};

export const Menu = ({ closeMenu }: Props) => {
  const followers = 7;
  const following = 25;
  const repos = 39;

  return (
    <Container className="text-center">
      <Image src={AVATAR} className="avatar my-5 " roundedCircle fluid />
      <Row className="mb-3">
        <Col>
          <a href="">
            <FaGithub className="social-icon" />
          </a>
          <TiSocialLinkedinCircular className="social-icon" />
          <FaFacebookMessenger className="social-icon" />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <FaGitAlt /> {repos} repositories
        </Col>
        <Col>
          <FaUserCheck /> {following} following
        </Col>
        <Col>
          <FaUserFriends /> {followers} followers
        </Col>
      </Row>
      <Container className="mb-3">
        <Link
          className="d-block mb-2"
          to={EnumPaths.ABOUT_ME}
          onClick={closeMenu}
        >
          <FaHouseUser /> About Me
        </Link>
        <Link className="d-block mb-2" to={EnumPaths.BIO} onClick={closeMenu}>
          <FaFileLines /> Bio
        </Link>
        <Link
          className="d-block mb-2"
          to={EnumPaths.MY_WORK}
          onClick={closeMenu}
        >
          <FaLaptopCode /> My Work
        </Link>
        <Link
          className="d-block mb-5"
          to={EnumPaths.LETS_TALK}
          onClick={closeMenu}
        >
          <FaPaperPlane /> Lets Talk
        </Link>
      </Container>
      <SwitchThemeButton />
    </Container>
  );
};
