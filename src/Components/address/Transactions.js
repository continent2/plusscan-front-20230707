import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_leftArrow from "../../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../../Img/Icon/I_rightArrow.svg";
import { useParams } from "react-router-dom";
import { strDot } from "../../Util/common";
import { API } from "../../Config/api";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Transactions() {
  const { address } = useParams();
  const history = useHistory();


  const [pageNum, setPageNum] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const [txs, setTxs] = useState([]);

  const size = 10;

  function onClickPagePre() {
    if (pageNum > 1) setPageNum(pageNum - 1);
    getTxsAddress(pageNum - 1);
  }
  function onClickPageNxt() {
    setPageNum(pageNum + 1);
    getTxsAddress(pageNum + 1);
  }

  const getTxsAddress = (page) => {
    axios.get(`${API.API_TXS_ADDRESS}${address}/${(page - 1)* size}/${size}/id/DESC`).then((resp) => {
      // console.log("nvsgfeVB2casdf", resp.data);
      if (resp.data.status === "OK") {
        setTxs(resp.data.list)
        if(resp.data.payload.count){
          setPageCount(Math.ceil(resp.data.payload.count / size));
        }else{
          setPageCount(1);
        }
      }
    });
  }

  useEffect(()=>{
    setTxs([]);
    getTxsAddress(1);
  },[address])


  return (
    <TransactionsBox>
      <li className="header">
        {headerList.map((header, index) => (
          <span key={index} className={header}>{header}</span>
        ))}
      </li>

      {txs.map((cont, index) => {
        if (index < 10)
          return (
            <li key={index}>
              <span className="direction">
                {cont.receiver === address && <FontAwesomeIcon icon={faArrowLeft} />}  
                {cont.receiver !== address && <FontAwesomeIcon icon={faArrowRight} />}  
              </span>
              <span className="address">
                <p className="tooltip" onClick={() => history.push(`/address/${cont.receiver}`)}>
                  {strDot(cont.receiver, 20, 20)}
                  <span className="tooltiptext tooltip-bottom">{cont.receiver}</span>
                </p>
              </span>
              <span className="type">
                {cont.typestr === "DEPL-C" && "Contract deploy"}  
                {cont.typestr === "TX-C" && "Send Plus"}  
                {cont.typestr === "TX-T" && "Send Token"}  
              </span>
              <span className="amount">
                {cont.amountdisp}
              </span>
              <span className="timestamp">
                {cont.timestamp}
              </span>
              <span className="gas">
                {cont.gas}
              </span>
            </li>
          );
        else return <></>;
      })}

      <div className="pageBtnBox">
        <button className="preBtn" onClick={onClickPagePre}>
          <img src={I_leftArrow} alt="" />
        </button>
        <span className="pageBox">Page {pageNum} of {pageCount}</span>
        <button className="nxtBtn" onClick={onClickPageNxt}>
          <img src={I_rightArrow} alt="" />
        </button>
      </div>
    </TransactionsBox>
  );
}

const TransactionsBox = styled.ul`
  margin-top: 16px;
  border-top: 1px solid #d1d1d1;

  li {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #373737;

    &.header {
      color: #a2afd2;
      text-transform: uppercase;
      padding: 20px 0;
      border-bottom: 1px solid #d1d1d1;
    }

    span {
      text-align: start;

      .gageBox {
        width: 90px;
        height: 3px;
        background: #eeeeee;
        border-radius: 2px;
        position: relative;

        .gageBar {
          position: absolute;
          display: inline-block;
          width: 76px;
          height: inherit;
          background: #a2afd2;
        }
      }

      &.rank {
        width: 78px;
      }

      &.address {
        width: 344px;
        cursor: pointer;
      }
      &.direction {
        width: 150px;
      }
      &.type {
        width: 170px;
      }
      &.amount {
        width: 150px;
      }
      &.timestamp {
        width: 170px;
      }
      &.gas {
        flex: 1;
      }
    }

    &:nth-of-type(n + 2) {
      .time,
      .txType {
        color: #d1d1d1;
      }
    }
    &:nth-of-type(2) {
      margin-top: 15px;
    }
    &:nth-of-type(n + 3) {
      margin-top: 20px;
    }
    &:last-of-type {
      padding-bottom: 16px;
      border-bottom: 1px solid #d1d1d1;
    }
  }

  .pageBtnBox {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 40px;
    margin-top: 15px;

    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      background: #f0f0f0;
      border-radius: 3px;
    }

    button {
      width: 45px;

      img {
        opacity: 0.28;
      }
    }

    span {
      padding: 0 22px;
    }
  }
`;

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    // SetTopBar: toggle => dispatch(setTopBar(toggle)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);

const headerList = [
  "direction",
  "address",
  "type",
  "amount",
  "timestamp",
  "gas",
];
