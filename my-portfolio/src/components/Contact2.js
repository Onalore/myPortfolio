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
  Grid,
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
    direction: "row",
    justify: "center",
    alignItems: "center",
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
  background: {
    backgroundColor: "red",
  },
  backgroundTwo: {
    backgroundColor: "blue",
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
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.size}
      >
        <Grid item>
          <LinkedIn Outline className={classes.icon} />
        </Grid>
        <Grid item>
          <Tooltip
            title={
              <Typography className={classes.tooltip}>{copy.first}</Typography>
            }
            placement="right"
          >
            <CopyToClipboard
              className={classes.text}
              text="https://www.linkedin.com/in/ona-lore/"
            >
              <Typography
                onClick={() => copied("first")}
                style={{ cursor: "pointer" }}
              >
                https://www.linkedin.com/in/ona-lore/
              </Typography>
            </CopyToClipboard>
          </Tooltip>
        </Grid>
        <Grid item>
          <GitHub className={classes.icon} />
        </Grid>
        <Grid item>
          <Tooltip
            title={
              <Typography className={classes.tooltip}>{copy.second}</Typography>
            }
            placement="right"
          >
            <CopyToClipboard
              className={classes.text}
              text="http://www.github.com/Onalore"
            >
              <Typography
                onClick={() => copied("second")}
                style={{ cursor: "pointer" }}
              >
                http://www.github.com/Onalore
              </Typography>
            </CopyToClipboard>
          </Tooltip>
        </Grid>
        <Grid item>
          <MailOutline className={classes.icon} />
        </Grid>
        <Grid item>
          <Tooltip
            title={
              <Typography className={classes.tooltip}>{copy.third}</Typography>
            }
            placement="right"
          >
            <CopyToClipboard
              className={classes.text}
              text="ona.lore5@gmail.com"
            >
              <Typography
                onClick={() => copied("third")}
                style={{ cursor: "pointer" }}
              >
                ona.lore5@gmail.com
              </Typography>
            </CopyToClipboard>
          </Tooltip>
        </Grid>
        <Grid item>
          <WhatsApp className={classes.icon} />
        </Grid>
        <Grid item>
          <Tooltip
            title={
              <Typography className={classes.tooltip}>{copy.fourth}</Typography>
            }
            placement="right"
          >
            <CopyToClipboard className={classes.text} text="+5491158669033">
              <Typography
                onClick={() => copied("fourth")}
                style={{ cursor: "pointer" }}
              >
                +5491158669033
              </Typography>
            </CopyToClipboard>
          </Tooltip>
        </Grid>
      </Grid>
    </Fade>
  );
}
