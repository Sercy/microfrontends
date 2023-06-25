import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from 'react-router-dom';

export const Copyrights = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/">My App</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}