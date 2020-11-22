import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import LinearProgress from "@material-ui/core/LinearProgress";

import UseStyles from "../styles/appShowMusic";

const useStyles = UseStyles();

export default function ShowMusicComponent(): JSX.Element {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.content}>
      <div className={classes.divImage}>
        <img src="" alt="imagem do autor" className={classes.image} />
      </div>
      <form noValidate autoComplete="off" className={classes.formContent}>
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField
          id="outlined-basic"
          className={classes.formContentField}
          label="Outlined"
          variant="outlined"
        />
      </form>

      <div className={classes.divCardMusic}>
        <Card className={classes.cardMusic}>
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
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Algo</Button>
          </CardActions>
        </Card>
        <Button variant="contained" className={classes.cardButton}>
          Algo
        </Button>
      </div>
    </div>
  );
}
