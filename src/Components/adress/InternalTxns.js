import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_leftArrow from "../../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../../Img/Icon/I_rightArrow.svg";
import { strDot } from "../../Util/common";

function InternalTxns() {
  const [pageNum, setPageNum] = useState(1);

  function onClickPagePre() {
    if (pageNum > 1) setPageNum(pageNum - 1);
  }
  function onClickPageNxt() {
    setPageNum(pageNum + 1);
  }

  return (
    <InternalTxnsBox>
      <li className="header">
        {headerList.map((header) => (
          <span className={header}>{header}</span>
        ))}
      </li>

      {adressList.map((cont, index) => {
        if (index < 10)
          return (
            <li key={index}>
              <span className="parentTxnHash">
                <span className="inner">{strDot(cont.parentTxnHash,6,6)}</span>
              </span>
              <span className="block">{cont.block}</span>
              <span className="age">{cont.age}</span>
              <span className="from">
                <span className="inner">{strDot(cont.from,6,6)}</span>
              </span>
              <span className="to">
                <span className="inner">{strDot(cont.to,6,6)}</span>
              </span>
              <span className="value">{cont.value}</span>
            </li>
          );
        else return <></>;
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
    </InternalTxnsBox>
  );
}

const InternalTxnsBox = styled.ul`
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

    &:nth-of-type(n + 2) {
      .age {
        color: #d1d1d1;
      }
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

      &.parent,
      &.parentTxnHash {
        width: 222px;
      }

      &.block {
        width: 178px;
      }

      &.age {
        width: 206px;
      }

      &.from {
        width: 194px;
      }

      &.to {
        width: 194px;
      }

      &.value {
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

export default connect(mapStateToProps, mapDispatchToProps)(InternalTxns);

const headerList = ["parent Txn Hash", "block", "age", "from", "to", "value"];

const adressList = [
  {
    parentTxnHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    age: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    value: "0.007428707640968138 test token",
  },
  {
    parentTxnHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    age: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    value: "0.007428707640968138 test token",
  },
  {
    parentTxnHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    age: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    value: "0.007428707640968138 test token",
  },
  {
    parentTxnHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    age: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    value: "0.007428707640968138 test token",
  },
  {
    parentTxnHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    age: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    value: "0.007428707640968138 test token",
  },
  {
    parentTxnHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    age: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    value: "0.007428707640968138 test token",
  },
  {
    parentTxnHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    age: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    value: "0.007428707640968138 test token",
  },
  {
    parentTxnHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    age: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    value: "0.007428707640968138 test token",
  },
  {
    parentTxnHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    age: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    value: "0.007428707640968138 test token",
  },
  {
    parentTxnHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    age: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    value: "0.007428707640968138 test token",
  },
  {
    parentTxnHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    age: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    value: "0.007428707640968138 test token",
  },
  {
    parentTxnHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    age: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    value: "0.007428707640968138 test token",
  },
  {
    parentTxnHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    age: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    value: "0.007428707640968138 test token",
  },
  {
    parentTxnHash: "0x386caaaaaab7f9c8",
    block: 64080901,
    age: "2secs ago",
    from: "0x386caaaaaab7f9c8",
    to: "0x386caaaaaab7f9c8",
    value: "0.007428707640968138 test token",
  },
];
