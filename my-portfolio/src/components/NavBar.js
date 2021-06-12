import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import {
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  border: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    boxShadow: "none",
    background: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: 1,
    fontSize: "4vw",
    fontFamily: "Roboto",
    color: "#E2B2CE",
  },
  options: {
    fontWeight: 1,
    fontSize: "2vw",
    fontFamily: "Roboto",
    color: "#E2B2CE",
  },
  offset: theme.mixins.toolbar,
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="secondary" className={classes.border}>
      <Toolbar>
        <Box flexGrow={1}>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography className={classes.title}>ONA LORÉ</Typography>
          </Link>
        </Box>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/projects"
        >
          <Button className={classes.options} m={5}>
            Projects
          </Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/contact">
          <Button className={classes.options}>Contact</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
