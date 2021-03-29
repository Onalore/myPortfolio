import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

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

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.border}>
        <Toolbar>
          <Link to="/">
            <Typography variant="h5" className={classes.title}>
              Ona Loré
            </Typography>
          </Link>
          <Link to="/proyects">
            <Button>Proyects</Button>
          </Link>
          <Link to="/contact">
            <Button color="black">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
}
