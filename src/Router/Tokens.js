import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_leftArrow from "../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../Img/Icon/I_rightArrow.svg";
// import { putCommaAtPrice, strDot } from "../Util/common";
import { setHeaderKinds, setSlideKinds } from "../Util/store";
// import LeftBar from "../Components/LeftBar";
import { API } from "../Config/api";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Tokens({ store, setHeaderKinds, setSlideKinds }) {
  const history = useHistory();

  const [pageNum, setPageNum] = useState(1);
  const [tokenList, setTokenList] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const size = 25;

  function onClickPagePre() {
    if (pageNum > 1) setPageNum(pageNum - 1);
    getTokenList(pageNum - 1);
  }
  function onClickPageNxt() {
    if(pageNum >= pageCount){
      return;
    }
    setPageNum(pageNum + 1);
    getTokenList(pageNum + 1);
  }

  const getTokenList = (page) => {
    // 토큰 리스트 조회
    axios.get(`${API.API_TOKENS}${(page - 1)* size}/${size}/id/DESC`).then((resp) => {
      // console.log("nvsgfeVB2c", resp.data);
      if (resp.data.status === "OK") {
        setTokenList(resp.data.list);
        setPageCount(Math.ceil(resp.data.payload.count / size));
      }
    });
  }

  useEffect(()=>{
    setHeaderKinds(2);
    setSlideKinds(3);

    getTokenList(1);
  },[])

  return (
    <>
      {/* <LeftBar /> */}
      <TokensBox>
        <div className="innerBox">
          <div className="titleBar">
            <strong className="title">Tokens</strong>
            <p className="subtitle">
              총 <strong>{tokenList.length}개</strong>의 토큰이 등록되었습니다.
            </p>
          </div>

          <ul className="tokenList">
            <li className="header">
              {headerList.map((header, index) => (
                <span key={index} className={header}>{header}</span>
              ))}
            </li>

            {tokenList.map((cont, index) => (
              <li key={index} onClick={()=> {
                history.push(`/token/${cont.address}`);
              }}>
                <span className="token">
                  {cont.name}
                </span>
                <span className="symbol">
                  <img className="symbol-img" src={cont._urllogo} />
                </span>
                <span className="decimals">
                  {/* <span className="inner">
                    {strDot(cont.decimals, 6, 6)}
                  </span>   */}
                  <span className="inner">
                    {cont.decimals}
                  </span>
                </span>

                <span className="totalSupply">
                  {cont.totalsupply / 10**cont.decimals}
                </span>

                <span className="urlLogo">
                  {cont.countholders}
                </span>

                <span className="txCount">
                  {cont.counttxs}
                </span>
              </li>
            ))}

            <div className="pageBtnBox">
              <button className="preBtn" onClick={onClickPagePre}>
                <img src={I_leftArrow} alt="" />
              </button>
              <span className="pageBox">Page {pageNum} of {pageCount}</span>
              <button className="nxtBtn" onClick={onClickPageNxt}>
                <img src={I_rightArrow} alt="" />
              </button>
            </div>
          </ul>
        </div>
      </TokensBox>
    </>
  );
}

const TokensBox = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;

  & > .innerBox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 110px 0 130px 0;
    width: 1400px;

    .titleBar {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .title {
        font-size: 30px;
        font-weight: 500;
      }

      .subtitle {
        color: #b2b2b2;
        font-size: 14px;
      }
    }

    .tokenList {
      padding: 0 50px 20px 50px;
      border: 1px solid #d1d1d1;
      border-radius: 20px;

      .symbol-img {
        width: 30px;
      }

      li {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #373737;
        cursor: pointer;

        &.header {
          color: #a2afd2;
          text-transform: uppercase;
          padding: 20px 0;
          border-bottom: 1px solid #d1d1d1;
        }

        & > span {
          display: inline-flex;
          align-items: center;

          .tokenImg {
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #eaeaea;
            margin-right: 5px;
          }

          .inner {
          }

          &:nth-of-type(1) {
            width: 150px;
          }

          &:nth-of-type(2) {
            width: 192px;
          }

          &:nth-of-type(3) {
            width: 200px;
          }

          &:nth-of-type(4) {
            width: 300px;
          }

          &:nth-of-type(5) {
            width: 350px;
          }

          &:last-of-type {
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
`;

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    setHeaderKinds: (kinds) => dispatch(setHeaderKinds(kinds)),
    setSlideKinds: (kinds) => dispatch(setSlideKinds(kinds)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tokens);

const headerList = [
  "name",
  "symbol",
  "decimals",
  "totalsupply",
  "holders",
  "coutnttxs",
];