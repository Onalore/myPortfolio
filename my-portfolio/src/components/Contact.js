import { ChevronLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <Link to="/proyects">
        <ChevronLeft />
      </Link>
      Aca irá el contacto Mail Telefono Linkdn
    </div>
  );
}
