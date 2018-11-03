import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from "~/store/actions";
import { Button, Typography, Grid } from "@material-ui/core";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});
const mapStateToProps = state => ({ number: state.number });
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class PageA extends React.Component {
  render() {
    const { number } = this.props;
    return (
      <Grid container direction="column" alignItems="center" spacing={24}>
        <Grid item xs={2}>
          <Button
            variant="fab"
            onClick={this.props.actions.incrementRequest}
            color="primary"
          >
            ASYNC
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="fab"
            onClick={this.props.actions.increment}
            color="primary"
          >
            INC
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Typography align="center" variant="display1">
            {number}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="fab"
            onClick={this.props.actions.decrement}
            color="secondary"
          >
            DEC
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default PageA;
