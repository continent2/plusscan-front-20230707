import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_leftArrow from "../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../Img/Icon/I_rightArrow.svg";
import { putCommaAtPrice, strDot } from "../Util/common";
import { setHeaderKinds, setSlideKinds } from "../Util/store";
import LeftBar from "../Components/LeftBar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Tokens({ store, setHeaderKinds, setSlideKinds }) {
  const history = useHistory();

  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    setHeaderKinds(2);
    setSlideKinds(3);
  }, []);

  function onClickPagePre() {
    if (pageNum > 1) setPageNum(pageNum - 1);
  }
  function onClickPageNxt() {
    setPageNum(pageNum + 1);
  }

  return (
    <>
      <LeftBar />
      <TokensBox>
        <div className="innerBox">
          <div className="titleBar">
            <strong className="title">Tokens</strong>
            <p className="subtitle">
              총 <strong>100개</strong>의 대체 가능한 토큰이 등록되었습니다.
            </p>
          </div>

          <ul className="tokenList">
            <li className="header">
              {headerList.map((header) => (
                <span className={header}>{header}</span>
              ))}
            </li>

            {tokenList.map((cont, index) => (
              <li key={index}>
                <span
                  className="token"
                  onClick={() => history.push("/transfer")}
                >
                  <span className="tokenImg" />
                  {cont.token}
                </span>
                <span className="symbol">{cont.symbol}</span>
                <span className="contractAdress">
                  <span className="inner">
                    {strDot(cont.contractAdress, 6, 6)}
                  </span>
                </span>

                <span className="totalSupply">
                  {putCommaAtPrice(cont.totalSupply)}
                </span>

                <span className="totalTransfers(byte)">
                  {putCommaAtPrice(cont.totalTransfers)}
                </span>
              </li>
            ))}

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
            padding: 2px 4px;
            background: #ececec;
            border-radius: 2px;
          }

          &:nth-of-type(1) {
            width: 360px;
          }

          &:nth-of-type(2) {
            width: 192px;
          }

          &:nth-of-type(3) {
            width: 260px;
          }

          &:nth-of-type(4) {
            width: 336px;
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
  "block",
  "symbol",
  "contract adress",
  "total supply",
  "total transfers",
];

const tokenList = [
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
  {
    token: "Orbit Bridge Klaytn USD Tether",
    symbol: 4,
    contractAdress: "0x386caaaaaab7f9c8",
    totalSupply: 3300000000,
    totalTransfers: 1293694,
  },
];