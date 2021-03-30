import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Proyects() {
  return (
    <div>
      <Link to="/">
        <ChevronLeft />
      </Link>
      Aca irán los proyectos
      <Link to="/contact">
        <ChevronRight />
      </Link>
    </div>
  );
}
