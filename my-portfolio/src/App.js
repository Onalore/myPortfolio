import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  background: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: 500,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Box color="white" className={classes.background} p={10}>
      <Box color="pink" bgcolor="white">
        <NavBar />
        <Home />
      </Box>
    </Box>
  );
}
