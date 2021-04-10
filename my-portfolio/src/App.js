import React from "react";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Home from "./components/Home";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Grid, Container, Box, Slide, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import theme from "./themeConfig";
import { ChevronRight, ChevronLeft } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  background: {
    background: "linear-gradient(135deg, #F8CDDA 30%, #1D2B64 90%)",
    height: "86vh",
  },
  box: {
    borderRadius: 20,
    width: "80vw",
    height: "80vh",
    background: "linear-gradient(135deg, #eef2f3 60%, #8e9eab 95%)",
  },
  arrow: {
    fontSize: 40,
    marginRight: 15,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={classes.background}
          p={5}
        >
          <Box color="dark" bgcolor="white" className={classes.box}>
            <NavBar />
            <Box display="flex" justifyContent="center" alignItems="flex-end">
              <Switch>
                <Route path="/" exact>
                  <Home />
                  <Box display="flex" alignSelf="center">
                    <Link to="/projects">
                      <ChevronRight className={classes.arrow} />
                    </Link>
                  </Box>
                </Route>

                <Route path="/projects">
                  <Box display="flex" alignSelf="center">
                    <Link to="/">
                      <ChevronLeft className={classes.arrow} />
                    </Link>
                  </Box>
                  <Projects />
                  <Box display="flex" alignSelf="center">
                    <Link to="/contact">
                      <ChevronRight className={classes.arrow} />
                    </Link>
                  </Box>
                </Route>

                <Route path="/contact">
                  <Box display="flex" alignSelf="center">
                    <Link to="/projects">
                      <ChevronLeft className={classes.arrow} />
                    </Link>
                  </Box>
                  <Contact />
                </Route>
              </Switch>
            </Box>
          </Box>
          <Typography
            style={{
              color: "white",
              fontFamily: "Roboto",
              fontWeight: 1,
              marginTop: "3%",
              fontSize: "2vw",
            }}
          >
            made and designed by Ona Loré
          </Typography>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
