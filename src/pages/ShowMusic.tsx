import React from "react";

import {
  TextField,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

// import CircularProgress from "@material-ui/core/CircularProgress";
// import LinearProgress from "@material-ui/core/LinearProgress";

import UseStyles from "../styles/appShowMusic";

const useStyles = UseStyles();

interface DataMusicLetter {
  art: {
    name: string;
    pic_small: string;
    pic_medium: string;
  };
  mus: {
    text: string;
    translate: {
      text: string;
    };
  };
}

function getMusicLetter(url: string) {
  var dataMusicLetter: DataMusicLetter = {
    art: { name: "", pic_medium: "", pic_small: "" },
    mus: {
      text: "",
      translate: {
        text: "",
      },
    },
  };

  fetch(url)
    .then((res: any) => res.json())
    .then((data: any) => {
      if (data != dataMusicLetter) {
        throw "Error";
      }
      dataMusicLetter = data;
    })
    .catch((err: any) => {});
  return dataMusicLetter;
}

export default function ShowMusicComponent(): JSX.Element {
  const classes = useStyles.MakeStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const classesTwo = useStyles.CreateStyles();
  const dataMusicLetter = getMusicLetter(
    "http://localhost/PWII/Projects/projeto-001-integrando-com-api/backend/src/getMusicLetter.php"
  ).mus.translate.text;

  return (
    <div className={classes.content}>
      <div className={classes.image}>
        <img src="" alt="Imagem do autor" />
      </div>

      <form className={classesTwo.form} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Autor"
          variant="outlined"
          className={classes.input}
        />
        <TextField
          id="outlined-basic"
          label="Musica"
          variant="outlined"
          className={classes.input}
        />
        <Button variant="contained" color="primary" className={classes.input}>
          Procurar
        </Button>
      </form>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            {dataMusicLetter}
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
