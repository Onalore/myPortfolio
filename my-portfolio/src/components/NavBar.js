import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  border: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.border}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Ona Loré
          </Typography>
          <Button color="black" onClick={() => push("/proyects")}>
            Proyects
          </Button>
          <Button color="black">Contact</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
}
