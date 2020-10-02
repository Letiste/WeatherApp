import React from "react";
import Grid from "@material-ui/core/Grid";
import MeteoCard from "./MeteoCard";
import SearchBar from "./SearchBar";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  title: { color: "white" },
});

function App() {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography className={classes.title} variant="h1">
        MeteoApp
      </Typography>
      <h1>MeteoApp</h1>
      <SearchBar />
      <MeteoCard />
    </Grid>
  );
}

export default App;
