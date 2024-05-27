import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

type OverlayMenuProps = {
  show: boolean;
  close: () => void;
  title: string;
  children: React.ReactNode;
};

const OverlayMenu = ({ show, close, title, children }: OverlayMenuProps) => (
  <Offcanvas show={show} onHide={close} className="overlay-menu">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>{title}</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>{children}</Offcanvas.Body>
  </Offcanvas>
);

export default OverlayMenu;
