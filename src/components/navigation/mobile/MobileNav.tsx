import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FaBars } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mobile-nav.css";
import OverlayMenu from "../overlayMenu/OverlayMenu";
import NavBrand from "../brand/NavBrand";

const MobileNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const offcanvasTitle: string = "Menu";
  const navBrandLabel: string = "Brand";

  return (
    <div className="mobile-nav-container d-flex justify-content-between align-items-center">
      <NavBrand label={navBrandLabel} />
      {!show && (
        <Button onClick={handleShow} className="mobile-nav-button">
          <FaBars />
        </Button>
      )}
      <OverlayMenu show={show} handleClose={handleClose} title={offcanvasTitle}>
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
        etc.
      </OverlayMenu>
    </div>
  );
};

export default MobileNav;
