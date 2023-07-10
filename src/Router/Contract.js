import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_leftArrow from "../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../Img/Icon/I_rightArrow.svg";
import { strDot } from "../Util/common";
import { setHeaderKinds, setSlideKinds } from "../Util/store";
import LeftBar from "../Components/LeftBar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Contract({ store, setHeaderKinds, setSlideKinds }) {
  const history = useHistory();

  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    setHeaderKinds(2);
    setSlideKinds(4);
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
      <ContractBox>
        <div className="innerBox">
          <div className="titleBar">
            <strong className="title">Contract</strong>
            <p className="subtitle">
              총 <strong>100개</strong>의 대체 가능한 토큰이 등록되었습니다.
            </p>
          </div>

          <ul className="contractList">
            <li className="header">
              {headerList.map((header, index) => (
                <span className={header} key={index}>
                  {header}
                </span>
              ))}
            </li>

            {contractList.map((cont, index) => (
              <li key={index}>
                <span className="adress">
                  <span
                    className="inner"
                    onClick={() => history.push("/transactiondetails")}
                  >
                    {strDot(cont.adress, 6, 6)}
                  </span>
                </span>
                <span className="contractName">{cont.contractName}</span>
                <span className="compiler">{cont.compiler}</span>
                <span className="version">{cont.version}</span>
                <span className="balance">{cont.balance}&nbsp;Test</span>
                <span className="txns">{cont.txns}</span>
                <span className="setting">{cont.setting}</span>
                <span className="verified">{cont.verified}</span>
                <span className="audited">{cont.audited}</span>
                <span className="license">{cont.license}</span>
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
      </ContractBox>
    </>
  );
}

const ContractBox = styled.div`
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

    .contractList {
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
            width: 180px;
          }

          &:nth-of-type(2) {
            width: 256px;
          }

          &:nth-of-type(3) {
            width: 116px;
          }

          &:nth-of-type(4) {
            width: 114px;
          }

          &:nth-of-type(5) {
            width: 116px;
          }

          &:nth-of-type(6) {
            width: 78px;
          }

          &:nth-of-type(7) {
            width: 142px;
          }

          &:nth-of-type(8) {
            width: 96px;
          }

          &:nth-of-type(9) {
            width: 96px;
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

export default connect(mapStateToProps, mapDispatchToProps)(Contract);

const headerList = [
  "adress",
  "contract name",
  "compiler",
  "version",
  "balance",
  "txns",
  "setting",
  "verified",
  "audited",
  "license",
];

const contractList = [
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
  {
    adress: "0x386caaaaaab7f9c8",
    contractName: "ExpressPayRemittanceToken",
    compiler: "Solidity",
    version: "0.8.4",
    balance: 0,
    txns: 1,
    setting: "-",
    verified: "2021-07-09",
    audited: "-",
    license: "MIT",
  },
];
