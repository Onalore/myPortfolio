import React from "react";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import { Grid, Container } from "@material-ui/core";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}
