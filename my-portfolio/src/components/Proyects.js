import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function Proyects() {
  const classes = useStyles();
  return (
    <Slide direction="left" in timeout={800} mountOnEnter unmountOnExit>
      <div>
        <Link to="/">
          <ChevronLeft />
        </Link>
        Aca irán los proyectos
        <Link to="/contact">
          <ChevronRight />
        </Link>
      </div>
    </Slide>
  );
}
