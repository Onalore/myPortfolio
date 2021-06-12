import React from "react";
import { ExpandMore, ChevronRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import pic from "../assets/Pic.jpg";
import { Fade, Box, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  photo: {
    height: "27vw",
    borderRadius: 200,
  },
  body: {
    flexDirection: "row",
  },
  size: {
    width: "100%",
    height: "70vh",
  },
  title: {
    fontWeight: 2,
    fontSize: "5vw",
    color: "white",
    textAlign: "right",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Fade in timeout={800}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        className={classes.size}
      >
        <Grid item xs={10} sm={7} style={{ paddingLeft: "5vw" }}>
          <Typography className={classes.title}>
            Hi.
            <Typography style={{ color: "#D4D4D4", fontSize: "3vw" }}>
              Welcome to my portfolio!
            </Typography>
            <Typography
              style={{
                textAlign: "right",
                fontSize: "1.5vw",
                color: "#9B9B9B",
              }}
            >
              I am Ona, from Buenos Aires, Argentina. I am a Full Stack
              Developer, very passionate about design. I consider myself a happy
              and positive person. My aspiration at this moment is to develop
              myself in the IT field. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.{" "}
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={4} sm={5}>
          <img className={classes.photo} src={pic} />
        </Grid>
      </Grid>
    </Fade>
  );
}
