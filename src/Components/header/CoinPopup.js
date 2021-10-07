import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { closePopupAll, setChain } from "../../Util/store";

function CoinPopup({ store, setChain, closePopupAll }) {
  function onClickChain(e) {
    setChain(e.target.innerText);
    closePopupAll();
  }
  return (
    <CoinPopupBox>
      {chainList.map((chain, index) => (
        <li
          key={index}
          style={{ color: store.chain === chain && "#a2afd2" }}
          onClick={(e) => onClickChain(e)}
        >
          <span
            className="dot"
            style={{ background: store.chain === chain && "#a2afd2" }}
          />
          {chain}
        </li>
      ))}
    </CoinPopupBox>
  );
}

const CoinPopupBox = styled.ul`
  width: 240px;
  background: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  z-index: 6;
  position: absolute;
  right: 0;
  top: 45px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 56px;
    padding-left: 16px;
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

export default connect(mapStateToProps, mapDispatchToProps)(CoinPopup);

const chainList = ["Mainnet", "Testnet"];
