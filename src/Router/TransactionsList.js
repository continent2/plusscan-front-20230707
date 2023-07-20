import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_leftArrow from "../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../Img/Icon/I_rightArrow.svg";
import { strDot } from "../Util/common";

function TransactionsList({ store }) {
  const [pageNum, setPageNum] = useState(1);

  function onClickPagePre() {
    if (pageNum > 1) setPageNum(pageNum - 1);
  }
  function onClickPageNxt() {
    setPageNum(pageNum + 1);
  }

  return (
    <TransactionsListBox>
      <div className="innerBox">
        <strong className="title">Transactions</strong>
        <ul className="transactionList">
          <li className="header">
            {headerList.map((header, index) => (
              <span className={header} key={index}>{header}</span>
            ))}
          </li>
          {transactionList.map((cont, index) => {
            return (
              <li key={index}>
                <span className="txHash">
                  <span className="inner">{strDot(cont.txHash, 6, 6)}</span>
                </span>
                <span className="block">{cont.block}</span>
                <span className="time">{cont.time}</span>
                <span className="from">
                  <span className="inner">{strDot(cont.from, 6, 6)}</span>
                </span>
                <span className="to">
                  <span className="inner">{strDot(cont.to, 6, 6)}</span>
                </span>
                <span className="txType">{strDot(cont.txType, 3, 24)}</span>
                <span className="amount">{cont.amount.toFixed(6)}</span>
                <span className="txFee">
                  {strDot(cont.txFee.toString(), 8, 0)}
                </span>
              </li>
            );
          })}

          <div className="pageBtnBox">
            <button className="preBtn" onClick={onClickPagePre}>
              <img src={I_leftArrow} alt="" />
            </button>
            <span className="pageBox">Page {pageNum} of 999</span>
            <button className="nxtBtn" onClick={onClickPageNxt}>
              <img src={I_rightArrow} alt="" />
            </button>
          </div>
        </ul>
      </div>
    </TransactionsListBox>
  );
}

const TransactionsListBox = styled.div`
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
            width: 180px;
          }

          &.block {
            width: 130px;
          }
          &.time {
            width: 136px;
          }
          &.from {
            width: 172px;
          }
          &.to {
            width: 172px;
          }
          &.txType {
            width: 256px;
          }
          &.amount {
            width: 140px;
          }
          &.txFee {
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

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);

const headerList = [
  "txHash",
  "block",
  "time",
  "from",
  "to",
  "txType",
  "amount",
  "txFee",
];

const transactionList = [
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
  {
    txHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    time: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    txType: "FeeaaaaaaaaaaaSmart Contract Execution",
    amount: 0,
    txFee: 0.0009801111,
  },
];
