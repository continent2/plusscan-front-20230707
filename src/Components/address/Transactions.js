import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_leftArrow from "../../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../../Img/Icon/I_rightArrow.svg";
import { useParams } from "react-router-dom";
import { API } from "../../Config/api";
import axios from "axios";

function Transactions() {
  const { address } = useParams();

  const [pageNum, setPageNum] = useState(1);

  const [txs, setTxs] = useState([]);

  function onClickPagePre() {
    if (pageNum > 1) setPageNum(pageNum - 1);
  }
  function onClickPageNxt() {
    setPageNum(pageNum + 1);
  }

  const getTxsAddress = () => {
    axios.get(`${API.API_TXS_ADDRESS}${address}/0/10/id/DESC`).then((resp) => {
      console.log("nvsgfeVB2casdf", resp.data);
      if (resp.data.status === "OK") {
        setTxs(resp.data.list)
      }
    });
  }

  useEffect(()=>{
    console.log(txs);
    getTxsAddress();
  },[])


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
              <span className="rank">{cont.rank}</span>
              <span className="address">{cont.address}</span>
              <span className="feeslast3hrs">{cont.feeslast3hrs}</span>
              <span className="used3hrs">
                {cont.used3hrs}
                <div className="gageBox">
                  <span className="gageBar" />
                </div>
              </span>
              <span className="feeslast24hrs">{cont.feeslast24hrs}</span>
              <span className="used24hrs">
                {cont.used24hrs}
                <div className="gageBox">
                  <span className="gageBar" />
                </div>
              </span>
              <span className="analytics">{cont.analytics}</span>
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
      }
      &.feeslast3hrs {
        width: 260px;
      }
      &.used3hrs {
        width: 146px;
      }
      &.feeslast24hrs {
        width: 260px;
      }
      &.used24hrs {
        width: 124px;
      }
      &.analytics {
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
  "rank",
  "address",
  "feeslast3hrs",
  "used3hrs",
  "feeslast24hrs",
  "used24hrs",
  "analytics",
];

const addressList = [
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
  },
];
