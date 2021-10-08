import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Footer from "./Footer";
import E_chart1B from "../Img/example/E_chart1B.png";
import E_bell from "../Img/Icon/E_bell.png";

function TransactionsChart({ store }) {
  const [chartPopup, setChartPopup] = useState(false);

  function onChartPopupMove(e) {
    let x = e.screenX + 20;
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
      <TransactionsChartBox onMouseMove={(e) => onChartPopupMove(e)}>
        <div className="contBox">
          <div className="textBox">
            <p className="title">Transactions</p>
            <span className="subText">
              <p>
                <img src={E_bell} alt="" />
                2021년 5월 20일 목요일에 8,166.911 TH의 최고 평균 난이도가
                기록되었습니다.
              </p>
              <p>
                2015년 7월 30일 목요일에 0.121 TH의 최저 평균 난이도가
                기록되었습니다.
              </p>
            </span>
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
        <Footer />
      </TransactionsChartBox>
    </>
  );
}

const TransactionsChartBox = styled.div`
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
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 20px;
        font-size: 20px;
        line-height: 20px;

        p {
          display: flex;
          align-items: center;
          gap: 5px;

          &:nth-of-type(n + 2) {
            margin-left: 23px;
          }
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsChart);
