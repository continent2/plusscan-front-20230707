import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { closePopupAll, setChain } from "../../Util/store";

function ProfPopup({ store, setChain, closePopupAll }) {
  function onClickProf() {
    closePopupAll();
  }
  
  return (
    <ProfPopupBox>
      {chainList.map((chain, index) => (
        <li
          key={index}
          onClick={() => onClickProf()}
        >
          {chain}
        </li>
      ))}
    </ProfPopupBox>
  );
}

const ProfPopupBox = styled.ul`
  width: 240px;
  background: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  z-index: 6;
  position: absolute;
  right: 50px;
  top: 45px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  padding: 0 23px;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 56px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    color: #222;
    cursor: pointer;

    .dot {
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
    }
  }
`;

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    setChain: (chain) => dispatch(setChain(chain)),
    closePopupAll: () => dispatch(closePopupAll()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfPopup);

const chainList = ["내 프로필", "관심목록", "API Key", "로그아웃"];
