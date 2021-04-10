import React from "react";
import { ExpandMore, ChevronRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import pic from "../assets/Pic.jpg";
import { Fade, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  photo: {
    height: "25vw",
    borderRadius: 200,
    marginRight: 35,
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
    fontSize: "6vw",
    color: "white",
    textAlign: "right",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Fade in timeout={800}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.size}
      >
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box m={5}>
            <Typography className={classes.title}>
              Hi.
              <Typography style={{ color: "#D4D4D4", fontSize: "4vh" }}>
                Welcome to my portfolio!
              </Typography>
              <Typography
                style={{
                  textAlign: "right",
                  fontSize: "2vw",
                  color: "#9B9B9B",
                }}
              >
                I am Ona, from Buenos Aires, Argentina. I am a Full Stack
                Developer, very passionate about design. I consider myself a
                happy and positive person. I am usually relaxed but I like
                things to be done well. My aspiration at this moment is to
                develop myself in the IT field.{" "}
              </Typography>
            </Typography>
          </Box>
          <Box>
            <img className={classes.photo} src={pic} />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
