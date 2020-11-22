import React from "react";

import AppBarComponent from "./components/AppBar";
import UseStyles from "../styles/appComponent";

const useStyles = UseStyles();

export default function AboutAutorComponent(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBarComponent />
    </div>
  );
}
