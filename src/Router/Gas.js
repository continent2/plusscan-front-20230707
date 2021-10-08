import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_leftArrow from "../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../Img/Icon/I_rightArrow.svg";
import I_3dot from "../Img/Icon/I_3dot.svg";
import E_gasInfo from "../Img/example/E_gasInfo.png";
import E_chart4 from "../Img/example/E_chart4.png";

function Gas({ store }) {
  const [pageNum, setPageNum] = useState(1);
  const [chartPopup, setChartPopup] = useState(false);
  const [listCategory, setListCategory] = useState(0);

  function onChartPopupMove(e) {
    let x = e.screenX;
    let y = e.screenY - 160;

    let chartPopup;
    if (document.querySelector("#ChartPopup")) {
      chartPopup = document.querySelector("#ChartPopup");
      chartPopup.style.left = x + "px";
      chartPopup.style.top = y + "px";
    }
  }

  function onClickPagePre() {
    if (pageNum > 1) setPageNum(pageNum - 1);
  }
  function onClickPageNxt() {
    setPageNum(pageNum + 1);
  }

  return (
    <GasBox onMouseMove={(e) => onChartPopupMove(e)}>
      <div className="innerBox">
        <strong className="title">Gas Tracker</strong>

        <div className="liveBox">
          <div className="infoBox">
            <img className="I_3dot" src={I_3dot} alt="" />
            <img src={E_gasInfo} alt="" />
          </div>

          <div className="chartBox">
            <p className="title">평균시간 및 가스 가격</p>
            <img
              src={E_chart4}
              alt=""
              onMouseEnter={() => setChartPopup(true)}
              onMouseLeave={() => setChartPopup(false)}
            />
          </div>
        </div>

        <div className="listBox">
          <ul className="categoryList">
            {categoryList.map((category, index) => (
              <li key={index} onClick={() => setListCategory(index)}>
                {category}
                {listCategory === index && (
                  <span className="categoryBg">{category}</span>
                )}
              </li>
            ))}
          </ul>

          <ul className="gasList">
            <li className="header">
              {headerList.map((header) => (
                <span className={header}>{header}</span>
              ))}
            </li>
            {gasList.map((cont, index) => {
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
          </ul>
        </div>
      </div>

      {chartPopup && (
        <ul id="ChartPopup" className="chartPopup">
          <li>Avg Time : 금요일</li>
          <li>Gas Price : $201.53</li>
        </ul>
      )}
    </GasBox>
  );
}

const GasBox = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;

  & > .innerBox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 110px 0 86px 0;
    width: 1400px;

    & > .title {
      font-size: 30px;
      font-weight: 500;
    }

    .liveBox {
      margin-top: 25px;
      display: flex;
      gap: 20px;
      height: 450px;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 690px;
        border: 1px solid #ebebeb;
        box-shadow: 0px 3px 3px rgba(184, 184, 184, 0.25);
        border-radius: 20px;

        &.infoBox {
          gap: 10px;
          padding: 50px 25px;

          .I_3dot {
            align-self: flex-end;
            height: 3px;
          }
        }

        &.chartBox {
          gap: 50px;
          padding: 40px 0 46px 0;

          .title {
            font-size: 18px;
          }
        }
      }
    }

    .listBox {
      width: 1400px;
      padding: 17px 50px 20px 50px;
      border: 1px solid #d1d1d1;
      border-radius: 20px;

      .categoryList {
        display: flex;
        align-items: center;
        gap: 38px;
        height: 40px;
        padding: 0 30px;
        border: 1px solid #dbdbdb;
        border-radius: 20px;
        font-weight: 700;
        color: #a2afd2;

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          height: inherit;
          cursor: pointer;
          position: relative;

          .categoryBg {
            display: flex;
            align-items: center;
            white-space: nowrap;
            position: absolute;
            top: 0;
            height: inherit;
            background: #f4f4f4;
            border-radius: 20px;
            padding: 0 30px;
            color: unset;
          }
        }
      }

      .gasList {
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
      }
    }
  }

  .chartPopup {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    width: 140px;
    padding: 10px 0;
    font-size: 10px;
    background: #fff;
    border: 1px solid #f7f7f7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    z-index: 4;
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

export default connect(mapStateToProps, mapDispatchToProps)(Gas);

const categoryList = [
  "GAS GUZZLERS",
  "GAS SPENDERS",
  "HISTORICAL GAS ORACLE PRICES",
];

const headerList = [
  "rank",
  "address",
  "feeslast3hrs",
  "used3hrs",
  "feeslast24hrs",
  "used24hrs",
  "analytics",
];

const gasList = [
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
  {
    rank: 1,
    address: "Metamask: Swap Router",
    feeslast3hrs: "$51,022.31 (24.34 Test Token)",
    used3hrs: 8.19,
    feeslast24hrs: "$51,022.31 (24.34 Test Token)",
    used24hrs: 6.62,
    // analytics,
  },
];
