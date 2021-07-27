import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Container, Button } from "@material-ui/core";
import LoginDialog from "./Dialogs/LoginDialog";
import useStyles from "./App.styles";

function App() {
  const styles = useStyles();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>Supabase demo app</Typography>
          <Button color="inherit" onClick={() => setIsLoginOpen(true)}>Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <h2 className={styles.header}>Latest news</h2>
      </Container>
      <LoginDialog isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
    </>
  );
}

export default App;
