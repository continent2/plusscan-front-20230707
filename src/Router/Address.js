import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_paste from "../Img/Icon/I_paste.svg";
// import I_qr from "../Img/Icon/I_qr.svg";
import { putCommaAtPrice } from "../Util/common";
import Transactions from "../Components/address/Transactions";
import InternalTxns from "../Components/address/InternalTxns";
import TokenTxns from "../Components/address/TokenTxns";
import Contract from "../Components/address/Contract";
import EventList from "../Components/address/EventList";
import Analytics from "../Components/address/Analytics";
import Info from "../Components/address/Info";
import Comments from "../Components/address/Comments";
import { useParams } from "react-router-dom";
import { API } from "../Config/api";
import axios from "axios";
import emptyToken from "../Img/Icon/empty-token.png";
import { useRecoilState } from "recoil";
import { loadingState } from "../recoil/status";

function Address({ store }) {
  const { address } = useParams();

  const [loading, setLoading] = useRecoilState(loadingState);

  const [listCategory, setListCategory] = useState(0);
  const [balance, setBalance] = useState(0);
  const [txCount, setTxCount] = useState(0);

  const [holders, setHolders] = useState([]);

  const getAddressInfo = () => {
    axios.get(`${API.API_ADDRESS_INFO}${address}`).then((resp) => {
      // console.log("qwer", resp.data);
      if (resp.data.status === "OK") {
        setBalance((Number(resp.data.balance) / 10**18).toLocaleString());
        setTxCount(resp.data.counttxs)
      }
    });
  }

  const getHolderAddress = () => {
    setLoading(true);
    axios.get(`${API.API_HOLDER_ADDRESS}${address}/0/10/id/DESC`).then((resp) => {
      console.log("nvsgfeVB2c", resp.data);
      if (resp.data.status === "OK") {

        let arr = [];
        for(let i = 0 ; i < resp.data.list.length; i++){
          if(i > 1){
            break;
          }
          arr.push(resp.data.list[i]);
        }
        setHolders(arr)
        setLoading(false);
      }
    });
  }

  useEffect(()=>{
    setLoading(true);
    getAddressInfo();
    getHolderAddress();
  },[address]);


  const headers = [
    'symbol',
    'name',
    'address',
    'amount',
    'counttxs',
    'countrxs'
  ]

  return (
    <AddressBox>
      <div className="innerBox">
        <div className="titleBox">
          <strong className="title">Address</strong>
          <p className="idNum">
            {address}
            <img style={{cursor: "pointer"}} src={I_paste} alt="" onClick={() => navigator.clipboard.writeText(address).then(() => {
                  alert("복사되었습니다");
                })} />
            {/* <img src={I_qr} alt="" /> */}
          </p>
        </div>

        <div className="topBox">
          <div className="infoBox">
            <div className="topBar">
              <p className="title">개요</p>
              <span className="tether">
                {/* Tether: USDT Stablecoin */}
                {/* <span className="square" /> */}
              </span>
            </div>

            <ul className="infoList">
              <li>
                <p className="key">Balance</p>
                <p className="value">{balance}</p>
              </li>
              <li>
                <p className="key">Tx Count</p>
                <span className="value">
                  {txCount}
                  {/* <p className="smallLetter">@ ${putCommaAtPrice(2094.64)}/ETH</p> */}
                </span>
              </li>
            </ul>
          </div>

          <div className="list">
            <ul className="listHeader">
              {headers.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>

            <ul className="holderList">
              {holders.map((cont, index) => (
                <li key={index}>
                  <span className="symbol">
                    <img className="symbol-img" src={cont.tokeninfo._urllogo ? cont.tokeninfo._urllogo : emptyToken} onError={(e)=>{
                      e.target.src = emptyToken;
                    }} />
                  </span>

                  <span className="name">
                    {cont.tokeninfo.name}
                  </span>

                  <span className="address">
                    {cont.tokeninfo.address}
                  </span>

                  <span className="amount">
                    {cont.amountdisp}
                  </span>

                  <span className="txCount">
                    {cont.counttxs}
                  </span>

                  <span className="trxCount">
                    {cont.countrxs}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="listBox">
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

          {listCategory === 0 && <Transactions />}
          {listCategory === 1 && <InternalTxns />}
          {listCategory === 2 && <TokenTxns />}
          {listCategory === 3 && <Contract />}
          {listCategory === 4 && <EventList />}
          {listCategory === 5 && <Analytics />}
          {listCategory === 6 && <Info />}
          {listCategory === 7 && <Comments />}
        </div>
      </div>
    </AddressBox>
  );
}

const AddressBox = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;

  & > .innerBox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 110px 0 86px 0;
    width: 1400px;


    .symbol-img {
      width: 20px;
    }

    .listHeader {
      display: flex;
    }

    .list {
      gap: 10px;
      padding: 20px 50px;
      font-size: 14px;
    }

    .listHeader li,
    .li span {

      &:nth-of-type(1) {
        width: 90px;
      }

      &:nth-of-type(2) {
        width: 90px;
      }

      &:nth-of-type(3) {
        width: 90px;
      }

      &:nth-of-type(4) {
        width: 90px;
      }

      &:nth-of-type(5) {
        width: 90px;
      }

      &:nth-of-type(6) {
        width: 90px;
      }

      &:nth-of-type(7) {
        width: 90px;
      }
    }

    .holderList {
      display: flex;
      padding-top: 10px;
      flex-direction: column;
      gap: 10px;
      border-top: 1px solid #d1d1d1;

      li {
        display: flex;
      }

      li span {
      &:nth-of-type(1) {
        width: 90px;
      }

      &:nth-of-type(2) {
        width: 90px;
      }

      &:nth-of-type(3) {
        width: 90px;
        padding-right: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &:nth-of-type(4) {
        width: 90px;
        padding-right: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &:nth-of-type(5) {
        width: 90px;
      }

      &:nth-of-type(6) {
        width: 90px;
      }

      &:nth-of-type(7) {
        width: 90px;
      }
      }
    }

    .titleBox {
      display: flex;
      align-items: flex-end;
      gap: 10px;
      font-weight: 500;

      .title {
        font-size: 30px;
      }

      .idNum {
        display: flex;
        align-items: center;
        gap: 7px;
        font-size: 20px;
        color: #989898;
      }
    }

    .topBox {
      margin-top: 25px;
      display: flex;
      gap: 20px;
      height: 144px;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 690px;
        border: 1px solid #ebebeb;
        box-shadow: 0px 3px 3px rgba(184, 184, 184, 0.25);
        border-radius: 20px;

        &.infoBox {
          gap: 10px;
          padding: 20px 50px;
          font-size: 14px;

          .topBar {
            display: flex;
            justify-content: space-between;
            width: 100%;

            .title {
              color: #a2afd2;
            }

            .tether {
              display: flex;
              align-items: center;
              gap: 5px;
              color: #b7b7b7;

              .square {
                display: inline-block;
                width: 10px;
                height: 10px;
                border: 1px solid #7b7b7b;
                border-radius: 1px;
              }
            }
          }

          .infoList {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            padding-top: 15px;
            border-top: 1px solid #d1d1d1;

            li {
              display: flex;

              .key {
                width: 200px;
              }

              .value{
                display: flex;
                align-items: flex-end;
                
                .smallLetter{
                  font-size: 10px;
                }
              }
            }
          }
        }
      }
    }

    .listBox {
      width: 1400px;
      padding: 17px 50px 20px 50px;
      border: 1px solid #d1d1d1;
      border-radius: 20px;

      .categoryList {
        display: inline-flex;
        align-items: center;
        gap: 38px;
        height: 40px;
        padding: 0 30px;
        border: 1px solid #dbdbdb;
        border-radius: 20px;
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

export default connect(mapStateToProps, mapDispatchToProps)(Address);

const categoryList = [
  "TRANSACTIONS",
  // "INTERNAL TXNS",
  // "TOKEN TXNS",
  // "CONTRACT",
  // "EVENT",
  // "ANALYTICS",
  // "INFO",
  // "COMMENTS",
];
