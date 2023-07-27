import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { API } from "../../Config/api";
import { useHistory } from "react-router-dom";

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
  const [placeHolder, setPlaceHolder] = useState("TxHash/주소/블록/토큰 검색");
  const [connectStatus, setConnectStatus] = useState(false);

  const getConnection = () => {
    axios.post(`https://plus8.co`, {
      headers: {
        "Content-Type" : "application/json; charset=utf-8"
      },
      data: JSON.stringify(
        {
          jsonrpc: "2.0",
          method: "eth_getBlockByNumber",
          params: ["latest", false],
          id: 1
        }
      )
    }).then((resp) => {
      setConnectStatus(true);
    }).catch((err)=>{
      setConnectStatus(false);
    })
  }

  useEffect((_) => {
    getConnection();
    setInterval((_) => {
      getConnection();
    }, 30 * 1000);
  }, []);

  return (
    <TopBarBox>
      <div className="topBarBox">
      <span className="leftBox">

        <div className="logoBox" onClick={() => window.location.replace("/")}>
          <img src={LogoImg} alt="" />

          <img src={LogoText} alt="" />
        </div>
        <div className="searchBox">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toString());
            }}
            placeholder={placeHolder}
          />
          <img src={I_search} alt="" onClick={()=>{
            // 검색 조회       
            axios.get(`${API.API_SEARCH + search}`).then((resp) => {
              if (resp.data.status === "ERR") {
                setSearch("");
                setPlaceHolder("검색결과가 없습니다");
              }else{
                switch (resp.data.datatype) {
                  case 'block':
                    history.push(`/block/${search}`);
                    break;
                  case 'transaction':
                    history.push(`/transaction/${search}`);
                    break;
                  case 'token':
                    history.push(`/token/${search}`);
                    break;
                  default:
                    break;
                }
                window.location.reload();
              }
            });
          }} />
        </div>
      </span>

      <span className="rightBox">
        <ul className="categoryList">
          {categoryList.map((v, index) => {
              if(v.label === 'dot'){
                return (              
                  <li key={index} style={{
                    width:'20px',
                    height:'20px',
                    borderRadius:"50%",
                    backgroundColor: `${connectStatus ? 'green': 'red'}`
                    }}>
                  </li>
                  )
              }
              else{
                return (              
                  <li style={{ cursor: 'pointer'}} key={index} onClick={() => history.push(v.url)}>
                    {v.label}
                  </li>
                  )
              }
            }
          )}
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
      </div>
    </TopBarBox>
  );
}

const TopBarBox = styled.div`
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 30;

  .topBarBox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 1400px;
    height: 100px;
    background: #fff;
    border-bottom: 2px solid #efefef;
  }

  .leftBox {
    display: flex;
    align-items: center; 
    gap: 20px;

    .logoBox {
      display: flex;
      align-items: center; 
      gap: 10px;
      cursor: pointer;
    }

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
  { label: "Home", url: "/" },
  { label: "Blocks", url: "/blocks" },
  { label: "Tokens", url: "/tokens" },
  { label: "Transactions", url: "/transactions" },
  { label: "dot"},
];

