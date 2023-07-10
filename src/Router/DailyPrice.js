import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Footer from "./Footer";
import * as echarts from "echarts";

function DailyPrice({ store }) {
  const chartRef = useRef();

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    chart.setOption(chartOpt);
  }, [chartRef]);

  return (
    <>
      <DailyPriceBox>
        <div className="contBox">
          <div className="textBox">
            <p className="title">Price</p>
            <p className="subText">
              현재 test token 가격 $32,590.03 @0.06387 BTC/ETH
            </p>
          </div>

          <div className="chartCont">
            <p className="title">Test Token Daily Price Chart &#40;USD&#41;</p>

            <div className="chartBox" ref={chartRef}></div>
          </div>
        </div>

        <Footer />
      </DailyPriceBox>
    </>
  );
}

const DailyPriceBox = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;

  .contBox {
    width: 1400px;
    margin: 100px 0 196px 0;

    .textBox {
      .title {
        font-size: 30px;
        font-weight: 500;
      }

      .subText {
        margin-top: 20px;
        font-size: 20px;
      }
    }

    .chartCont {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-top: 30px;
      border: 1px solid #f4f4f4;
      box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      padding: 35px 0;
      margin-top: 30px;

      .title {
        font-size: 30px;
      }

      .chartBox {
        width: 880px;
        height: 440px;
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

export default connect(mapStateToProps, mapDispatchToProps)(DailyPrice);

const chartOpt = {
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      "27",
      "02",
      "08",
      "13",
      "18",
      "23",
      "28",
      "02",
      "08",
      "13",
      "18",
      "23",
      "28",
      "03",
      "09",
    ],
  },
  yAxis: {
    type: "value",
    position: "right",
  },
  series: [
    {
      smooth: true,
      data: [
        500, 800, 900, 700, 600, 400, 900, 500, 300, 500, 900, 300, 500, 800,
        900, 700, 600,
      ],
      type: "line",
      lineStyle: {
        color: "#6F47D1",
        width: 3,
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(241, 238, 248,1)",
          },
          {
            offset: 1,
            color: "rgba(241, 238, 248,0.4)",
          },
        ]),
      },
    },
  ],
};
