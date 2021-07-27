import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import useStyles from "./App.styles";

function App() {
  const styles = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Supabase demo app</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <h2 className={styles.header}>Latest news</h2>
      </Container>
    </>
  );
}

export default App;
