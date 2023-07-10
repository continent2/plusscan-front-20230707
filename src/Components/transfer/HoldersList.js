import { useState } from "react";
import ListPagenation from "./ListPagenation";
import styled from "styled-components";
import { D_holdersList, D_holdersListHeader } from "../../Data/D_transfer";
import Copy from "../../Img/Icon/Copy.svg";
import ChartBlue from "../../Img/Icon/ChartBlue.svg";

export default function HoldersList() {
  const [page, setPage] = useState(1);

  return (
    <>
      <HoldersListArea>
        <div className="topBar">
          <p className="count">191,921,458 transactions</p>
        </div>

        <div className="listCont">
          <ul className="listHeader">
            {D_holdersListHeader.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>

          <ul className="list">
            {D_holdersList.map((v, i) => (
              <li key={i}>
                <div>{v.rank}</div>

                <div className="address">
                  <p>{v.address}</p>

                  <button className="copyBtn" onClick={() => {}}>
                    <img src={Copy} alt="" />
                  </button>
                </div>

                <div>{v.quantity}</div>

                <div className="percentage">
                  <p>{v.percentage}%</p>

                  <div className="percentBar">
                    <div className="thumb" />
                  </div>
                </div>

                <div>${v.value}</div>

                <div>
                  <button className="chartBtn" onClick={() => {}}>
                    <img src={ChartBlue} alt="" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </HoldersListArea>

      <ListPagenation page={page} setPage={setPage} />
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

        .address {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #6979f5;

          .copyBtn {
            display: flex;
            align-items: center;
          }
        }

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
        width: 66px;
      }

      &:nth-of-type(2) {
        width: 464px;
      }

      &:nth-of-type(3) {
        width: 208px;
      }

      &:nth-of-type(4) {
        width: 240px;
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
