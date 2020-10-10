import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    background: "rgba(240,240,240,0.50)",
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    // eslint-disable-next-line
    ["@media (min-width: 960px)"]: {
      textAlign: "left",
    },
  },
  tempMinMax: {
    fontSize: 35,
    textAlign: "right",
  },
  day: {
    fontSize: 25,
    marginBottom: 5,
    textAlign: "left",
  },
  date: {
    fontSize: 25,
    marginBottom: 5,
    textAlign: "right",
    // eslint-disable-next-line
    ["@media (min-width: 960px)"]: {
      textAlign: "left",
    },
  },
  wind: { fontSize: 25, textAlign: "left" },
  rain: {
    fontSize: 25,
    textAlign: "right",
    // eslint-disable-next-line
    ["@media (min-width: 960px)"]: {
      textAlign: "left",
    },
  },
  svg: {
    height: 250,
    marginRight: -110,
    marginLeft: -110,
    marginTop: -20,
    marginBottom: -30,
  },
  temp: {
    fontSize: 60,
    textAlign: "right",
    fontWeight: "bold",
    paddingTop: 20,
  },
  weather: {
    fontSize: 25,
    fontWeight: "normal",
    textAlign: "left",
    // eslint-disable-next-line
    ["@media (min-width: 960px)"]: {
      textAlign: "center",
    },
  },
});

export default function WeatherCard({ data }) {
  const classes = useStyles();
  const [city, setCity] = useState();
  const [tempMin, setTempMin] = useState();
  const [tempMax, setTempMax] = useState();
  const [weekday, setWeekday] = useState();
  const [date, setDate] = useState();
  const [wind, setWind] = useState();
  const [rain, setRain] = useState();
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (data) {
      const main = data.main;
      const today = new Date().toLocaleDateString();
      const day = days[new Date().getDay()];
      setCity(data.name);
      setTempMin(Math.floor(main.temp_min));
      setTempMax(Math.floor(main.temp_max));
      setWeekday(day);
      setDate(today);
      setWind(data.wind.speed);
      setRain(main.humidity);
      setTemp(Math.floor(main.temp));
      setWeather(data.weather[0]);
    }
  }, [data]);

  return (
    <>
      {data ? (
        <Paper className={classes.root} elevation={3} variant="outlined">
          <Grid container justify="space-evenly" alignItems="center">
            <Grid item xs={12} md={4}>
              <Typography className={classes.title}>{city}</Typography>
            </Grid>

            <Grid item xs={6} md={4}>
              <Typography className={classes.weather}>
                {weather.main}
              </Typography>
            </Grid>

            <Grid item xs={6} md={4}>
              <Typography className={classes.tempMinMax}>
                {tempMin}° {tempMax}°
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Grid container alignItems="flex-start">
                <Grid item xs={6} md={12} className={classes.date}>
                  <Typography className={classes.day}>{weekday}</Typography>
                </Grid>
                <Grid item xs={6} md={12} className={classes.date}>
                  <Typography className={classes.date}>{date}</Typography>
                </Grid>
                <Grid item xs={6} md={12} className={classes.wind}>
                  <Typography className={classes.wind}>{wind}km/h</Typography>
                </Grid>
                <Grid item xs={6} md={12} className={classes.rain}>
                  <Typography className={classes.rain}>{rain}%</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6} md={4}>
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                className={classes.svg}
                alt={data.weather[0].description}
              />
            </Grid>

            <Grid item xs={6} md={4}>
              <Typography className={classes.temp}>{temp}°</Typography>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <></>
      )}
    </>
  );
}

WeatherCard.propTypes = {
  data: PropTypes.shape({
    main: PropTypes.shape({
      humidity: PropTypes.number,
      temp: PropTypes.number,
      temp_min: PropTypes.number,
      temp_max: PropTypes.number,
    }),
    name: PropTypes.string,
    weather: PropTypes.any,
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
  }),
};
