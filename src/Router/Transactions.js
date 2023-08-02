import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_leftArrow from "../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../Img/Icon/I_rightArrow.svg";
import { strDot } from "../Util/common";
import { API } from "../Config/api";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loadingState } from "../recoil/status";

export function Transactions() {
  const history = useHistory();
  const { numberOrHash } = useParams();

  const [loading, setLoading] = useRecoilState(loadingState);

  const [pageNum, setPageNum] = useState(1);
  const [txList, setTxList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  
  const size = 25;

  function onClickPagePre() {
    if (pageNum > 1) setPageNum(pageNum - 1);
    getTxs(pageNum - 1);
  }
  function onClickPageNxt() {
    setPageNum(pageNum + 1);
    getTxs(pageNum + 1);
  }

  const getTxs = (page) => {
    // console.log(numberOrHash);
    if(numberOrHash){
      // 블럭 트랜잭션 리스트 조회
      axios.get(`${API.API_TXS_BLOCK}${numberOrHash}/${(page - 1)* size}/${size}/timestamp/DESC`).then((resp) => {
        // console.log("nvsgfeVB2c", resp.data);
        if (resp.data.status === "OK") {
          const list = resp.data.list;

          let arr = [];
          for(let i = 0; i < list.length; i++){
            arr.push({
              ...list[i],
              txFee: Number(list[i].gasPrice) * Number(list[i].gas) / 10**18
            });
          }

          setTxList(arr);
          if(resp.data.payload.count){
            setPageCount(Math.ceil(resp.data.payload.count / size));
        
          }else{
            setPageCount(1);
          }
          setLoading(false);
        }
      });
    }else{
      // 최신 트랜잭션 리스트 조회
      axios.get(`${API.API_TXS}${(page - 1)* size}/${size}/timestamp/DESC`).then((resp) => {
        console.log("nvsgfeVB2c", resp.data);
        if (resp.data.status === "OK") {
          const list = resp.data.list;

          let arr = [];
          for(let i = 0; i < list.length; i++){
            arr.push({
              ...list[i],
              txFee: Number(list[i].gasPrice) * Number(list[i].gas) / 10**18
            });
          }

          setTxList(arr);
          if(resp.data.payload.count){
            setPageCount(Math.ceil(resp.data.payload.count / size));
          }else{
            setPageCount(1);
          }
          
          setLoading(false);
        }
      });
    }
  }

  useEffect(()=>{
    setLoading(true);
    getTxs(pageNum);
  },[numberOrHash])

  return (
    <TransactionsBox>
      <div className="innerBox">
        <strong className="title">Transactions</strong>
        <ul className="transactionList">
          <li className="header">
            {headerList.map((header, index) => (
              <span key={index} className={header}>{header}</span>
            ))}
          </li>
          {txList.map((cont) => {
            return (
              <li key={cont.id} onClick={()=> {
                history.push(`/transaction/${cont.hash}`);
              }}>
                <span className="txHash">
                  <span className="inner tooltip">
                    {strDot(cont.hash, 6, 6)}
                    <span className="tooltiptext tooltip-bottom">{cont.hash}</span>
                  </span>
                </span>
                <span className="block">{cont.blockNumber}</span>
                <span className="time">
                  <span>{cont.createdat.split('T')[0]}</span>&nbsp;&nbsp;
                  <span>{cont.createdat.split('T')[1].split('.')[0]}</span>
                </span>
                <span className="from">
                  <span className="inner tooltip">
                    {strDot(cont.from_, 6, 6)}
                    <span className="tooltiptext tooltip-bottom">{cont.from_}</span>
                  </span>
                </span>
                <span className="to">
                  <span className="inner tooltip">
                    {strDot(cont.to_, 6, 6)}
                    <span className="tooltiptext tooltip-bottom">{cont.to_}</span>
                  </span>
                </span>
                <span className="type">
                  {cont.typestr === "DEPL-C" && "Contract deploy"}  
                  {cont.typestr === "TX-C" && "Send Plus"}  
                  {cont.typestr === "TX-T" && "Send Token"}  
                </span>
                <span className="amount">{cont.amountdisp}</span>
                <span className="txFee">
                  {cont.txFee}
                </span>
              </li>
            );
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
        </ul>
      </div>
    </TransactionsBox>
  );
}

const TransactionsBox = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;

  & > .innerBox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 110px 0 130px 0;
    width: 1400px;

    .title {
      font-size: 30px;
      font-weight: 500;
    }

    ul {
      margin-top: 5px;
      padding: 0 50px 20px 50px;
      border: 1px solid #d1d1d1;
      border-radius: 20px;

      li {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #373737;
        cursor: pointer;

        &.header {
          color: #a2afd2;
          text-transform: uppercase;
          padding: 20px 0;
          border-bottom: 1px solid #d1d1d1;
        }

        span {
          .inner {
            padding: 2px 4px;
            background: #ececec;
            border-radius: 2px;
          }

          &.txHash {
            width: 120px;
            padding: 2px 4px;
          }

          &.block {
            width: 130px;
          }
          &.time {
            width: 200px;
          }
          &.from {
            width: 120px;
            padding: 2px 4px;
          }
          &.to {
            width: 120px;
            padding: 2px 4px;
          }
          &.type {
            width: 150px;
          }
          &.amount {
            width: 200px;
          }
          &.txFee {
            flex: 1;
          }
        }

        &:nth-of-type(n + 2) {
          .time,
          .type {
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
  "txHash",
  "block",
  "time",
  "from",
  "to",
  "type",
  "amount",
  "txFee",
];