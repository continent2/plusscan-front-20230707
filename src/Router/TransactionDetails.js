import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { putCommaAtPrice } from "../Util/common";
import I_paste from "../Img/Icon/I_paste.svg";

function Blocks({ store }) {
  const [listCategory, setListCategory] = useState(0);
  const [data, setData] = useState("");
  const [secret, setSecret] = useState("");

  return (
    <BlocksBox>
      <div className="innerBox">
        <div className="titleBox">
          <strong className="title">Block</strong>
          <p className="idNum">#12792560</p>
        </div>

        <div className="contBox">
          <ul className="categoryList">
            {categoryList.map((category, index) => (
              <li key={index} onClick={() => setListCategory(index)}>
                {category}
                {listCategory === index && (
                  <span className="categoryBg">{category}</span>
                )}
              </li>
            ))}
          </ul>

          <ul className="infoList">
            <li>
              <p className="key">트랜잭션 해시 </p>
              <p className="value">
                0x92ac49bd254de05bab8d89bb3afd53b8d7031d9966cc95d4154174ac789cc9cb
              </p>
            </li>
            <li>
              <p className="key">상태</p>
              <p className="value">성공</p>
            </li>
            <li>
              <p className="key">블록</p>
              <p className="value">12792739</p>
            </li>
            <li>
              <p className="key">타임스탬프</p>
              <span className="value">
                <p>67 transactions and</p>&nbsp;111&nbsp;
                <p>contract internal transactions</p>&nbsp;in this block
              </span>
            </li>
            <li>
              <p className="key">From</p>
              <p className="value">
                0x9db0ddb5016a1d34fdf8df4c7a1671d25c60c116
                <img src={I_paste} alt="" />
              </p>
            </li>
            <li>
              <p className="key">To</p>
              <p className="value">
                0x690862fdc01a64a3e1e47a2aafaa3e9da326ae8b
                <img src={I_paste} alt="" />
              </p>
            </li>
            <li>
              <p className="key">값</p>
              <p className="value">0.0402 Test Token &#40;$84.10&#41;</p>
            </li>
            <li>
              <p className="key">거래 수수료</p>
              <p className="value">0.000357 Test Token &#40;$0.75&#41;</p>
            </li>
            <li>
              <p className="key">가스 가격</p>
              <p className="value">0.000000017 Test Token &#40;17 Gwei&#41;</p>
            </li>
            <li>
              <p className="key">가스 제한</p>
              <p className="value">{putCommaAtPrice(21000)}</p>
            </li>
            <li>
              <p className="key">거래에 사용된 가스</p>
              <p className="value">{putCommaAtPrice(21000)} &#40;100%&#41;</p>
            </li>
            <li>
              <p className="key">Nonce</p>
              <p className="value">1002</p>
            </li>
            <li>
              <p className="key">입력 데이터</p>
              <input
                className="value"
                value={data}
                onChange={(e) => setData(e.target.avlue)}
              ></input>
            </li>
            <li>
              <p className="key">비공개 메모</p>
              <input
                className="value"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
              ></input>
            </li>
          </ul>
        </div>
      </div>
    </BlocksBox>
  );
}

const BlocksBox = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;

  & > .innerBox {
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 110px 0 100px 0;
    width: 1400px;

    .titleBox {
      display: flex;
      align-items: flex-end;
      gap: 10px;
      font-weight: 500;

      .title {
        font-size: 30px;
      }

      .idNum {
        font-size: 20px;
        color: #989898;
      }
    }

    .contBox {
      border: 1px solid #d1d1d1;
      border-radius: 20px;
      padding: 0 50px 30px 50px;

      .categoryList {
        display: inline-flex;
        align-items: center;
        gap: 38px;
        height: 40px;
        padding: 0 30px;
        margin: 16px 0;
        border-radius: 20px;
        text-transform: uppercase;
        font-weight: 700;
        color: #a2afd2;
        border: 1px solid #dbdbdb;
        border-radius: 20px;

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          height: inherit;
          cursor: pointer;
          position: relative;

          .categoryBg {
            display: flex;
            align-items: center;
            white-space: nowrap;
            position: absolute;
            top: 0;
            height: inherit;
            background: #f4f4f4;
            border-radius: 20px;
            padding: 0 30px;
            color: unset;
          }
        }
      }

      .infoList {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 15px;
        border-top: 1px solid #d1d1d1;

        li {
          display: flex;
          padding-left: 50px;

          span {
            display: flex;
            p {
              color: #a2afd2;
            }
          }

          input {
            width: 100%;
            height: 30px;
            background: #f4f4f4;
            border-radius: 3px;
          }

          .key {
            width: 344px;
            min-width: 344px;
          }

          .value {
            img {
              margin-left: 6px;
              cursor: pointer;
            }
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);

const categoryList = ["overview", "state", "comments"];