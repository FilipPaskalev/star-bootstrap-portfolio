import { FC } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

interface OverlayMenuProps {
  show: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
}

const OverlayMenu: FC<OverlayMenuProps> = ({ show, handleClose, title, children }) => {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{children}</Offcanvas.Body>
    </Offcanvas>
  );
};

export default OverlayMenu;
