import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_leftArrow from "../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../Img/Icon/I_rightArrow.svg";
import { strDot } from "../Util/common";
import { API } from "../Config/api";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loadingState } from "../recoil/status";

function Blocks() {
  const history = useHistory();

  const [loading, setLoading] = useRecoilState(loadingState);

  const [pageNum, setPageNum] = useState(1);
  const [blockList, setBlockList] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const size = 25;

  function onClickPagePre() {
    if (pageNum > 1) setPageNum(pageNum - 1);
    getBlockList(pageNum - 1);
  }
  function onClickPageNxt() {
    setPageNum(pageNum + 1);
    getBlockList(pageNum + 1);
  }

  const getBlockList = (page) => {
    // 최신 블럭 리스트 조회
    axios.get(`${API.API_BLOCKS}${(page - 1)* size}/${size}/timestamp/DESC`).then((resp) => {
      // console.log("vsiRhGy2pA", resp.data);
      if (resp.data.status === "OK") {
        setBlockList(resp.data.list);
        setPageCount(Math.ceil(resp.data.payload.count / size));
        setLoading(false);
      }
    });
  }

  useEffect(()=>{
    setLoading(true);
    getBlockList(1);
  },[])

  return (
    <BlocksBox>
      <div className="innerBox">
        <strong className="title">Blocks</strong>

        <ul className="blockList">
          <li className="header">
            {headerList.map((header, index) => (
              <span key={index} className={header}>{header}</span>
            ))}
          </li>

          {blockList.map((cont) => (
            <li key={cont.id} className="item" onClick={()=> {
              history.push(`/block/${cont.number}`);
            }}>
              <span className="block">{cont.number}</span>
              <span className="time">
                <span>{cont.createdat.split('T')[0]}</span>&nbsp;&nbsp;
                <span>{cont.createdat.split('T')[1].split('.')[0]}</span>
              </span>
              <span className="totalTxs">{cont.txcount}</span>
              <span className="hash tooltip">
                {strDot(cont.hash, 10, 10)}
                <span className="tooltiptext tooltip-bottom">{cont.hash}</span>
              </span>
              {/* <span className="blockPropo">
                <span className="inner">{strDot(cont.blockPropo, 6, 6)}</span>
              </span> */}

              {/* <span className="reward">{cont.reward}</span> */}

              <span className="size">{cont.size}</span>
            </li>
          ))}

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
        cursor: pointer;

        &.header {
          color: #a2afd2;
          text-transform: uppercase;
          justify-content; space-between;
          padding: 20px 0;
          border-bottom: 1px solid #d1d1d1;
        }

        span {
          width: 250px;

          .inner {
            padding: 2px 4px;
            background: #ececec;
            border-radius: 2px;
          }

          .hash {
            width: 200px;
          }

          .size(byte) {
            width: 100px;
          }

          &:last-of-type {
            flex: 1;
          }
        }

        &:nth-of-type(n + 2) {
          .time,
          .txType {
            // color: #d1d1d1;
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

      // li:hover {
      //   background-color: gray;
      // }

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
  // "blockProposer",
  // "reward",
  "block hash",
  "size(byte)",
];

// const blockList = [
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     totalTxs: 4,
//     blockPropo: "0x386caaaaaab7f9c8",
//     reward: 9.69347377777777,
//     size: 4009,
//   },
// ];
