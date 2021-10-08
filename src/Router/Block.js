import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { putCommaAtPrice } from "../Util/common";

function Blocks({ store }) {
  const [listCategory, setListCategory] = useState(0);

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
              <p className="key">블록 높이</p>
              <strong className="value">12792560</strong>
            </li>

            <li>
              <p className="key">타임스탬프</p>
              <p className="value">
                9 mins ago &#40;Jul-09-2021 10:09:12 AM +UTC&#41;
              </p>
            </li>

            <li>
              <p className="key">업무</p>
              <p className="value">
                ${putCommaAtPrice(51022.31)} &#40;24.34 Test Token&#41;
              </p>
            </li>

            <li>
              <p className="key">채굴자</p>
              <span className="value">
                <p>67 transactions and</p>&nbsp;111&nbsp;
                <p>contract internal transactions</p>&nbsp;in this block
              </span>
            </li>

            <li>
              <p className="key">Block Reward</p>
              <p className="value">
                2.583414739945197192 Ether &#40;2 + 0.583414739945197192&#41;
              </p>
            </li>

            <li>
              <p className="key">Uncles Reward</p>
              <p className="value">0</p>
            </li>

            <li>
              <p className="key">난이도</p>
              <p className="value">{putCommaAtPrice(6648066081405440)}</p>
            </li>

            <li>
              <p className="key">총 난이도</p>
              <p className="value">
                {putCommaAtPrice(27293328585740915906591)}
              </p>
            </li>

            <li>
              <p className="key">크기</p>
              <p className="value">{putCommaAtPrice(65765)} bytes</p>
            </li>

            <li>
              <p className="key">사용된 가스</p>
              <p className="value">
                {putCommaAtPrice(14976498)} &#40;99.89%&#41;
              </p>
            </li>

            <li>
              <p className="key">가스 제한</p>
              <p className="value">{putCommaAtPrice(14976498)}</p>
            </li>

            <li>
              <p className="key">추가 데이터</p>
              <p className="value">
                010a03/geth/go1.16.5/linux
                &#40;Hex:0xd883010a03846765746888676f312e31362e35856c696e7578&#41;
              </p>
            </li>

            <li>
              <p className="key">Hash</p>
              <p className="value">
                0xd5a9529df36405bff905d99a19b675c210ce619a3f1de549654cf39158442b84
              </p>
            </li>

            <li>
              <p className="key">상위 Hash</p>
              <span className="value">
                <p>
                  0x68cd2fb49c47499588fe9f9e4ca46eb0a59635e4d037921c163eeee12fc2119f
                </p>
              </span>
            </li>

            <li>
              <p className="key">Sha3Uncles</p>
              <p className="value">
                0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347
              </p>
            </li>

            <li>
              <p className="key">StateRoot</p>
              <p className="value">
                0x2c66bb4688400d36b582c5223769d309a8ec3211fe28360197c52d5486700314
              </p>
            </li>

            <li>
              <p className="key">Nonce</p>
              <p className="value">0x27d31ffd79001022</p>
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
      display: inline-flex;
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
        display: flex;
        align-items: center;
        gap: 38px;
        height: 40px;
        padding: 0 30px;
        margin: 16px 0;
        border-radius: 20px;
        text-transform: uppercase;
        font-weight: 700;
        color: #a2afd2;

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

          .key {
            width: 344px;
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

const categoryList = ["overview"];

