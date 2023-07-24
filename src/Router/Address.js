import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import I_paste from "../Img/Icon/I_paste.svg";
import I_qr from "../Img/Icon/I_qr.svg";
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

function Address({ store }) {
  const { address } = useParams();

  const [listCategory, setListCategory] = useState(0);

  const [holders, setHolders] = useState([]);

  const getHolderAddress = () => {
    axios.get(`${API.API_HOLDER_ADDRESS}${address}/0/10/id/DESC`).then((resp) => {
      console.log("nvsgfeVB2c", resp.data);
      if (resp.data.status === "OK") {
        setHolders(resp.data.list)
      }
    });
  }

  useEffect(()=>{
    console.log(address);
    getHolderAddress();
  },[])

  return (
    <AddressBox>
      <div className="innerBox">
        <div className="titleBox">
          <strong className="title">Address</strong>
          <p className="idNum">
            #12792560
            <img src={I_paste} alt="" />
            <img src={I_qr} alt="" />
          </p>
        </div>

        <div className="topBox">
          <div className="infoBox">
            <div className="topBar">
              <p className="title">개요</p>
              <span className="tether">
                Tether: USDT Stablecoin
                <span className="square" />
              </span>
            </div>

            <ul className="infoList">
              <li>
                <p className="key">밸런스</p>
                <p className="value">1 wei</p>
              </li>
              <li>
                <p className="key">값</p>
                <span className="value">
                  Less Than $0.01
                  <p className="smallLetter">@ ${putCommaAtPrice(2094.64)}/ETH</p>
                </span>
              </li>
            </ul>
          </div>

          <div className="blankBox"></div>
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
  "INTERNAL TXNS",
  "TOKEN TXNS",
  "CONTRACT",
  "EVENT",
  "ANALYTICS",
  "INFO",
  "COMMENTS",
];
