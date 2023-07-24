import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_leftArrow from "../../Img/Icon/I_leftArrow.svg";
import I_rightArrow from "../../Img/Icon/I_rightArrow.svg";

function Contract() {
  const [pageNum, setPageNum] = useState(1);

  function onClickPagePre() {
    if (pageNum > 1) setPageNum(pageNum - 1);
  }
  function onClickPageNxt() {
    setPageNum(pageNum + 1);
  }

  return (
    <ContractBox>
      <li className="header">
        {headerList.map((header) => (
          <span className={header}>{header}</span>
        ))}
      </li>

      {adressList.map((cont, index) => {
        if (index < 10)
          return (
            <li key={index}>
              <span className="assets">{cont.assets}</span>
              <span className="apy">{cont.apy}%</span>
              <span className="balance">
                {cont.balance.toFixed(2)}&nbsp;DAI
              </span>
              <span className="borrowApy">{cont.borrowApy}%</span>
              <span className="borrowBalance">
                {cont.borrowBalance.toFixed(2)}&nbsp;DAI
              </span>
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
    </ContractBox>
  );
}

const ContractBox = styled.ul`
  margin-top: 16px;
  border-top: 1px solid #d1d1d1;

  li {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #373737;
    position: relative;

    &.header {
      color: #a2afd2;
      text-transform: uppercase;
      padding: 20px 0;
      border-bottom: 1px solid #d1d1d1;
    }

    &:nth-of-type(2) {
      margin-top: 15px;
    }

    &:nth-of-type(n + 2) {
    }

    &:nth-of-type(n + 3) {
      margin-top: 20px;
    }

    &:last-of-type {
      padding-bottom: 16px;
      border-bottom: 1px solid #d1d1d1;
    }

    span {
      &:nth-of-type(1) {
        width: 368px;
      }

      &:nth-of-type(2) {
        width: 242px;
      }

      &:nth-of-type(3) {
        width: 254px;
      }
      &:nth-of-type(4) {
        width: 248px;
      }

      &:last-of-type {
        flex: 1;
      }
    }

    .imgBox {
      position: absolute;
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #c4c4c4;
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
`;

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    // SetTopBar: toggle => dispatch(setTopBar(toggle)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contract);

const headerList = [
  "assets",
  "apy 공급",
  "공급 균형",
  "borrowApy",
  "borrowBalance",
];

const adressList = [
  {
    assets: "test token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
  {
    assets: "Basic Attention Token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
  {
    assets: "Compound Governance Token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
  {
    assets: "test token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
  {
    assets: "test token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
  {
    assets: "test token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
  {
    assets: "test token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
  {
    assets: "test token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
  {
    assets: "test token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
  {
    assets: "test token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
  {
    assets: "test token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
  {
    assets: "test token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
  {
    assets: "test token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
  {
    assets: "test token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
  {
    assets: "test token",
    apy: 0.86,
    balance: 0,
    borrowApy: 0.86,
    borrowBalance: 0,
  },
];
