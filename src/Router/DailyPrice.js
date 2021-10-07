import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Footer from "./Footer";
import E_chart1B from "../Img/example/E_chart1B.png";
import I_3dotWhite from "../Img/Icon/I_3dotWhite.svg";
import I_hoverPolygon from "../Img/Icon/I_hoverPolygon.svg";
import { strDot } from "../Util/common";

function DailyPrice({ store }) {
  const [chartPopup, setChartPopup] = useState(false);

  function onChartPopupMove(e) {
    let x = e.screenX +20;
    let y = e.screenY - 124;

    let chartPopup;
    if (document.querySelector("#ChartPopup")) {
      chartPopup = document.querySelector("#ChartPopup");
      chartPopup.style.left = x + "px";
      chartPopup.style.top = y + "px";
    }
  }

  return (
    <>
      <DailyPriceBox onMouseMove={(e) => onChartPopupMove(e)}>
        <div className="contBox">
          <div className="textBox">
            <p className="title">Price</p>
            <p className="subText">
              현재 test token 가격 $32,590.03 @0.06387 BTC/ETH
            </p>
          </div>

          <div className="chartBox">
            <p className="title">Test Token Daily Price Chart &#40;USD&#41;</p>
            <img
              src={E_chart1B}
              alt=""
              onMouseEnter={() => setChartPopup(true)}
              onMouseLeave={() => setChartPopup(false)}
            />
          </div>
        </div>

        {chartPopup && (
          <div id="ChartPopup" className="chartPopup">
            <p>2021-07-09 금요일</p>
            <p>test token Price : $201.53</p>
          </div>
        )}
      </DailyPriceBox>
      <Footer />
    </>
  );
}

const DailyPriceBox = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: center;

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

    .chartBox {
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
    }
  }

  .chartPopup {
    position: fixed;
    background: #ffffff;
    border: 1px solid #f7f7f7;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-size: 10px;
    padding: 10px 13px;
    text-align: center;
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

export default connect(mapStateToProps, mapDispatchToProps)(DailyPrice);
