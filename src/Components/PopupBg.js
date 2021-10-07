import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { closePopupAll } from "../Util/store";

function PopupBg({ store, closePopupAll, bg }) {
  function onClickBg() {
    closePopupAll();
  }

  return (
    <PopupBgBox
      onClick={onClickBg}
      style={{ background: bg && "rgba(0,0,0,0.5" }}
    />
  );
}

const PopupBgBox = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 5;
`;

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    closePopupAll: () => dispatch(closePopupAll()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupBg);
