import PropTypes from "prop-types";
import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import WeatherService from "./services/WeatherService";

const useStyles = makeStyles({
  root: {
    marginBottom: 30,
    backgroundColor: "rgba(240,240,240,0.8)",
    borderRadius: 4,
  },
});

function handleChange(e, setValue) {
  setValue(e.target.value);
}

export default function SearchBar({ setData }) {
  const classes = useStyles();
  const [city, setCity] = useState("");

  function searchCity(e) {
    if (e.key === "Enter") {
      console.log(city);
      WeatherService.get(city)
        .then((res) => setData(res.data))
        .catch(console.log);
    }
  }

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
      onKeyPress={searchCity}
      onChange={(e) => handleChange(e, setCity)}
    />
  );
}

SearchBar.propTypes = {
  setData: PropTypes.func,
};
