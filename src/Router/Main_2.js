import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setHeaderKinds } from "../Util/store";
import { putCommaAtPrice } from "../Util/common";
import I_rightArrowMauve from "../Img/Icon/I_rightArrowMauve.svg";
import I_3dot from "../Img/Icon/I_3dot.svg";
import E_chart1 from "../Img/example/E_chart1.png";
import E_chart2 from "../Img/example/E_chart2.png";

function Maine_2({ store, setHeaderKinds }) {
  useEffect(() => {
    setHeaderKinds(2);
  }, []);

  return (
    <>
      <LeftBar className="leftBar">
        <div className="settingBox">
          <button className="settingBtn" onClick={() => {}}>
            설정
          </button>
        </div>
      </LeftBar>
      <Maine_2Box>
        <div className="explorerBox">
          <div className="innerBox">
            <div className="leftBox">
              <p className="testNow">test token now</p>
              <p className="holding">$ {putCommaAtPrice(207230)}</p>
              <button className="explorerBtn" onClick={() => {}}>
                Explorer
              </button>
            </div>
            <span className="imgBox">그림요소</span>
          </div>
        </div>

        <div className="contBox">
          <ul className="infoBox">
            <li>
              <strong>$32,590.03</strong>
              <button className="subBtn" onClick={() => {}}>
                TEST Price&nbsp;
                <img src={I_rightArrowMauve} alt="" />
              </button>
            </li>

            <li>
              <strong>31 Gwei</strong>
              <button className="subBtn" onClick={() => {}}>
                GAS Price&nbsp;
                <img src={I_rightArrowMauve} alt="" />
              </button>
            </li>

            <li>
              <strong>543.50 TH</strong>
              <button className="subBtn" onClick={() => {}}>
                채굴&nbsp;
                <img src={I_rightArrowMauve} alt="" />
              </button>
            </li>

            <li>
              <strong>98.531 EH/s</strong>
              <button className="subBtn" onClick={() => {}}>
                해시레이트&nbsp;
                <img src={I_rightArrowMauve} alt="" />
              </button>
            </li>

            <li>
              <strong>3.474m</strong>
              <button className="subBtn" onClick={() => {}}>
                트랜잭션&nbsp;
                <img src={I_rightArrowMauve} alt="" />
              </button>
            </li>
          </ul>

          <div className="chartContainer">
            <div className="chartBox">
              <div className="titleBar">
                <p className="title">Price</p>
                <img src={I_3dot} alt="" />
              </div>

              <strong className="price">$32,590.03</strong>

              <img className="chart" src={E_chart1} alt="" />
            </div>

            <div className="chartBox">
              <div className="titleBar">
                <p className="title">Transactions (14 days)</p>
                <img src={I_3dot} alt="" />
              </div>

              <strong className="price">3.474m</strong>

              <img className="chart" src={E_chart2} alt="" />
            </div>
          </div>
        </div>
      </Maine_2Box>
    </>
  );
}
const LeftBar = styled.div`
  display: flex;
  align-items: flex-end;
  width: 80px;
  position: fixed;
  top: 100px;
  bottom: 0;
  left: 0;
  border-right: 2px solid #efefef;
  background: #fff;

  .settingBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: 90px;
    border-top: 2px solid #efefef;

    .settingBtn {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      font-size: 15px;
      color: #fff;
      background: #c4c4c4;
    }
  }
`;

const Maine_2Box = styled.div`
  padding: 100px 0 0 80px;

  .explorerBox {
    width: 100%;
    height: 390px;
    background: #f7f7f7;
    padding: 0px 262px 0 262px;
    display: flex;
    justify-content: center;
    align-items: center;

    .innerBox {
      width: 1316px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .leftBox {
        font-weight: 700;

        .testNow {
          padding-top: 34px;
          font-size: 35px;
        }

        .holding {
          font-size: 60px;
        }

        .explorerBtn {
          width: 260px;
          height: 80px;
          background: #dfdfdf;
          border-radius: 15px;
          margin-top: 38px;
          font-size: 40px;
          font-weight: 700;
          color: #a2afd2;
        }
      }

      .imgBox {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 284px;
        height: 284px;
        border-radius: 50%;
        background: #a2afd2;
        color: #fff;
        font-size: 40px;
        font-weight: 700;
      }
    }
  }

  .contBox {
    padding: 116px 0 250px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .infoBox {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 1400px;
      height: 180px;
      background: #f2f2f2;
      border-radius: 20px;

      li {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 20px;

        .subBtn {
          color: #a2afd2;
          font-size: 16px;
        }
      }
    }

    .chartContainer {
      display: flex;
      justify-content: center;
      gap: 10px;

      .chartBox {
        width: 690px;
        height: 450px;
        background: #ffffff;
        border: 1px solid #ebebeb;
        box-shadow: 0px 3px 3px rgba(184, 184, 184, 0.25);
        border-radius: 20px;
        padding: 30px 33px 25px 33px;

        &:nth-child(1) {
          .titleBar,
          .price {
            padding-left: 10px;
          }
        }
        &:nth-child(2) {
          .titleBar,
          .price {
            padding-left: 16px;
          }
        }

        .titleBar {
          display: flex;
          justify-content: space-between;
          font-size: 20px;
        }

        .price {
          display: block;
          margin-top: 18px;
          font-size: 30px;
        }

        .chart {
          height: 310px;
          object-fit: cover;
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
    setHeaderKinds: (kinds) => dispatch(setHeaderKinds(kinds)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Maine_2);
