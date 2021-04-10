import { useState, useRef } from "react";
import {
  ChevronLeft,
  WhatsApp,
  LinkedIn,
  MailOutline,
  FileCopyOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Slide, Box, Typography, Tooltip } from "@material-ui/core";
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
  });

  const copied = (x) => {
    if (x === "first") setCopy({ ...copy, first: "Copied" });
    if (x === "second") setCopy({ ...copy, second: "Copied" });
    if (x === "third") setCopy({ ...copy, third: "Copied" });
  };
  return (
    <Slide direction="left" in timeout={800} mountOnEnter unmountOnExit>
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
            <Typography className={classes.text}>
              https://www.linkedin.com/in/ona-lore/
            </Typography>
            <Tooltip
              title={
                <Typography className={classes.tooltip}>
                  {copy.first}
                </Typography>
              }
              placement="right"
            >
              <CopyToClipboard text="https://www.linkedin.com/in/ona-lore/">
                <FileCopyOutlined
                  onClick={() => copied("first")}
                  style={{ color: "#9B9B9B", size: "2vw", marginLeft: 20 }}
                />
              </CopyToClipboard>
            </Tooltip>
          </Box>
          <Box className={classes.box}>
            <MailOutline className={classes.icon} />
            <Typography className={classes.text}>
              ona.lore5@gmail.com
            </Typography>
            <Tooltip
              title={
                <Typography className={classes.tooltip}>
                  {copy.second}
                </Typography>
              }
              placement="right"
            >
              <CopyToClipboard text="ona.lore5@gmail.com">
                <FileCopyOutlined
                  onClick={() => copied("second")}
                  style={{ color: "#9B9B9B", size: "2vw", marginLeft: 20 }}
                />
              </CopyToClipboard>
            </Tooltip>
          </Box>
          <Box className={classes.box}>
            <WhatsApp className={classes.icon} />
            <Typography className={classes.text}>+5491158669033</Typography>
            <Tooltip
              title={
                <Typography className={classes.tooltip}>
                  {copy.third}
                </Typography>
              }
              placement="right"
            >
              <CopyToClipboard text="+5491158669033">
                <FileCopyOutlined
                  onClick={() => copied("third")}
                  style={{ color: "#9B9B9B", size: "2vw", marginLeft: 20 }}
                />
              </CopyToClipboard>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Slide>
  );
}
