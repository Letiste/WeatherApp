import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import cloudy from "./assets/animated/rainy-3.svg";

const useStyles = makeStyles({
  root: {
    minWidth: 450,
    minHeight: 350,
    textAlign: "center",
    padding: 20,
    background: "rgba(240,240,240,0.8)",
  },
  title: { fontSize: 35, textAlign: "left", fontWeight: "bold" },
  tempMinMax: { fontSize: 25, textAlign: "right" },
  date: { fontSize: 25, marginBottom: 5 },
  wind: { fontSize: 19 },
  rain: { fontSize: 25 },
  svg: { height: 250, marginRight: -110, marginLeft: -110 },
  temp: { fontSize: 100, textAlign: "right" },
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
          <Typography className={classes.tempMinMax}>18° 25°</Typography>
        </Grid>

        <Grid item xs={4}>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item className={classes.date}>
              <Typography className={classes.date}>MONDAY</Typography>
            </Grid>
            <Grid item className={classes.date}>
              <Typography className={classes.date}>00/00/2016</Typography>
            </Grid>
            <Grid item className={classes.wind}>
              <Typography className={classes.wind}>Wind 6km/h</Typography>
            </Grid>
            <Grid item className={classes.rain}>
              <Typography className={classes.rain}>30%</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <img src={cloudy} className={classes.svg} alt="cloudy-svg" />
        </Grid>

        <Grid item xs={4}>
          <Typography className={classes.temp}>22°</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
