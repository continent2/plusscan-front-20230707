import { useState, useEffect } from "react";
import styled from "styled-components";
// import Copy from "../../Img/Icon/Copy.svg";
// import ChartBlue from "../../Img/Icon/ChartBlue.svg";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "../../Config/api";
import axios from "axios";
// import { strDot } from "../../Util/common";
import I_leftArrow from "../../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../../Img/Icon/I_rightArrow.svg";

export default function HoldersList() {
  const history = useHistory();
  const { address } = useParams();

  const [pageNum, setPageNum] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [holders, setHolders] = useState([]);
  const [holderCount, setHolderCount] = useState(0);

  const size = 10;

  const D_holdersListHeader = [
    "Address",
    "Amount",
    "Total Transfers",
    "Total Receives",
  ];

  function onClickPagePre() {
    if (pageNum > 1) setPageNum(pageNum - 1);
    getHolders(pageNum - 1);
  }
  function onClickPageNxt() {
    if(pageNum >= pageCount){
      return;
    }
    setPageNum(pageNum + 1);
    getHolders(pageNum + 1);
  }

  const getHolders = (page) => {
    axios.get(`${API.API_TOKEN_HOLDERS_ADDRESS}${address}/${(page - 1)* size}/${size}/amountfloat/DESC`).then((resp) => {
      console.log("nvsgfeVB2c", resp.data);
      if (resp.data.status === "OK") {
        setHolders(resp.data.list)
        setPageCount(Math.ceil(resp.data.payload.count / size));
        setHolderCount(resp.data.payload.count);
      }
    });
  }

  useEffect(() => {
    getHolders(1);
  }, [address])

  return (
    <>
      <HoldersListArea>
        <div className="topBar">
          <p className="count">{holderCount} Holders</p>
        </div>

        <div className="listCont">
          <ul className="listHeader">
            {D_holdersListHeader.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>

          <ul className="list">
            {holders.map((v, i) => (
              <li key={i}>
                <div className="address">{v.holder}</div>

                <div className="amount">
                 {v.amountdisp}
                </div>

                <div>{v.counttxs}</div>

                <div className="percentage">
                  {v.countrxs}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="pageBtnBox">
            <button className="preBtn" onClick={onClickPagePre}>
              <img src={I_leftArrow} alt="" />
            </button>
            <span className="pageBox">Page {pageNum} of {pageCount}</span>
            <button className="nxtBtn" onClick={onClickPageNxt}>
              <img src={I_rightArrow} alt="" />
            </button>
        </div>
      </HoldersListArea>
    </>
  );
}

const HoldersListArea = styled.article`
  display: flex;
  flex-direction: column;
  gap: 14px;

  .topBar {
    .count {
      font-size: 14px;
      color: #999;
    }
  }

  .listCont {
    font-size: 14px;

    .listHeader {
      display: flex;
      align-items: center;
      height: 54px;
      padding: 0 10px;
      border-top: 2px solid #d1d1d1;
      border-bottom: 2px solid #d1d1d1;

      li {
        color: #a2afd2;
      }
    }

    .list {
      li {
        display: flex;
        align-items: center;
        height: 50px;
        padding: 0 10px;
        color: #373737;
        border-bottom: 1px solid #ececec;

        .percentage {
          display: flex;
          flex-direction: column;
          gap: 4px;

          .percentBar {
            display: flex;
            width: 180px;
            height: 4px;
            background: #eee;
            border-radius: 2px;

            .thumb {
              width: 110px;
              height: inherit;
              background: #a2afd2;
            }
          }
        }
      }
    }

    .listHeader li,
    .list li div {
      &:nth-of-type(1) {
        width: 400px;
      }

      &:nth-of-type(2) {
        width: 200px;
      }

      &:nth-of-type(3) {
        width: 200px;
      }

      &:nth-of-type(4) {
        width: 200px;
      }

      &:nth-of-type(5) {
        width: 242px;
      }

      &:nth-of-type(6) {
        flex: 1;
      }
    }
  }
`;
