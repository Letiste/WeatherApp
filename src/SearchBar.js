import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "rgba(240,240,240,0.8)",
    borderRadius: 4,
  },
});

export default function SearchBar() {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      id="input-with-icon-textfield"
      type="search"
      variant="outlined"
      placeholder="Search a City !"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
