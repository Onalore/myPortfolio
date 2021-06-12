import { Grid, Typography, Tooltip, Fade } from "@material-ui/core";
import { useState } from "react";
import { WhatsApp, LinkedIn, MailOutline, GitHub } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "6vw",
    marginRight: 20,
    color: "#F8CDDA",
  },
  size: {
    width: "85%",
    height: "65vh",
    paddingBottom: "7vh",
  },
  text: {
    fontSize: "3vw",
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
    <Fade in timeout={800}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.size}
      >
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sm={1}
            container
            justify="center"
            alignItems="center"
          >
            <LinkedIn Outline className={classes.icon} />
          </Grid>
          <Grid item xs={9} sm={9}>
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
                <Typography
                  onClick={() => copied("first")}
                  style={{ cursor: "pointer" }}
                >
                  https://www.linkedin.com/in/ona-lore/
                </Typography>
              </CopyToClipboard>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={8}
            sm={1}
            container
            justify="center"
            alignItems="center"
          >
            <GitHub className={classes.icon} />
          </Grid>
          <Grid item xs={7} sm={7}>
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
                <Typography
                  onClick={() => copied("second")}
                  style={{ cursor: "pointer" }}
                >
                  http://www.github.com/Onalore
                </Typography>
              </CopyToClipboard>
            </Tooltip>
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={8}
            sm={1}
            container
            justify="center"
            alignItems="center"
          >
            <MailOutline className={classes.icon} />
          </Grid>
          <Grid item xs={5} sm={5}>
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
                <Typography
                  onClick={() => copied("third")}
                  style={{ cursor: "pointer" }}
                >
                  ona.lore5@gmail.com
                </Typography>
              </CopyToClipboard>
            </Tooltip>
          </Grid>
          <Grid item xs={0} sm={4} />
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={10}
            sm={1}
            container
            justify="center"
            alignItems="center"
          >
            <WhatsApp className={classes.icon} />
          </Grid>
          <Grid item xs={4} sm={4}>
            <Tooltip
              title={
                <Typography className={classes.tooltip}>
                  {copy.fourth}
                </Typography>
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
          <Grid item xs={0} sm={5} />
        </Grid>
      </Grid>
    </Fade>
  );
}
