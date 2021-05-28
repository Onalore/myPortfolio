import { useState, useRef } from "react";
import {
  ChevronLeft,
  WhatsApp,
  LinkedIn,
  MailOutline,
  FileCopyOutlined,
  GitHub,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  Fade,
  Box,
  Typography,
  Tooltip,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";

const useStyles = makeStyles((theme) => ({
  size: {
    width: "100%",
    height: "70vh",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 30,
  },
  icon: {
    fontSize: "5vw",
    marginRight: 20,
    color: "#F8CDDA",
  },
  text: {
    fontSize: "2vw",
    color: "#D4D4D4",
    //"#9B9B9B"
  },
  tooltip: {
    fontSize: "1vw",
    fontFamily: "Roboto",
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [copy, setCopy] = useState({
    first: "Copy",
    second: "Copy",
    third: "Copy",
    fourth: "Copy",
  });

  const copied = (x) => {
    if (x === "first") setCopy({ ...copy, first: "Copied" });
    if (x === "second") setCopy({ ...copy, second: "Copied" });
    if (x === "third") setCopy({ ...copy, third: "Copied" });
    if (x === "fourth") setCopy({ ...copy, fourth: "Copied" });
  };
  return (
    <Fade direction="left" in timeout={800} mountOnEnter unmountOnExit>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        className={classes.size}
      >
        <Box alignItems="flex-start">
          <Box className={classes.box}>
            <LinkedIn Outline className={classes.icon} />

            <Tooltip
              title={
                <Typography className={classes.tooltip}>
                  {copy.first}
                </Typography>
              }
              placement="right"
            >
              <CopyToClipboard
                className={classes.text}
                text="https://www.linkedin.com/in/ona-lore/"
              >
                <Typography onClick={() => copied("first")}>
                  https://www.linkedin.com/in/ona-lore/
                </Typography>
              </CopyToClipboard>
            </Tooltip>
          </Box>
          <Box className={classes.box}>
            <GitHub className={classes.icon} />
            <Tooltip
              title={
                <Typography className={classes.tooltip}>
                  {copy.second}
                </Typography>
              }
              placement="right"
            >
              <CopyToClipboard
                className={classes.text}
                text="http://www.github.com/Onalore"
              >
                <Typography onClick={() => copied("second")}>
                  http://www.github.com/Onalore
                </Typography>
              </CopyToClipboard>
            </Tooltip>
          </Box>
          <Box className={classes.box}>
            <MailOutline className={classes.icon} />
            <Tooltip
              title={
                <Typography className={classes.tooltip}>
                  {copy.third}
                </Typography>
              }
              placement="right"
            >
              <CopyToClipboard
                className={classes.text}
                text="ona.lore5@gmail.com"
              >
                <Typography onClick={() => copied("third")}>
                  ona.lore5@gmail.com
                </Typography>
              </CopyToClipboard>
            </Tooltip>
          </Box>
          <Box className={classes.box}>
            <WhatsApp className={classes.icon} />
            <Tooltip
              title={
                <Typography className={classes.tooltip}>
                  {copy.fourth}
                </Typography>
              }
              placement="right"
            >
              <CopyToClipboard className={classes.text} text="+5491158669033">
                <Typography onClick={() => copied("fourth")}>
                  +5491158669033
                </Typography>
              </CopyToClipboard>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
