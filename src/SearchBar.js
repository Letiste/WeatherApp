import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import WeatherService from "./services/WeatherService";

const useStyles = makeStyles({
  root: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "rgba(240,240,240,0.8)",
    borderRadius: 4,
  },
});

function handleChange(e, setValue) {
  setValue(e.target.value);
}

function searchCity(city, key) {
  if (key === "Enter") {
    WeatherService.get(city)
      .then((res) => console.log(res.data))
      .catch(console.log);
  }
}

export default function SearchBar() {
  const classes = useStyles();
  const [city, setCity] = useState("");

  return (
    <TextField
      className={classes.root}
      id="input-with-icon-textfield"
      type="search"
      variant="outlined"
      placeholder="Search a City !"
      value={city}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      onKeyPress={(e) => searchCity(city, e.key)}
      onChange={(e) => handleChange(e, setCity)}
    />
  );
}
