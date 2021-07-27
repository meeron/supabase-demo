import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";

interface LoginDialogProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

enum Mode {
  Login,
  CreateAccount,
}

export default function LoginDialog({ isOpen, setIsOpen }: LoginDialogProps) {
  const [mode, setMode] = useState(Mode.Login);
  const [title, setTitle] = useState("");

  function onClose() {
    setIsOpen(false);
  }

  function createAccount() {
    if (mode === Mode.Login) return setMode(Mode.CreateAccount);

    console.log("Creating an account...");
  }

  function login() {
    if (mode === Mode.CreateAccount) return setMode(Mode.Login);

    console.log("Login...");
  }

  useEffect(() => {
    switch (mode) {
      case Mode.Login:
        setTitle("Login");
        break;
      case Mode.CreateAccount:
        setTitle("Create new account");
        break;
      default:
        break;
    }
  }, [mode]);

  useEffect(() => {
    if (isOpen) {
      setMode(Mode.Login);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent style={{ width: 300 }}>
        <TextField
          autoFocus
          margin="dense"
          name="username"
          label="Username"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          name="password"
          label="Password"
          type="password"
          fullWidth
        />
        {mode === Mode.CreateAccount && (
          <TextField
            autoFocus
            margin="dense"
            name="repeatPassword"
            label="Repeat password"
            type="password"
            fullWidth
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={createAccount}
        >
          Create account
        </Button>
        <Button autoFocus color="primary" onClick={login}>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}
