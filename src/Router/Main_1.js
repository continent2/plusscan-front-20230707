import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Footer from "./Footer";
import I_3dotWhite from "../Img/Icon/I_3dotWhite.svg";
import I_hoverPolygon from "../Img/Icon/I_hoverPolygon.svg";
import { strDot } from "../Util/common";
import { useHistory } from "react-router-dom";
import { API } from "../Config/api";
import axios from "axios";
import ReactEcharts from "echarts-for-react"; 


// const RAND_TIME_OFFSET = 3;
function Home() {
  const history = useHistory();

  const [chartPopup, setChartPopup] = useState(false);
  const [stats, setStats] = useState({});
  const [blockList, setBlockList] = useState([]);
  const [txlist, setTxlist] = useState([]);


  const [option, setOption] = useState({
    xAxis: {
      type: 'category',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        type: 'line',
        smooth: true,
        symbol: 'none',
      }
    ]
  } );

  const fetchLists = (_) => {

    // 최신 정보 조회
    axios.get(`${API.API_STATS}`).then((resp) => {
      console.log("vsiRhGy2pA", resp.data);
      if (resp.data.status === "OK") {
        setOption({
          ...option,
          series:[{
            data: resp.data.atxdaily,
            type: 'line',
            smooth: true,
            symbol: 'none',
          }]
        })
        setStats(resp.data);
      }
    });

    // 최신 블럭 리스트 조회
    axios.get(`${API.API_LATEST_BLOCKS}`).then((resp) => {
      // console.log("vsiRhGy2pA", resp.data);
      if (resp.data.status === "OK") {
        setBlockList(resp.data.list);
      }
    });

    // 최신 트랜잭션 리스트 조회
    axios.get(`${API.API_LATEST_TXS}`).then((resp) => {
      // LOGGER("nvsgfeVB2c", resp.data);
      if (resp.data.status === "OK") {
        setTxlist(resp.data.list);
      }
    });
  };

  useEffect((_) => {
    fetchLists();
    const interval = setInterval((_) => {
      fetchLists();
    }, 30 * 1000);

    return(() => {
      clearInterval(interval);
    });
  }, []);

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
            <li className="priceBox" onClick={() => history.push("/dailyprice")}>
              <div className="innerBox">
                <p className="title">PRICE</p>
                <p className="data">
                  {stats.priceunitsymbol + String(stats.price)}
                </p>
              </div>
            </li>

            <li className="transaction_n_gasBox">
              <div className="innerBox" onClick={() => history.push("/transactionchart")}>
                <p className="title">TRANSACTIONS</p>
                <p className="data">
                  {stats.counttx}
                </p>
              </div>
              <div className="innerBox" onClick={() => history.push("/gas")}>
                <p className="title">GAS PRICE</p>
                <p className="data">
                {stats.gasprice}
                </p>
              </div>
            </li>

            <li className="difficulty_n_hashBox">
              <div className="innerBox">
                <p className="title">DIFFICULTY</p>
                <p className="data">{stats.difficulty}</p>
              </div>

              <div className="innerBox" onClick={() => history.push("/gas")}>
                <p className="title">GAS USED</p>
                <p className="data">
                {stats.gasused}
                </p>
              </div>
            </li>

            <li className="chartBox" onClick={() => {
                history.push('/transactions')
              }}>
              <div className="titleBar">
                <p className="title">Transactions &#40;14days&#41;</p>
                {/* <button className="moreBtn" onClick={() => {}}>
                  <img src={I_3dotWhite} alt="" />
                </button> */}
              </div>

              <ReactEcharts option={option} />
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
                  <span className="hash">HASH</span>
                  {/* <span className="reward">REWARD</span> */}
                </li>
                {blockList.map((cont, index) => {
                  if (index < 10)
                    return (
                      <li key={cont.id} >
                        <span className="block" onClick={()=>{
                          history.push(`/block/${cont.number}`)
                        }}>{cont.number}</span>
                        <span className="time">
                          <span>{cont.createdat.split('T')[0]}</span>
                          <span>{cont.createdat.split('T')[1].split('.')[0]}</span>
                        </span>
                        <span className="total tooltip">
                          {cont.txcount}
                          <span className="tooltiptext tooltip-bottom">Transactions in this Block</span>
                        </span>
                        <span className="hash">
                          <span className="inner tooltip">
                            {strDot(cont.hash, 6, 6)}
                            <span className="tooltiptext tooltip-bottom">{cont.hash}</span>
                          </span>
                        </span>
                        <span className="reward">
                          {/**  strDot(cont.reward.toString(), 8, 0) */}
                        </span>
                      </li>
                    );
                  else return null;
                })}
              </ul>

              <div className="btnBox">
                <button className="allBtn" onClick={() => {
                  history.push('/blocks');
                }}>
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
                {txlist.map((elem, index) => {
                  if (index < 10)
                    return (
                      <li key={elem.id}>
                        <span className="txHash" onClick={()=>{
                          history.push(`/transaction/${elem.hash}`)
                        }}>
                          <span className="inner tooltip">
                            {strDot(elem.hash, 9, 8)}
                            <span className="tooltiptext tooltip-bottom">{elem.hash}</span>
                          </span>
                        </span>
                        <span className="time">
                          <span>{elem.createdat.split('T')[0]}</span>
                          <span>{elem.createdat.split('T')[1].split('.')[0]}</span>
                        </span>{" "}
                        {/** `${RAND_TIME_OFFSET} secs ago` */}
                        <span className="from">
                          <span className="inner tooltip" onClick={()=>{
                            history.push(`/address/${elem.from_}`)
                          }}>
                            {strDot(elem.from_, 6, 6)}
                            <span className="tooltiptext tooltip-bottom">{elem.from_}</span>
                          </span>
                        </span>
                        <span className="to">
                          <span className="inner tooltip" onClick={()=>{
                              history.push(`/address/${elem.to_}`)
                            }}>
                            {strDot(elem.to_, 6, 6)}
                            <span className="tooltiptext tooltip-bottom">{elem.to_}</span>
                          </span>
                        </span>
                      </li>
                    );
                  else return null;
                })}
              </ul>

              <div className="btnBox">
                <button className="allBtn" onClick={() => {
                  history.push('/transactions');
                }}>
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
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: 100vh;

  & > .innerBox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 72px 0 160px 0;
    width: 1400px;

    .headerBox {
      display: flex;
      height: 300px;
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
          justify-content: center;
          align-items: center;
          height: inherit;
          gap: 5px;
        }
      }

      .priceBox {
        width: 200px;
        cursor: pointer;
        .innerBox {
          justify-content: center;
          align-items: center;
        }
      }

      .transaction_n_gasBox {
        width: 270px;
        cursor: pointer;
      }

      .difficulty_n_hashBox {
        width: 270px;
        cursor: pointer;
      }

      .chartBox {
        flex: 1;
        padding: 0 25px 0 90px;
        height: 250px;

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
              padding: 0 5px;

              &.block {
                cursor: pointer;
              }

              &.block{
                width: 128px;
              }

              &.time {
                width: 200px;
              }

              &.total {
                width: 112px;
                cursor: pointer;
              }

              &.hash {
                width: 120px;
                cursor: pointer;
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
                cursor: pointer;
              }

              &.from {
                width: 125px;
                cursor: pointer;
              }

              &.to {
                width: 125px;
                cursor: pointer;
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

// const inittxlist = (_) => {
//   const N_ENTRIES = 10;
//   let txlist = [];
//   for (let i = 0; i < N_ENTRIES; i++) {
//     txlist[i] = {
//       txhash: "0x" + generaterandomstr_charset(40, "hex"),
//       from: "0x" + generaterandomstr_charset(40, "hex"),
//       to: "0x" + generaterandomstr_charset(40, "hex"),
//     };
//   }
//   return txlist;
// };
// const BLOCKNUM = 33186;
// const BLOCKPERIOD = 30;
// const initblocks = (_) => {
//   const N_ENTRIES = 10;
//   let blockList = [];
//   for (let i = 0; i < N_ENTRIES; i++) {
//     blockList[i] = {
//       block: BLOCKNUM - i,
//       time: `${RAND_TIME_OFFSET + BLOCKPERIOD * i} secs ago`,
//       total: generaterandomint(0, 10),
//       proposer: "0x" + generaterandomstr_charset(40, "hex"),
//       reward: generaterandomnumber(3, 10).toFixed(3),
//     };
//   }
//   return blockList;
// };

// let blockList = [
//   {
//     block: 64080901,
//     time: "2secs ago",
//     total: 4,
//     proposer: "0x386caaaaaaab7f9c8",
//     reward: 9.69347312322,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     total: 4,
//     proposer: "0x386caaaaaaab7f9c8",
//     reward: 9.69347312322,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     total: 4,
//     proposer: "0x386caaaaaaab7f9c8",
//     reward: 9.69347312322,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     total: 4,
//     proposer: "0x386caaaaaaab7f9c8",
//     reward: 9.69347312322,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     total: 4,
//     proposer: "0x386caaaaaaab7f9c8",
//     reward: 9.69347312322,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     total: 4,
//     proposer: "0x386caaaaaaab7f9c8",
//     reward: 9.69347312322,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     total: 4,
//     proposer: "0x386caaaaaaab7f9c8",
//     reward: 9.69347312322,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     total: 4,
//     proposer: "0x386caaaaaaab7f9c8",
//     reward: 9.69347312322,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     total: 4,
//     proposer: "0x386caaaaaaab7f9c8",
//     reward: 9.69347312322,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     total: 4,
//     proposer: "0x386caaaaaaab7f9c8",
//     reward: 9.69347312322,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     total: 4,
//     proposer: "0x386caaaaaaab7f9c8",
//     reward: 9.69347312322,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     total: 4,
//     proposer: "0x386caaaaaaab7f9c8",
//     reward: 9.69347312322,
//   },
//   {
//     block: 64080901,
//     time: "2secs ago",
//     total: 4,
//     proposer: "0x386caaaaaaab7f9c8",
//     reward: 9.69347312322,
//   },
// ];
