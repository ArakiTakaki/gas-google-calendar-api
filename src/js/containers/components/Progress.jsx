import React from "react";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import styles from "../../../scss/base.scss";

const mapStateToProps = state => ({ progress: state.progress });

@connect(
  mapStateToProps,
  null
)
class progress extends React.Component {
  render() {
    if (!this.props.progress) return null;
    return (
      <div className={styles.progress_root}>
        <div className={styles.progress_base}>
          <CircularProgress
            className={styles.progress_base_content}
            size={90}
          />
        </div>
      </div>
    );
  }
}

export default progress;
