import { useState } from "react";
import ListPagenation from "./ListPagenation";
import styled from "styled-components";
import { D_transferList, D_transferListHeader } from "../../Data/D_transfer";
import Copy from "../../Img/Icon/Copy.svg";
import ChartBlue from "../../Img/Icon/ChartBlue.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function TransferList() {
  const history = useHistory();

  const [page, setPage] = useState(1);

  return (
    <>
      <TransferListArea>
        <div className="topBar">
          <p className="count">191,921,458 transactions</p>
        </div>

        <div className="listCont">
          <ul className="listHeader">
            {D_transferListHeader.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>

          <ul className="list">
            {D_transferList.map((v, i) => (
              <li key={i}>
                <div>
                  <p
                    className="hash"
                    onClick={() => history.push("/transactiondetails")}
                  >
                    {v.txHash}
                  </p>
                </div>

                <div>{v.method}</div>

                <div>{v.age}</div>

                <div className="copy">
                  <p>{v.from}</p>

                  <button className="copyBtn" onClick={() => {}}>
                    <img src={Copy} alt="" />
                  </button>
                </div>

                <div className="copy">
                  <p>{v.to}</p>

                  <button className="copyBtn" onClick={() => {}}>
                    <img src={Copy} alt="" />
                  </button>
                </div>

                <div>{v.quantity}</div>
              </li>
            ))}
          </ul>
        </div>
      </TransferListArea>

      <ListPagenation page={page} setPage={setPage} />
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
        width: 306px;
      }

      &:nth-of-type(2) {
        width: 148px;
      }

      &:nth-of-type(3) {
        width: 230px;
      }

      &:nth-of-type(4) {
        width: 256px;
      }

      &:nth-of-type(5) {
        width: 288px;
      }

      &:nth-of-type(6) {
        flex: 1;
      }
    }
  }
`;
