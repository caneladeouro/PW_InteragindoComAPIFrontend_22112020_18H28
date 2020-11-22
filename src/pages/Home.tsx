import React from "react";
import clsx from "clsx";

import "../styles/main.css";
import NotaMusical from "../assets/icons/nota-musical.png";
import "../styles/Home.css";
import UseStyles from "../styles/appComponent";

const useStyles = UseStyles();

export default function Home() {
  const classes = useStyles();
  const open = React.useState(false);

  return (
    <div className={classes.root}>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <h3>
          Your Music <br />
          our song
        </h3>
        <div id="image">
          <img src={NotaMusical} alt="nota musical" />
        </div>
      </main>
    </div>
  );
}
