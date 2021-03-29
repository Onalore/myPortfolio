import React from "react";
import { ExpandMore, ChevronRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      Hello!
      <ExpandMore />
      <Link to="/proyects">
        <ChevronRight />
      </Link>
    </div>
  );
}
