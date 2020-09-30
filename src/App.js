import React from "react";
import Grid from "@material-ui/core/Grid";
import MeteoCard from "./MeteoCard";

function App() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1>MeteoApp</h1>
      <MeteoCard />
    </Grid>
  );
}

export default App;
