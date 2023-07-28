import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_twitter from "../Img/Icon/I_twitter.svg";
import I_telegram from "../Img/Icon/I_telegram.svg";
import I_media from "../Img/Icon/I_media.svg";

function Footer({ store }) {
  return (
    <FooterBox className="footer">
      <div className="leftBox">
        <strong className="serviceName">Blockchain Explorer</strong>
        <p className="copyright">&copy; 2021 Blockchain Explorer</p>
        <p className="copyright">updated 2023-07-28 11:07</p>
      </div>

      <ul className="infoList">
        <ul className="termList">
          {termList.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>

        <ul className="companyInfoList">
          {companyInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>

        <div className="snsBox">
          <p>FOLLOW US ON</p>
          <ul className="snsList">
            {snsList.map((sns, index) => (
              <img src={sns} alt="" key={index} />
            ))}
          </ul>
        </div>
      </ul>
    </FooterBox>
  );
}

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1400px;
  margin: auto auto 0 auto;
  padding: 35px 0;
  border-top: 1px solid #d1d1d1;
  font-size: 14px;
  color: #222;

  .leftBox {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .serviceName {
      font-size: 18px;
      font-family: "Rubik Mono One", sans-serif;
      line-height: 22px;
      color: #222;
      text-transform: uppercase;
    }
  }

  .infoList {
    display: flex;
    gap: 150px;

    & > ul {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .snsBox {
      display: flex;
      flex-direction: column;
      gap: 10px;

      p {
        text-transform: uppercase;
      }

      ul {
        display: flex;
        gap: 15px;

        img {
          width: 22px;
          height: 22px;
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
    // SetTopBar: toggle => dispatch(setTopBar(toggle)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

const termList = [
  "작동되는방법",
  "이용약관",
  "서비스운영정책",
  "개인정보처리방침",
];

const companyInfo = [
  // "주) 체인랩스아이티",
  // "서울특별시 강남구 테헤란로128",
  // "Tel. 010-2371-5298",
  // "사업자 번호. 312-87-02222",
  // "대표자명. 이장형",
];

const snsList = [I_twitter, I_telegram, I_media];
