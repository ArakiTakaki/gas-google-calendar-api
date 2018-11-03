import React from "react";
import { BasicLink } from "./NavUrl";
import { Grid } from "@material-ui/core";

const LINKS = [
  { path: "/", name: "単元追加" },
  { path: "/delete", name: "単元削除" }
];

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        {LINKS.map(link => (
          <Grid item xs={2} key={link.name}>
            <BasicLink path={link.path}>{link.name}</BasicLink>
          </Grid>
        ))}
      </React.Fragment>
    );
  }
}

export default Nav;
