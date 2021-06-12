import { Typography, Box } from "@material-ui/core";
import JavascriptLogo from "../../assets/javascriptLogo.png";
import ReactNativeLogo from "../../assets/reactNativeLogo.png";
import FirebaseLogo from "../../assets/firebaseLogo.png";
import AnnePic from "../../assets/annePic.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    height: "6vw",
    margin: "1vw",
  },
}));

export default function Glyphbooks() {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <img src={AnnePic} style={{ height: "25vw", marginLeft: "3vw" }} />
      <Box display="flex" flexDirection="column" ml={"6vw"}>
        <Box display="flex" flexDirection="row">
          <img src={JavascriptLogo} className={classes.img} />
          <img src={ReactNativeLogo} className={classes.img} />
          <img src={FirebaseLogo} className={classes.img} />
        </Box>
        <Typography style={{ margin: 15, color: "#9B9B9B" }}>
          Development of a Single Page Application.
          <br />
          Some features: search, metrics, incorporation of video calls.
          <br />
          Project carried out in an academic setting. <br />
        </Typography>
      </Box>
    </Box>
  );
}
