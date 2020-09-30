import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 450,
    minHeight: 350,
    textAlign: "center",
    padding: 20,
  },
  title: { fontSize: 25, textAlign: "left", fontWeight: "bold" },
  tempMinMax: { fontSize: 18, textAlign: "right" },
  date: { fontSize: 20, marginBottom: 5 },
  wind: { fontSize: 15 },
  rain: { fontSize: 20 },
});

export default function MeteoCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3} variant="outlined">
      <Grid container>
        <Grid item xs={6}>
          <Typography className={classes.title} color="textPrimary">
            CITY NAME
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography className={classes.tempMinMax} color="textPrimary">
            18° 25°
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item className={classes.date}>
              MONDAY
            </Grid>
            <Grid item className={classes.date}>
              00/00/2016
            </Grid>
            <Grid item className={classes.wind}>
              Wind 6km/h
            </Grid>
            <Grid item className={classes.rain}>
              30%
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          IMAGE METEO
        </Grid>

        <Grid item xs={4}>
          TEMPERATURE
        </Grid>
      </Grid>
    </Paper>
  );
}
