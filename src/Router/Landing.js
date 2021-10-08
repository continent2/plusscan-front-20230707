import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_twitter from "../Img/Icon/I_twitter.svg";
import I_telegram from "../Img/Icon/I_telegram.svg";
import I_media from "../Img/Icon/I_media.svg";
import Footer from "./Footer";

function Landing({ store }) {
  return (
    <>
      <LandingBox>
        <div className="innerBox">
          <div className="contBox">
            <strong className="protocol">
              UNISWAP PROTOCOL
              <br />
              Swap, earn, and build on the leading decentralized crypto trading
              protocol.
            </strong>
            <ul className="snsList">
              {snsList.map((sns, index) => (
                <img src={sns} key={index} alt="" />
              ))}
            </ul>
          </div>
          <div className="contBox">
            <div className="infoBox">
              <strong className="title">UNISWAP PROTOCOL →</strong>
              <ul className="infoList">
                <li>
                  $386B
                  <p className="subCont">$386B</p>
                </li>
                <li>
                  1.5M+
                  <p className="subCont">$386B</p>
                </li>
                <li>59M</li>
                <li>325M</li>
              </ul>
            </div>

            <div className="postContainer">
              <strong className="title">UNISWAP PROTOCOL →</strong>
              <div className="postBox">
                <div className="leftBox"></div>
                <div className="rightBox"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </LandingBox>
    </>
  );
}

const LandingBox = styled.div`
  width: inherit;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .innerBox {
    width: 1622px;

    .contBox:nth-child(1) {
      padding: 755px 113px 130px 113px;

      .protocol {
        font-size: 30px;
        line-height: 35px;
      }

      .snsList {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-top: 15px;

        img {
          width: 30px;
          height: 30px;
          object-fit: cover;
        }
      }
    }

    .contBox:nth-child(2) {
      padding: 58px 113px 378px 113px;
      border-top: 1px solid #cfcfcf;
      display: flex;
      flex-direction: column;
      gap: 174px;

      .title {
        font-size: 30px;
        font-weight: 35px;
      }

      .infoBox {
        display: flex;
        flex-direction: column;
        gap: 118px;

        .infoList {
          display: flex;
          justify-content: space-around;

          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            font-weight: 700;
            font-size: 60px;

            .subCont {
              font-size: 18px;
            }
          }
        }
      }

      .postContainer {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .postBox {
          display: flex;
          gap: 25px;

          & > * {
            background: #f2f2f2;
            border-radius: 20px;
            height: 460px;
          }

          .leftBox {
            width: 1026px;
          }

          .rightBox {
            width: 345px;
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

const snsList = [I_twitter, I_telegram, I_media];
