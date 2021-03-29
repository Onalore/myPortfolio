import React from "react";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Proyects from "./components/Proyects";
import Home from "./components/Home";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Box } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  background: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: 500,
  },
  box: {
    borderRadius: 20,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <Box color="white" className={classes.background} p={5}>
        <Box color="pink" bgcolor="white" className={classes.box}>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/proyects">
              <Proyects />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}
