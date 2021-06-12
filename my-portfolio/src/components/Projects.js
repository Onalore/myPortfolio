import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Fade, Box, Typography, Grid } from "@material-ui/core";
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
    width: "23vw",
    height: "19vw",
    margin: 30,
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
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.size}
      >
        <Grid
          item
          xs={10}
          sm={6}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Link style={{ textDecoration: "none" }} to="/anne">
              <Box boxShadow={5} className={classes.box}>
                <img src={AnnePic} style={{ height: "15vw" }} />
              </Box>
            </Link>
          </Grid>
          <Grid item>
            <Link style={{ textDecoration: "none" }} to="/anne">
              <Typography className={classes.title}>ANNE</Typography>
              <Typography className={classes.text}>App Mobile</Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          xs={10}
          sm={6}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Link style={{ textDecoration: "none" }} to="/glyphbooks">
              <Box boxShadow={5} className={classes.box}>
                <img src={GlyphPic} style={{ height: "18vw" }} />
              </Box>
            </Link>
          </Grid>
          <Grid item>
            <Link style={{ textDecoration: "none" }} to="/glyphbooks">
              <Typography textShadow={25} className={classes.title}>
                Glyphbooks
              </Typography>
              <Typography className={classes.text}>E-Commerce</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
}
