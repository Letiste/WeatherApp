import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import WeatherCard from "./WeatherCard";
import SearchBar from "./SearchBar";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  title: { color: "white", textAlign: "center" },
});

function App() {
  const classes = useStyles();
  const [data, setData] = useState();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography className={classes.title} variant="h1">
        Weather App
      </Typography>
      <SearchBar setData={setData} />
      <WeatherCard data={data} />
    </Grid>
  );
}

export default App;
