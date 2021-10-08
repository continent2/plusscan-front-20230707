import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import E_logo1 from "../Img/example/E_logo1.png";
import E_logo2 from "../Img/example/E_logo2.png";
import I_btmArw from "../Img/Icon/I_btmArw.svg";
import { setLanguagePopup, stretchLeftBar } from "../Util/store";
import LanguagePopup from "./LanguagePopup";
import PopupBg from "./PopupBg";
import { useHistory } from "react-router";

function LeftBar({ store, setLanguagePopup, stretchLeftBar }) {
  const history = useHistory();
  
  return (
    <>
      <LeftBarBox style={{ width: store.leftBar ? 300 : 80 }}>
        {store.leftBar ? (
          <>
            <div className="stretchBox">
              <div className="contBox">
                <ul className="categoryList">
                  {categoryList.map((category, index) => (
                    <li
                      key={index}
                      style={{
                        background: store.slideKinds === index && "#f2f2f2",
                      }}
                      onClick={()=>history.push(`/${category}`)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>

                <button className="languageBtn" onClick={setLanguagePopup}>
                  {store.language}
                  <img src={I_btmArw} alt="" />
                </button>

                {store.languagePopup && (
                  <>
                    <LanguagePopup />
                    <PopupBg />
                  </>
                )}
              </div>

              <div className="snsBox">
                <ul className="logoList">
                  {logoList.map((logo, index) => (
                    <img src={logo} alt="" key={index} />
                  ))}
                </ul>
                <p className="copyRight">&copy; CHAINLABS COMPANY Inc.</p>
              </div>
            </div>
          </>
        ) : (
          <div className="defaultBox">
            <div className="settingBox">
              <button className="settingBtn" onClick={()=>{}}>
                설정
              </button>
            </div>
          </div>
        )}
      </LeftBarBox>

      {store.leftBar && <SlideBg onClick={() => stretchLeftBar(false)} />}
    </>
  );
}

const LeftBarBox = styled.div`
  position: fixed;
  top: 100px;
  bottom: 0;
  left: 0;
  border-right: 2px solid #efefef;
  background: #fff;
  transition: all 0.4s;
  z-index: 3;
  overflow: hidden;

  .stretchBox {
    display: flex;
    flex-direction: column;
    height: 100%;

    .contBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      padding-bottom: 28px;
      position: relative;

      .categoryList {
        flex: 1;
        margin-top: 110px;

        li {
          display: flex;
          align-items: center;
          padding: 0 92px;
          height: 60px;
          font-size: 20px;
          cursor: pointer;
        }
      }

      .languageBtn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 110px;
        height: 40px;
        border: 1px solid #c4c4c4;
        border-radius: 25px;
        padding: 0 20px;
      }
    }

    .snsBox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      height: 116px;
      border-top: 2px solid #efefef;

      .logoList {
        display: flex;
        align-items: center;
        gap: 15px;

        img {
          width: 28px;
          height: 28px;
          object-fit: cover;
        }
      }

      .copyRight {
        font-size: 15px;
        color: #373737;
      }
    }
  }

  .defaultBox {
    width: inherit;
    height: 100%;
    display: flex;
    align-items: flex-end;

    .settingBox {
      display: flex;
      justify-content: center;
      align-items: center;
      width: inherit;
      height: 90px;
      border-top: 2px solid #efefef;

      .settingBtn {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        font-size: 15px;
        color: #fff;
        background: #c4c4c4;
      }
    }
  }
`;

const SlideBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    setLanguagePopup: () => dispatch(setLanguagePopup()),
    stretchLeftBar: (toggle) => dispatch(stretchLeftBar(toggle)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);

const categoryList = ["Home", "Blocks", "Transactions", "Tokens", "Contract"];

const logoList = [E_logo1, E_logo2];
