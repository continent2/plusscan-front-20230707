import { useState, useEffect } from "react";
import styled from "styled-components";
import Copy from "../../Img/Icon/Copy.svg";
// import ChartBlue from "../../Img/Icon/ChartBlue.svg";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "../../Config/api";
import axios from "axios";
import { strDot } from "../../Util/common";
import I_leftArrow from "../../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../../Img/Icon/I_rightArrow.svg";

export default function TransferList() {
  const history = useHistory();
  const { address } = useParams();

  const [pageNum, setPageNum] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [txs, setTxs] = useState([]);
  const [txCount, setTxCount] = useState(0);

  const size = 10;
  const D_transferListHeader = [
    "Txn Hash",
    "Block",
    "TIME",
    "FROM",
    "TO",
    "TYPE",
    "AMOUNT",
    "TXFEE"
  ];

  function onClickPagePre() {
    if (pageNum > 1) setPageNum(pageNum - 1);
    getTxs(pageNum - 1);
  }
  function onClickPageNxt() {
    if(pageNum >= pageCount){
      return;
    }
    setPageNum(pageNum + 1);
    getTxs(pageNum + 1);
  }

  const getTxs= (page) => {
    axios.get(`${API.API_TOKEN_TXS_ADDRESS}${address}/${(page - 1)* size}/${size}/timestamp/DESC`).then((resp) => {
      // console.log("nvsgfeVB2c", resp.data);
      if (resp.data.status === "OK") {
        setTxs(resp.data.list)
        setPageCount(Math.ceil(resp.data.payload.count / size));
        setTxCount(resp.data.payload.count);
      }
    });
  }

  useEffect(() => {
    getTxs(1);
  }, [address])

  return (
    <>
      <TransferListArea>
        <div className="topBar">
          <p className="count">{txCount} transactions</p>
        </div>

        <div className="listCont">
          <ul className="listHeader">
            {D_transferListHeader.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>

          <ul className="list">
            {txs.map((v, i) => (
              <li key={i}>
                <div>
                  <p
                    className="hash"
                    onClick={() => history.push("/transactiondetails")}
                  >
                    {v.hash}
                  </p>
                </div>

                <div>{v.blockNumber}</div>

                <div>
                  <span>{v.createdat.split('T')[0]}</span>&nbsp;&nbsp;
                  <span>{v.createdat.split('T')[1].split('.')[0]}</span>
                </div>

                <div className="copy">
                <p className="tooltip">
                  {strDot(v.from_, 6, 6)}
                  <span className="tooltiptext tooltip-bottom">{v.from_}</span>
                </p>

                  <button className="copyBtn" onClick={() => navigator.clipboard.writeText(v.from_).then(() => {
                  alert("복사완료");
                })} >
                    <img src={Copy} alt="" />
                  </button>
                </div>

                <div className="copy">
                    <p className="tooltip">{strDot(v.to_, 6, 6)}
                    
                      <span className="tooltiptext tooltip-bottom">{v.to_}</span>
                    </p>

                    <button className="copyBtn" onClick={() => navigator.clipboard.writeText(v.to_).then(() => {
                      alert("복사완료");
                    })} >
                    <img src={Copy} alt="" />
                  </button>
                </div>

                <div>
                  {v.typestr === "DEPL-C" && "Contract deploy"}  
                  {v.typestr === "TX-C" && "Send Plus"}  
                  {v.typestr === "TX-T" && "Send Token"}  
                </div>

                <div>{v.amountdisp}</div>

                <div>{v.quantity}</div>
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
      </TransferListArea>
    </>
  );
}

const TransferListArea = styled.article`
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

        .hash {
          width: 206px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .copy {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #6979f5;

          .copyBtn {
            display: flex;
            align-items: center;
          }
        }
      }
    }

    .listHeader li,
    .list li div {
      &:nth-of-type(1) {
        width: 230px;
      }

      &:nth-of-type(2) {
        width: 80px;
      }

      &:nth-of-type(3) {
        width: 160px;
      }

      &:nth-of-type(4) {
        width: 150px;
      }

      &:nth-of-type(5) {
        width: 150px;
      }

      &:nth-of-type(6) {
        width: 130px;
      }

      &:nth-of-type(7) {
        width: 140px;
      }
    }
  }
`;
