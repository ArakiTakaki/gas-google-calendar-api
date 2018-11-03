import React from "react";
import { hot } from "react-hot-loader";
import { Grid } from "@material-ui/core";
import Nav from "../components/organisms/Nav";
import { Switch, Route } from "react-router-dom";
import PageA from "../pages/PageA";
import Progress from "./components/Progress";

@hot(module)
class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing={16} justify="center">
        <Progress />
        <Nav />
        <Grid item xs={12}>
          <Switch>
            <Route exact path="/" component={PageA} />
          </Switch>
        </Grid>
      </Grid>
    );
  }
}

export default Root;
