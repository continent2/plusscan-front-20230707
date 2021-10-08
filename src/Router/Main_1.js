import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Footer from "./Footer";
import E_chart3 from "../Img/example/E_chart3.png";
import I_3dotWhite from "../Img/Icon/I_3dotWhite.svg";
import I_hoverPolygon from "../Img/Icon/I_hoverPolygon.svg";
import { strDot } from "../Util/common";

function Home({ store }) {
  const [chartPopup, setChartPopup] = useState(false);

  function onChartPopupMove(e) {
    let x = e.screenX - 30;
    let y = e.screenY - 184;

    let chartPopup;
    if (document.querySelector("#chartPopupBox")) {
      chartPopup = document.querySelector("#chartPopupBox");
      chartPopup.style.left = x + "px";
      chartPopup.style.top = y + "px";
    }
  }

  return (
    <>
      <HomeBox onMouseMove={(e) => onChartPopupMove(e)}>
        <div className="innerBox">
          <ul className="headerBox">
            <li className="priceBox">
              <div className="innerBox">
                <p className="title">Price</p>
                <p className="data">$2,131.46 &#40;-5.49%&#41;</p>
              </div>
            </li>

            <li className="transaction_n_gasBox">
              <div className="innerBox">
                <p className="title">Transactions</p>
                <p className="data">1,201.60M &#40;14.6TPS&#41;</p>
              </div>

              <div className="innerBox">
                <p className="title">GAS Price</p>
                <p className="data">31Gwei &#40;$1.39&#41;</p>
              </div>
            </li>

            <li className="difficulty_n_hashBox">
              <div className="innerBox">
                <p className="title">Difficulty</p>
                <p className="data">6,543.50TH</p>
              </div>

              <div className="innerBox">
                <p className="title">GAS Price</p>
                <p className="data">31Gwei &#40;$1.39&#41;</p>
              </div>
            </li>

            <li className="chartBox">
              <div className="titleBar">
                <p className="title">Transactions &#40;14days&#41;</p>
                <button className="moreBtn" onClick={() => {}}>
                  <img src={I_3dotWhite} alt="" />
                </button>
              </div>

              <div
                className="imgBox"
                onMouseEnter={() => setChartPopup(true)}
                onMouseLeave={() => setChartPopup(false)}
              >
                <img className="chart" src={E_chart3} alt="" />
              </div>
            </li>
          </ul>

          <div className="listContainer">
            <div className="listBox">
              <strong className="title">Latest Blocks</strong>
              <ul className="blockList">
                <li className="header">
                  <span className="block">BLOCK</span>
                  <span className="time">TIME</span>
                  <span className="total">TOTAL TXS</span>
                  <span className="proposer">BLOCK PROPOSER</span>
                  <span className="reward">REWARD</span>
                </li>
                {blockList.map((cont, index) => {
                  if (index < 10)
                    return (
                      <li key={index}>
                        <span className="block">{cont.block}</span>
                        <span className="time">{cont.time}</span>
                        <span className="total">{cont.total}</span>
                        <span className="proposer">
                          <span className="inner">
                            {strDot(cont.proposer, 6, 6)}
                          </span>
                        </span>
                        <span className="reward">
                          {strDot(cont.reward.toString(), 8, 0)}
                        </span>
                      </li>
                    );
                  else return null;
                })}
              </ul>

              <div className="btnBox">
                <button className="allBtn" onClick={() => {}}>
                  view all
                </button>
              </div>
            </div>

            <div className="listBox">
              <strong className="title">Latest Transactions</strong>
              <ul className="transactionList">
                <li className="header">
                  <span className="txHash">TX HASH</span>
                  <span className="time">TIME</span>
                  <span className="from">FROM</span>
                  <span className="to">TO</span>
                </li>
                {blockList.map((cont, index) => {
                  if (index < 10)
                    return (
                      <li key={index}>
                        <span className="txHash">
                          <span className="inner">
                            {strDot(cont.proposer, 6, 6)}
                          </span>
                        </span>
                        <span className="time">{cont.time}</span>
                        <span className="from">
                          <span className="inner">
                            {strDot(cont.proposer, 6, 6)}
                          </span>
                        </span>
                        <span className="to">
                          <span className="inner">
                            {strDot(cont.proposer, 6, 6)}
                          </span>
                        </span>
                      </li>
                    );
                  else return null;
                })}
              </ul>

              <div className="btnBox">
                <button className="allBtn" onClick={() => {}}>
                  view all
                </button>
              </div>
            </div>
          </div>
        </div>

        {chartPopup && (
          <div id="chartPopupBox" className="chartPopupBox">
            <ul className="chartPopup">
              <li>2021-07-09</li>
              <li>Transactions : 1,212,543</li>
              <li>Price : $2,083.80 </li>
            </ul>
            <img src={I_hoverPolygon} alt="" />
          </div>
        )}
        <Footer />
      </HomeBox>
    </>
  );
}

