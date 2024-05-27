import { useState } from "react";
// React-Bootstrap
import Button from "react-bootstrap/Button";
// Icons
import { FaBars } from "react-icons/fa6";
// Components
import OverlayMenu from "../overlayMenu/OverlayMenu";
import NavBrand from "../brand/NavBrand";
// Styles
import "./mobile-nav.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MobileNav = () => {
  const [show, setShow] = useState(false);

  const closeMenu = () => setShow(false);
  const showMenu = () => setShow(true);

  // TODO: i18n implementation
  const offcanvasTitle: string = "Menu";

  return (
    <div className="mobile-nav-container d-flex justify-content-between align-items-center">
      <NavBrand />
      {!show && (
        <Button onClick={showMenu} className="mobile-nav-button">
          <FaBars />
        </Button>
      )}
      <OverlayMenu show={show} close={closeMenu} title={offcanvasTitle}>
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
        etc.
      </OverlayMenu>
    </div>
  );
};

export default MobileNav;
