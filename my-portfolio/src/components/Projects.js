import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Fade, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GlyphPic from "../assets/glyphPic.png";
import AnnePic from "../assets/annePic.png";
import { shadows } from "@material-ui/system";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  size: {
    width: "100%",
    height: "70vh",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "25vw",
    height: "20vw",
    margin: 35,
    background: "#FFFFFF",
  },
  alignment: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "3vw",
    color: "#D4D4D4",
    shadow: 10,
  },
  text: {
    fontSize: "2vw",
    color: "#9B9B9B",
    textShadow: "25",
  },
}));

export default function Projects() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Fade direction="left" in timeout={800} mountOnEnter unmountOnExit>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.size}
      >
        <Link style={{ textDecoration: "none" }} to="/anne">
          <Box className={classes.alignment}>
            <Box boxShadow={5} className={classes.box}>
              <img src={AnnePic} style={{ height: "15vw" }} />
            </Box>
            <Typography className={classes.title}>ANNE</Typography>
            <Typography className={classes.text}>App Mobile</Typography>
          </Box>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/glyphbooks">
          <Box className={classes.alignment}>
            <Box boxShadow={5} className={classes.box}>
              <img src={GlyphPic} style={{ height: "18vw" }} />
            </Box>
            <Typography textShadow={25} className={classes.title}>
              Glyphbooks
            </Typography>
            <Typography className={classes.text}>E-Commerce</Typography>
          </Box>
        </Link>
      </Box>
    </Fade>
  );
}
