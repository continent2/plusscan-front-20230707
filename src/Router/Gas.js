import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_leftArrow from "../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../Img/Icon/I_rightArrow.svg";
import {
  D_gasRangeList,
  D_prePriceList,
  D_prePriceListHeader,
} from "../Data/D_gas";
import * as echarts from "echarts";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Gas({ store }) {
  const chartRef = useRef();
  const history = useHistory();

  const [pageNum, setPageNum] = useState(1);
  const [listCategory, setListCategory] = useState(0);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    chart.setOption(chartOpt);
  }, [chartRef]);
  function onClickPagePre() {
    if (pageNum > 1) setPageNum(pageNum - 1);
  }
  function onClickPageNxt() {
    setPageNum(pageNum + 1);
  }

  return (
    <GasBox>
      <div className="innerBox">
        <strong className="title">Gas Tracker</strong>

        <section className="infoSec">
          <article className="averageArea contArea">
            <p className="dateTime">2023년 7월 9일 일요일 10:41:27 UTC</p>

            <ul className="rangeList">
              {D_gasRangeList.map((v, i) => (
                <li key={i}>
                  <p className="name">{v.name}</p>

                  <p className="gas">{v.gas} gwei</p>

                  <p className="infos">
                    {`Base: ${v.base} | Priority: ${v.priority}`}
                    <br />
                    {`$${v.price} | ${v.time}`}
                  </p>
                </li>
              ))}
            </ul>

            <div className="prePrice">
              <div className="key">예상 거래 비용</div>

              <div className="listBox">
                <ul className="listHeader">
                  {D_prePriceListHeader.map((v, i) => (
                    <li key={i}>
                      <p>{v}</p>
                    </li>
                  ))}
                </ul>

                <ul className="list">
                  {D_prePriceList.map((v, i) => (
                    <li key={i}>
                      <div>
                        <p>{v.action}</p>
                      </div>
                      <div>
                        <p>${v.low}</p>
                      </div>
                      <div>
                        <p>${v.average}</p>
                      </div>
                      <div>
                        <p>${v.high}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="chartArea contArea">
            <p className="areaTitle">평균시간 및 가스 가격</p>

            <div className="chartBox" ref={chartRef} />
          </article>
        </section>

        <section className="listSec">
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
                    <span className="address">
                      <p onClick={() => history.push("/contract")}>
                        {cont.address}
                      </p>
                    </span>
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
        </section>
      </div>
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

    .infoSec {
      display: flex;
      gap: 20px;
      margin: 24px 0 0;
      height: 450px;

      .contArea {
        flex: 1;
        border: 1px solid #ebebeb;
        border-radius: 20px;
        box-shadow: 0px 3px 3px 0px rgba(184, 184, 184, 0.25);

        &.averageArea {
          padding: 24px 34px 34px;

          .dateTime {
            font-size: 14px;
            font-weight: 500;
            text-align: end;
            color: #999;
          }

          .rangeList {
            display: flex;
            gap: 12px;
            margin: 14px 0 0;

            li {
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 10px;
              padding: 16px 20px;
              font-size: 14px;
              font-weight: 500;
              border: 1px solid rgba(238, 238, 238, 0.9333);
              border-radius: 8px;

              &:nth-of-type(2) {
                .gas {
                  color: #6979f5;
                }
              }

              .name {
                line-height: 19px;
                color: #373737;
              }

              .gas {
                font-size: 16px;
                line-height: 22px;
                color: #3bc28e;
              }

              .infos {
                line-height: 19px;
                text-align: center;
                color: #999;
              }
            }
          }

          .prePrice {
            margin: 20px 0 0;

            .key {
              font-size: 14px;
              font-weight: 500;
              color: #373737;
            }

            .listBox {
              width: 100%;
              margin: 12px 0 0;
              font-size: 14px;

              .listHeader {
                display: flex;
                align-items: center;
                height: 44px;
                padding: 0 10px;
                background: #f2f2f2;

                li {
                  p {
                    color: #a2afd2;
                  }
                }
              }

              .list {
                height: 132px;
                overflow-y: scroll;

                li {
                  display: flex;
                  align-items: center;
                  height: 44px;
                  padding: 0 10px;
                  border-bottom: 1px solid #ececec;
                }
              }

              .listHeader li,
              .list li div {
                &:nth-of-type(1) {
                  width: 346px;
                }

                &:nth-of-type(2) {
                  width: 90px;
                }

                &:nth-of-type(3) {
                  width: 90px;
                }

                &:nth-of-type(4) {
                  flex: 1;
                }
              }
            }
          }
        }

        &.chartArea {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 50px 46px;

          .areaTitle {
            font-size: 18px;
          }

          .chartBox {
            width: 100%;
            height: 290px;
            margin: 50px 0 0;
          }
        }
      }
    }

    .listSec {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    width: 140px;
    padding: 10px 0;
    font-size: 10px;
    background: #fff;
    border: 1px solid #f7f7f7;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    position: fixed;
    z-index: 30;
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

const chartOpt = {
  xAxis: {
    type: "category",
    boundaryGap: false,
    axisLabel: {
      interval: 5,
      formatter: (value, index) => {
        return `${new Date(value).getDate()}`;
      },
    },
    data: new Array(100).fill("").map((v, i) => {
      const date = new Date().setDate(new Date("2023,05,27").getDate() + i);
      console.log(new Date(date).getDate());
      return new Date(date);
    }),
  },
  yAxis: {
    type: "value",
    position: "right",
    axisLabel: {
      formatter: (value, index) => {
        return `$${value.toFixed(2)}B`;
      },
    },
  },
  series: [
    {
      smooth: true,
      data: new Array(100).fill("").map((_) => Math.random() * 6 + 0.2),
      type: "bar",
      itemStyle: {
        color: "#1FC7D4",
        borderRadius: 4,
      },
    },
  ],
  tooltip: {
    padding: [10, 26],
    formatter: "Avg Time : 금요일<br/>Gas Price : $201.53",
    textStyle: {
      fontSize: 10,
      color: "#000",
    },
    borderColor: "#F6F6F6",
    extraCssText: "box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);",
  },
};
