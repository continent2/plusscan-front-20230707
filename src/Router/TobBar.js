import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TopV1 from "../Components/topBar/TopV1";
import TopV2 from "../Components/topBar/TopV2";

function TopBar({ store, stretchLeftBar }) {
  switch (store.headerkinds) {
    case 0:
      return <Fragment></Fragment>;
    case 1:
      return <TopV1 />;
    case 2:
      return <TopV2 />;
    default:
      return <Fragment></Fragment>;
  }
}

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    // setLogin: () => dispatch(setLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopBar));
