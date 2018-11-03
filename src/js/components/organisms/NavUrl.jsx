import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export function BasicLink(props) {
  const { path, children } = props;
  return (
    <Button component={Link} to={path} variant="outlined" color="primary">
      {children}
    </Button>
  );
}
