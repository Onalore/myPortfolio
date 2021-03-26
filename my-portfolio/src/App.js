import React from "react";
import NavBar from "./components/NavBar";
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
          <Switch>
            <NavBar />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}
