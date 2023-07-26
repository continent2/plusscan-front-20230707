import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import { putCommaAtPrice } from "../Util/common";
import { useParams } from "react-router-dom";
import { Transactions } from "../Router/Transactions";
import { API } from "../Config/api";
import axios from "axios";

function Blocks({ store }) {
  const { numberOrHash } = useParams();

  const [listCategory, setListCategory] = useState(0);
  const [blockInfo, setBlockInfo] = useState({});

  const getBlockInfo = () => {
    // number
    if(numberOrHash){
      axios.get(`${API.API_BLOCK_INFO_NUMBER}${numberOrHash}`).then((resp) => {
        // console.log("nvsgfeVB2c", resp.data.respdata);
        if (resp.data.status === "OK") {
          setBlockInfo(resp.data.respdata)
        }
      });
    }else{
      // hash
      axios.get(`${API.API_BLOCK_INFO_HASH}${numberOrHash}`).then((resp) => {
        // console.log("nvsgfeVB2c", resp.data);
        if (resp.data.status === "OK") {

        }
      });
    }

  }

  useEffect(() => {
    getBlockInfo();
  }, [])

  return (
    <>
        <BlocksBox>
      <div className="innerBox">
        <div className="titleBox">
          <strong className="title">Block</strong>
          <p className="idNum">#{blockInfo.number}</p>
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
              <strong className="value">{blockInfo.number}</strong>
            </li>

            <li>
              <p className="key">타임스탬프</p>
              <p className="value">
              {blockInfo.timestamp}
              </p>
            </li>

            <li>
              <p className="key">가격</p>
              <p className="value">
                {"가격"}
              </p>
            </li>

            <li>
              <p className="key">채굴자</p>
              <span className="value">
                <p>{blockInfo.txcount} transactions</p>&nbsp; and &nbsp;
                <p>contract internal transactions</p>&nbsp;in this block
              </span>
            </li>

            <li>
              <p className="key">Block Reward</p>
              <p className="value">
                {"리워드"}
              </p>
            </li>

            <li>
              <p className="key">Uncles Reward</p>
              <p className="value">{"Uncles Reward"}</p>
            </li>

            <li>
              <p className="key">난이도</p>
              <p className="value">{blockInfo.difficulty}</p>
            </li>

            <li>
              <p className="key">총 난이도</p>
              <p className="value">
                {blockInfo.totalDifficulty}
              </p>
            </li>

            <li>
              <p className="key">크기</p>
              <p className="value">{blockInfo.size} bytes</p>
            </li>

            <li>
              <p className="key">사용된 가스</p>
              <p className="value">
              {blockInfo.gasUsed} 
              {/* &#40;99.89%&#41; */}
              </p>
            </li>

            <li>
              <p className="key">가스 제한</p>
              <p className="value">{blockInfo.gasLimit}</p>
            </li>

            <li>
              <p className="key">추가 데이터</p>
              <p className="value">
                {"추가 데이터"}
              </p>
            </li>

            <li>
              <p className="key">Hash</p>
              <p className="value">
                {blockInfo.hash}
              </p>
            </li>

            <li>
              <p className="key">상위 Hash</p>
              <span className="value">
                <p>
                  {blockInfo.parentHash}
                </p>
              </span>
            </li>

            <li>
              <p className="key">Sha3Uncles</p>
              <p className="value">
                {blockInfo.sha3Uncles}
              </p>
            </li>

            <li>
              <p className="key">StateRoot</p>
              <p className="value">
                {blockInfo.stateRoot}
              </p>
            </li>

            <li>
              <p className="key">Nonce</p>
              <p className="value">{blockInfo.nonce}</p>
            </li>
          </ul>
        </div>
      </div>
      <Transactions />
    </BlocksBox>
    </>
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
    padding: 110px 0 0 0;
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
