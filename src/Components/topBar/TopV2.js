import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import I_hamburger from "../../Img/Icon/I_hamburger.svg";
import I_stetchHamburger from "../../Img/Icon/I_stetchHamburger.svg";
import I_search from "../../Img/Icon/I_search.svg";
import { stretchLeftBar } from "../../Util/store";
import { strDot } from "../../Util/common";

function TopBar2({ store, stretchLeftBar }) {
  const [search, setSearch] = useState("");
  return (
    <TopBar2Box>
      <span className="leftBox">
        <div className="btnBox">
          <img
            className="hamburgerBtn"
            src={store.leftBar ? I_stetchHamburger : I_hamburger}
            alt=""
            onClick={() => stretchLeftBar(!store.leftBar)}
          />
          <span className="logoBox">
            <span className="logoImg" />
            <p className="logoName">LOGO</p>
          </span>
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
        <button className="userBtn" onClick={() => {}}>
          {strDot("0x3eaaaaa0087", 4, 4)}
        </button>
        <span className="profImg" />
      </span>
    </TopBar2Box>
  );
}

const TopBar2Box = styled.div`
  position: fixed;
  background: #fff;
  width: inherit;
  height: 100px;
  border-bottom: 2px solid #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 4;

  .leftBox {
    display: flex;
    align-items: center;
    gap: 116px;

    .btnBox {
      display: flex;
      width: 162px;
      justify-content: space-between;
      align-items: center;

      .hamburgerBtn {
        cursor: pointer;
      }

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

    .searchBox {
      display: flex;
      align-items: center;
      width: 540px;
      height: 40px;
      border: 1px solid #c4c4c4;
      border-radius: 25px;
      font-size: 14px;
      line-height: 14px;
      padding: 0 20px;
      overflow: hidden;
      gap: 6px;

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
    stretchLeftBar: (toggle) => dispatch(stretchLeftBar(toggle)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TopBar2));
