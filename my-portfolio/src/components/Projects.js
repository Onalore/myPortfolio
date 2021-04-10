import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Slide, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  size: {
    width: "100%",
    height: "70vh",
  },
}));

export default function Projects() {
  const classes = useStyles();
  return (
    <Slide direction="left" in timeout={800} mountOnEnter unmountOnExit>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.size}
      >
        Aca irán los proyectos
      </Box>
    </Slide>
  );
}
