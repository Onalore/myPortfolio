import { ChevronLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Slide } from "@material-ui/core";

export default function Contact() {
  return (
    <Slide direction="left" in timeout={800} mountOnEnter unmountOnExit>
      <div>
        <Link to="/proyects">
          <ChevronLeft />
        </Link>
        Aca irá el contacto Mail Telefono Linkdn
      </div>
    </Slide>
  );
}
