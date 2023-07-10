import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  overCoinPopup,
  overProfPopup,
  setCoinPopup,
  setLogin,
  setProfPopup,
  stretchLeftBar,
} from "../../Util/store";
import CoinPopup from "../../Components/header/CoinPopup";
import PopupBg from "../../Components/PopupBg";
import I_search from "../../Img/Icon/I_search.svg";
import ProfPopup from "../../Components/header/ProfPopup";
import { strDot } from "../../Util/common";
import LogoImg from "../../Img/logo/LogoImg.svg";
import LogoText from "../../Img/logo/LogoText.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function TopBar({
  store,
  setProfPopup,
  overProfPopup,
  setCoinPopup,
  overCoinPopup,
  setLogin,
}) {
  const history = useHistory();

  const [search, setSearch] = useState("");

  return (
    <TopBarBox>
      <span className="leftBox">
        <div className="logoBox" onClick={() => history.push("/main_1")}>
          <img src={LogoImg} alt="" />

          <img src={LogoText} alt="" />
        </div>

        <div className="searchBox">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="TxHash/주소/블록/토큰 검색"
          />
          <img src={I_search} alt="" />
        </div>
      </span>

      <span className="rightBox">
        <ul className="categoryList">
          {categoryList.map((v, index) => (
            <li key={index} onClick={() => history.push(v.url)}>
              {v.label}
            </li>
          ))}
        </ul>

        {store.isLogin ? (
          <div className="btnBox">
            <button
              className="profBtn"
              onMouseEnter={() => overProfPopup(true)}
              onMouseLeave={() => overProfPopup(false)}
              onClick={setProfPopup}
            >
              {strDot("0x3eaaaa0087", 4, 4)}
            </button>
            <span
              className="profImg"
              onMouseEnter={() => overCoinPopup(true)}
              onMouseLeave={() => overCoinPopup(false)}
              onClick={setCoinPopup}
            />
          </div>
        ) : (
          <button className="chainBtn" onClick={setLogin}>
            chain {store.chain}
          </button>
        )}

        {store.overProfPopup && <ProfPopup />}

        {store.profPopup && (
          <>
            <ProfPopup />
            <PopupBg />
          </>
        )}

        {store.overCoinPopup && <CoinPopup />}

        {store.CoinPopup && (
          <>
            <CoinPopup />
            <PopupBg />
          </>
        )}
      </span>
    </TopBarBox>
  );
}

const TopBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 90px;
  background: #fff;
  border-bottom: 2px solid #efefef;
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 30;

  .leftBox {
    display: flex;
    align-items: center;
    gap: 20px;

    .logoBox {
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
    }

    .searchBox {
      display: flex;
      align-items: center;
      gap: 6px;
      width: 540px;
      height: 40px;
      overflow: hidden;
      padding: 0 20px;
      font-size: 14px;
      line-height: 14px;
      border: 1px solid #c4c4c4;
      border-radius: 25px;

      input {
        width: 100%;
        height: inherit;

        &::placeholder {
          font-size: 14px;
          line-height: 14px;
          color: rgba(55, 55, 55, 0.5);
        }
      }

      img {
        cursor: pointer;
      }
    }
  }

  .rightBox {
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;

    .categoryList {
      display: flex;
      gap: 30px;

      li {
        font-size: 20px;
        line-height: 20px;
        cursor: pointer;
      }
    }

    .chainBtn {
      width: 166px;
      height: 40px;
      border: 1px solid #000000;
      border-radius: 25px;
      color: #373737;
      font-size: 20px;
      line-height: 20px;
    }

    .btnBox {
      display: flex;
      align-items: center;
      gap: 10px;

      .profBtn {
        width: 130px;
        height: 40px;
        color: #373737;
        background: #e9e9e9;
        border-radius: 25px;
        font-size: 18px;
        font-weight: 700;
      }

      .profImg {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: #e9e9e9;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
`;

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    setProfPopup: () => dispatch(setProfPopup()),
    overProfPopup: (toggle) => dispatch(overProfPopup(toggle)),
    setCoinPopup: () => dispatch(setCoinPopup()),
    overCoinPopup: (toggle) => dispatch(overCoinPopup(toggle)),
    setLogin: () => dispatch(setLogin()),
    stretchLeftBar: (toggle) => dispatch(stretchLeftBar(toggle)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopBar));

const categoryList = [
  { label: "Home", url: "/main_1" },
  { label: "Blocks", url: "/blocks" },
  { label: "Tokens", url: "/tokens" },
  { label: "Transactions", url: "/transactions" },
];