const HomeBox = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;

  & > .innerBox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 72px 0 160px 0;
    width: 1400px;

    .headerBox {
      display: flex;
      height: 200px;
      border: 1px solid #d1d1d1;
      border-radius: 15px;
      padding: 20px 0;

      .title {
        font-size: 18px;
        color: #d1d1d1;
        font-family: "Rubik Mono One", sans-serif;
      }

      li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 10px 0;

        &:nth-of-type(n + 2) {
          border-left: 1px solid #d1d1d1;
        }

        .innerBox {
          display: flex;
          flex-direction: column;
          height: inherit;
          gap: 5px;

          &:nth-of-type(n + 2) {
            justify-content: flex-end;
          }
        }
      }

      .priceBox {
        width: 200px;
        .innerBox {
          justify-content: center;
          align-items: center;
        }
      }

      .transaction_n_gasBox {
        width: 270px;
        padding-left: 50px;
      }

      .difficulty_n_hashBox {
        width: 270px;
        padding-left: 74px;
      }

      .chartBox {
        flex: 1;
        padding: 0 25px 0 90px;

        .titleBar {
          display: flex;
          justify-content: space-between;

          .moreBtn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            background: #e9e9e9;
            border-radius: 3px;
          }
        }

        .chart {
          width: 406px;
          object-fit: cover;
        }
      }
    }

    .listContainer {
      display: flex;
      gap: 20px;

      .listBox {
        width: 688px;
        border: 1px solid #d1d1d1;
        border-radius: 15px;
        padding: 25px;

        .title {
          font-size: 20px;
          font-family: "Rubik", sans-serif;
        }

        ul {
          margin-top: 5px;

          li {
            display: flex;
            align-items: center;
            height: 36px;
            font-size: 14px;
            color: #373737;

            &.header {
              color: #a2afd2;
            }

            &:nth-of-type(n + 2) {
              border-top: 1px solid #d1d1d1;
            }

            span {
              &.block,
              &.time {
                width: 128px;
              }

              &.time {
                color: #d1d1d1;
              }

              &.total {
                width: 112px;
              }

              &.proposer {
                width: 172px;
              }

              .inner {
                padding: 2px 4px;
                background: #ececec;
                border-radius: 2px;
              }

              &.reward {
                flex: 1;
              }

              &.txHash {
                width: 160px;
              }

              &.from {
                width: 148px;
              }
            }
          }

          &.blockList {
          }

          &.transactionList {
            .time {
              width: 188px;
            }
            li:nth-of-type(1) {
              .time {
                color: #a2afd2;
              }
            }
          }
        }

        .btnBox {
          display: flex;
          justify-content: center;
          margin-top: 20px;

          .allBtn {
            width: 130px;
            height: 40px;
            background: #e9e9e9;
            border-radius: 25px;
            font-size: 14px;
          }
        }
      }
    }
  }

  .chartPopupBox {
    position: fixed;
    width: 152px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    z-index: 4;

    .chartPopup {
      color: #fff;
      background: rgba(34, 34, 34, 0.6);
      border-radius: 5px;
      padding: 10px;
    }

    img {
      width: 10px;
      height: 6px;
      object-fit: cover;
      margin-left: 26px;
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const blockList = [
  {
    block: 64080901,
    time: "2secs ago",
    total: 4,
    proposer: "0x386caaaaaaab7f9c8",
    reward: 9.69347312322,
  },
  {
    block: 64080901,
    time: "2secs ago",
    total: 4,
    proposer: "0x386caaaaaaab7f9c8",
    reward: 9.69347312322,
  },
  {
    block: 64080901,
    time: "2secs ago",
    total: 4,
    proposer: "0x386caaaaaaab7f9c8",
    reward: 9.69347312322,
  },
  {
    block: 64080901,
    time: "2secs ago",
    total: 4,
    proposer: "0x386caaaaaaab7f9c8",
    reward: 9.69347312322,
  },
  {
    block: 64080901,
    time: "2secs ago",
    total: 4,
    proposer: "0x386caaaaaaab7f9c8",
    reward: 9.69347312322,
  },
  {
    block: 64080901,
    time: "2secs ago",
    total: 4,
    proposer: "0x386caaaaaaab7f9c8",
    reward: 9.69347312322,
  },
  {
    block: 64080901,
    time: "2secs ago",
    total: 4,
    proposer: "0x386caaaaaaab7f9c8",
    reward: 9.69347312322,
  },
  {
    block: 64080901,
    time: "2secs ago",
    total: 4,
    proposer: "0x386caaaaaaab7f9c8",
    reward: 9.69347312322,
  },
  {
    block: 64080901,
    time: "2secs ago",
    total: 4,
    proposer: "0x386caaaaaaab7f9c8",
    reward: 9.69347312322,
  },
  {
    block: 64080901,
    time: "2secs ago",
    total: 4,
    proposer: "0x386caaaaaaab7f9c8",
    reward: 9.69347312322,
  },
  {
    block: 64080901,
    time: "2secs ago",
    total: 4,
    proposer: "0x386caaaaaaab7f9c8",
    reward: 9.69347312322,
  },
  {
    block: 64080901,
    time: "2secs ago",
    total: 4,
    proposer: "0x386caaaaaaab7f9c8",
    reward: 9.69347312322,
  },
  {
    block: 64080901,
    time: "2secs ago",
    total: 4,
    proposer: "0x386caaaaaaab7f9c8",
    reward: 9.69347312322,
  },
];
