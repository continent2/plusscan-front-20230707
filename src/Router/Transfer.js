import styled from "styled-components";
import TopV1 from "../Components/topBar/TopV1";
import Plus from "../Img/coin/Plus.svg";
import ChvrnUpGreen from "../Img/Icon/ChvrnUpGreen.svg";
import Copy from "../Img/Icon/Copy.svg";
import { D_tagList, D_transferCategoryList } from "../Data/D_transfer";
import { useState } from "react";
import TransferList from "../Components/transfer/TransferList";
import HoldersList from "../Components/transfer/HoldersList";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Transfer() {
  const histry = useHistory();

  const [category, setCateogry] = useState(D_transferCategoryList[0]);

  return (
    <>
      <TopV1 />

      <TransferBox>
        <section className="thumbSec">
          <article className="titleBar">
            <div className="coinBox">
              <img src={Plus} alt="" />

              <h1>PLUS</h1>
            </div>

            <ul className="tagList">
              {D_tagList.map((v, i) => (
                <li key={i}>#{v}</li>
              ))}
            </ul>
          </article>

          <article className="contArea">
            <ul className="thumbList">
              <li>
                <h2 className="thumbItemTitle">Overview</h2>

                <ul className="dataList">
                  <li>
                    <p className="key">MAX TOTAL SUPPLY</p>

                    <div className="valueBox">
                      <p>39,030,615,894.320966 USDT</p>
                    </div>
                  </li>

                  <li>
                    <p className="key">HOLDERS</p>

                    <div className="valueBox">
                      <p>4,407,386</p>

                      <div className="diffBox">
                        <img src={ChvrnUpGreen} alt="" />
                        <p className="green">0.014%</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <p className="key">TOTAL TRANSFERS</p>

                    <div className="valueBox">
                      <p>191,921,458</p>
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <h2 className="thumbItemTitle">Market</h2>

                <ul className="dataList">
                  <li>
                    <p className="key">PRICE</p>

                    <div className="valueBox">
                      <p>$1.00</p>

                      <p>@ 0.000518 ETH</p>

                      <p className="green">+0.21%</p>
                    </div>
                  </li>

                  <li>
                    <p className="key">FULLY DILUTED MARKET CAP</p>

                    <div className="valueBox">
                      <p>$39,069,646,510.22</p>
                    </div>
                  </li>

                  <li>
                    <p className="key">CIRCULATING SUPPLY MARKET CAP</p>

                    <div className="valueBox">
                      <p>$83,344,991,250.00</p>
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <h2 className="thumbItemTitle">Other Info</h2>

                <ul className="dataList">
                  <li>
                    <p className="key">TOKEN CONTRACT (WITH 6 DECIMALS)</p>

                    <div className="valueBox">
                      <div className="linkBox">
                        <p className="blue">
                          0xdAC17F958D2ee523a2206206994597C13D831ec7
                        </p>

                        <img src={Copy} alt="" />
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </article>
        </section>

        <section className="listSec">
          <article className="categorytArea">
            <ul className="categoryList">
              {D_transferCategoryList.map((v, i) => (
                <li
                  key={i}
                  className={`${v === category ? "on" : ""}`}
                  onClick={() => setCateogry(v)}
                >
                  <p>{v}</p>
                </li>
              ))}
            </ul>
          </article>

          {category === D_transferCategoryList[0] && <TransferList />}
          {category === D_transferCategoryList[1] && <HoldersList />}
        </section>
      </TransferBox>
    </>
  );
}

const TransferBox = styled.main`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 200px 0 140px;
  margin: 0 auto;
  width: 1400px;

  .thumbSec {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .titleBar {
      display: flex;
      align-items: flex-end;
      gap: 16px;
      font-weight: 700;

      .coinBox {
        display: flex;
        align-items: center;
        gap: 8px;

        h1 {
          font-size: 30px;
          line-height: 40px;
          font-weight: 700;
        }
      }

      .tagList {
        display: flex;
        gap: 6px;
        padding: 0 0 4px;

        li {
          color: #6979f5;
        }
      }
    }

    .contArea {
      .thumbList {
        display: flex;
        gap: 16px;

        & > li {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 16px 30px 28px;
          border: 1px solid #ebebeb;
          border-radius: 20px;
          box-shadow: 0px 3px 3px 0px rgba(184, 184, 184, 0.25);

          .thumbItemTitle {
            font-size: 16px;
            font-weight: 500;
          }

          .dataList {
            display: flex;
            flex-direction: column;
            gap: 14px;

            li {
              display: flex;
              flex-direction: column;
              gap: 4px;
              font-size: 14px;
              font-weight: 500;

              .key {
                color: #999;
              }

              .valueBox {
                display: flex;
                align-items: center;
                gap: 8px;
                color: #373737;

                .green {
                  color: #3bc28e;
                }

                .blue {
                  color: #6979f5;
                }

                .diffBox {
                  display: flex;
                  align-items: center;
                  gap: 2px;
                }

                .linkBox {
                  display: flex;
                  align-items: center;
                  gap: 4px;

                  img {
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .listSec {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 18px 50px 40px;
    border: 1px solid #d1d1d1;
    border-radius: 20px;

    .categorytArea {
      .categoryList {
        display: inline-flex;
        height: 40px;
        border: 1px solid #dbdbdb;
        border-radius: 20px;

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 100%;
          border-radius: inherit;
          cursor: pointer;

          &.on {
            background: #f4f4f4;
          }

          p {
            font-size: 14px;
            font-weight: 700;
            color: #a2afd2;
          }
        }
      }
    }
  }
`;
