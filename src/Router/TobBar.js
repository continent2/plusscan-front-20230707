import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  overCoinPopup,
  overProfPopup,
  setCoinPopup,
  setLogin,
  setProfPopup,
} from "../Util/store";
import CoinPopup from "../Components/header/CoinPopup";
import PopupBg from "../Components/PopupBg";
import I_hamburger from "../Img/Icon/I_hamburger.svg";
import { strDot } from "../Util/common";
import ProfPopup from "../Components/header/ProfPopup";

function TopBar({
  store,
  setProfPopup,
  overProfPopup,
  setCoinPopup,
  overCoinPopup,
  setLogin,
}) {
  let history = useHistory();
  const [search, setSearch] = useState("");

  switch (store.headerkinds) {
    case 0:
      return <Fragment></Fragment>;
      break;
    case 1:
      return (
        <TopBarBox>
          <span className="leftBox">
            <span className="logoImg" />
            <input
              className="searchBox"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="TxHash/주소/블록/토큰 검색"
            />
          </span>

          <span className="rightBox">
            <ul className="categoryList">
              {categoryList.map((category, index) => (
                <li key={index}>{category}</li>
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
    case 2:
      return (
        <TopBarBox2>
          <span className="leftBox">
            <img src={I_hamburger} alt="" />
            <span className="logoBox">
              <span className="logoImg" />
              <p className="logoName">LOGO</p>
            </span>
          </span>

          <span className="rightBox">
            <button className="userBtn" onClick={() => {}}>
              {strDot("0x3eaaaaa0087", 4, 4)}
            </button>
            <span className="profImg" />
          </span>
        </TopBarBox2>
      );
    default:
      return <Fragment></Fragment>;
      break;
  }
}

const TopBarBox = styled.div`
  position: fixed;
  background: #fff;
  width: inherit;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;

  .leftBox {
    display: flex;
    align-items: center;
    gap: 40px;

    .logoImg {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: #101730;
      border-radius: 5px;
    }

    .searchBox {
      width: 540px;
      height: 40px;
      border: 1px solid #c4c4c4;
      border-radius: 25px;
      font-size: 14px;
      line-height: 14px;
      padding: 0 20px;

      &::placeholder {
        font-size: 14px;
        line-height: 14px;
        color: rgba(55, 55, 55, 0.5);
      }
    }
  }

  .rightBox {
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;

    .categoryList {
      display: flex;
      gap: 20px;
      font-size: 20px;
      line-height: 20px;
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

const TopBarBox2 = styled.div`
  position: fixed;
  background: #fff;
  width: inherit;
  height: 100px;
  border-bottom: 2px solid #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  .leftBox {
    display: flex;
    align-items: center;
    gap: 40px;

    .logoBox {
      display: flex;
      align-items: center;
      gap: 5px;

      .logoImg {
        display: inline-block;
        width: 34px;
        height: 34px;
        background: #c4c4c4;
        border-radius: 50%;
      }

      .logoName {
        color: #c4c4c4;
        font-size: 24px;
        line-height: 24px;
      }
    }
  }

  .rightBox {
    display: flex;
    align-items: center;
    gap: 10px;

    .userBtn {
      width: 130px;
      height: 40px;
      border-radius: 25px;
      font-weight: 700;
      font-size: 18px;
      line-height: 18px;
      color: #373737;
      background: #e9e9e9;
      border-radius: 25px;
    }

    .profImg {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #e9e9e9;
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopBar));

const categoryList = ["Home", "Blocks", "Tokens", "Transactions"];
