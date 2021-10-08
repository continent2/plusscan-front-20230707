import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_leftArrow from "../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../Img/Icon/I_rightArrow.svg";
import { strDot } from "../Util/common";

function Blocks({ store }) {
  const [pageNum, setPageNum] = useState(1);

  function onClickPagePre() {
    if (pageNum > 1) setPageNum(pageNum - 1);
  }
  function onClickPageNxt() {
    setPageNum(pageNum + 1);
  }

  return (
    <BlocksBox>
      <div className="innerBox">
        <strong className="title">Blocks</strong>

        <ul className="blockList">
          <li className="header">
            {headerList.map((header) => (
              <span className={header}>{header}</span>
            ))}
          </li>

          {blockList.map((cont, index) => (
            <li key={index}>
              <span className="block">{cont.block}</span>
              <span className="time">{cont.time}</span>
              <span className="totalTxs">{cont.totalTxs}</span>
              <span className="blockPropo">
                <span className="inner">{strDot(cont.blockPropo, 6, 6)}</span>
              </span>

              <span className="reward">{cont.reward}</span>

              <span className="size(byte)">{cont.size}</span>
            </li>
          ))}

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
    </BlocksBox>
  );
}

const BlocksBox = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;

  & > .innerBox {
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 110px 0 130px 0;
    width: 1400px;

    & > .title {
      font-size: 30px;
      font-weight: 500;
    }

    .blockList {
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
          width: 230px;

          .inner {
            padding: 2px 4px;
            background: #ececec;
            border-radius: 2px;
          }

          &:last-of-type {
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

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);

const headerList = [
  "block",
  "time",
  "totalTxs",
  "blockProposer",
  "reward",
  "size(byte)",
];

const blockList = [
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
  {
    block: 64080901,
    time: "2secs ago",
    totalTxs: 4,
    blockPropo: "0x386caaaaaab7f9c8",
    reward: 9.69347377777777,
    size: 4009,
  },
];
