import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import { Copyrights } from "./Copyrights";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export const Footer = ({ children }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      {children}
      <Copyrights />
    </footer>
  );
};
