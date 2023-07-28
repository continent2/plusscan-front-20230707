import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import { putCommaAtPrice } from "../Util/common";
import I_paste from "../Img/Icon/I_paste.svg";
import { useParams } from "react-router-dom";
import { API } from "../Config/api";
import axios from "axios";

function Blocks({ store }) {
  const { txHash } = useParams();

  const [listCategory, setListCategory] = useState(0);
  const [txInfo, setTxInfo] = useState({});

  const getTxInfo = () => {
    // console.log(txHash)
    axios.get(`${API.API_TX_INFO}${txHash}`).then((resp) => {
      console.log("qwer", resp.data.respdata);
      if (resp.data.status === "OK") {
        setTxInfo(resp.data.respdata)
      }
    });
  }

  useEffect(() => {
    getTxInfo();
  }, [])

  return (
    <BlocksBox>
      <div className="innerBox">
        <div className="titleBox">
          <strong className="title">Transaction</strong>
          <p className="idNum">#{txInfo.hash}</p>
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
              <p className="key">트랜잭션 해시</p>
              <p className="value">
                {txInfo.hash}
              </p>
            </li>
            <li>
              <p className="key">상태</p>
              <p className="value">{txInfo.typecode}</p>
            </li>
            <li>
              <p className="key">블록</p>
              <p className="value">{txInfo.blockNumber}</p>
            </li>
            <li>
              <p className="key">타임스탬프</p>
              <span className="value">
                <p>{txInfo.timestamp}</p>
              </span>
            </li>
            <li>
              <p className="key">From</p>
              <p className="value">
                {txInfo.from_}
                <img src={I_paste} alt="" onClick={() => navigator.clipboard.writeText(txInfo.from_).then(() => {
                  alert("복사완료");
                })} />
              </p>
            </li>
            <li>
              <p className="key">To</p>
              <p className="value">
                {txInfo.to_}
                <img src={I_paste} alt="" onClick={() => navigator.clipboard.writeText(txInfo.to_).then(() => {
                  alert("복사완료");
                })} />
              </p>
            </li>
            <li>
              <p className="key">값</p>
              <p className="value">{txInfo.value}</p>
            </li>
            <li>
              <p className="key">거래 수수료</p>
              <p className="value">{"수수료"}</p>
            </li>
            <li>
              <p className="key">가스 가격</p>
              <p className="value">{txInfo.gasPrice}</p>
            </li>
            <li>
              <p className="key">가스 제한</p>
              <p className="value">{"가스제한"}</p>
            </li>
            <li>
              <p className="key">거래에 사용된 가스</p>
              <p className="value">{txInfo.gas}</p>
            </li>
            <li>
              <p className="key">Nonce</p>
              <p className="value">{txInfo.nonce}</p>
            </li>
            <li>
              <p className="key">입력 데이터</p>
              <p className="value">{txInfo.input}</p>
            </li>
            {/* <li>
              <p className="key">비공개 메모</p>
              <p className="value">{"비공개 메모"}</p>
            </li> */}
            <li>
              <p className="key">typestr</p>
              <p className="value">
                {txInfo.typestr === "DEPL-C" && "Contract deploy"}  
                {txInfo.typestr === "TX-C" && "Send Plus"}  
                {txInfo.typestr === "TX-T" && "Send Token"}  
              </p>
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
            word-break: break-all;
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

const categoryList = [
  "overview",
  //  "state",
  //   "comments"
  ];
