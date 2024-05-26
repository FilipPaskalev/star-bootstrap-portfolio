import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mobile-nav.css"; // Import the custom CSS file for additional styling
import OverlayMenu from "../overlayMenu/OverlayMenu"; // Import the renamed component

const MobileNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mobile-nav-container">
      {!show && (
        <Button variant="primary" onClick={handleShow} className="mobile-nav-button">
          <FaBars className="icon" />
        </Button>
      )}

      <OverlayMenu show={show} handleClose={handleClose} title="Navigation">
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
        etc.
      </OverlayMenu>
    </div>
  );
};

export default MobileNav;
