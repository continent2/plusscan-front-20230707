import styled from "styled-components";
// import TopV1 from "../Components/topBar/TopV1";
// import Plus from "../Img/coin/Plus.svg";
// import ChvrnUpGreen from "../Img/Icon/ChvrnUpGreen.svg";
// import Copy from "../Img/Icon/Copy.svg";
import { D_tagList, D_transferCategoryList } from "../Data/D_transfer";
import { useState, useEffect } from "react";
import TransferList from "../Components/transfer/TransferList";
import HoldersList from "../Components/transfer/HoldersList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "../Config/api";
import axios from "axios";

export default function Token() {
  // const history = useHistory();
  const { address } = useParams();

  const [category, setCategory] = useState(D_transferCategoryList[0]);
  const [totalSupply, setTotalSupply] = useState(0);

  const [tokenInfo, setTokenInfo] = useState({});

  const getTokenInfo = () => {
    // console.log(address);

    axios.get(`${API.API_TOKEN_INFO_ADDRESS}${address}`).then((resp) => {
      // console.log("asdf", resp.data.respdata);
      if (resp.data.status === "OK") {
        setTokenInfo(resp.data.respdata);
        setTotalSupply(Number(resp.data.respdata.totalsupply) / (10**resp.data.respdata.decimals));
      }
    });
  }

  useEffect(() => {
    getTokenInfo();
  }, [])

  return (
    <>
      {/* <TopV1 /> */}

      <TokenBox>
        <section className="thumbSec">
          <article className="titleBar">
            <div className="coinBox">
              <img src={tokenInfo._urllogo} alt="" />

              <h1>{tokenInfo.name}</h1>
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
                    <p className="key">Max total supply</p>

                    <div className="valueBox">
                      <p>{totalSupply}</p>
                    </div>
                  </li>

                  <li>
                    <p className="key">Total transfers</p>

                    <div className="valueBox">
                      <p>{tokenInfo.counttxs}</p>
                    </div>
                  </li>
                </ul>
              </li>


              <li>
                <h2 className="thumbItemTitle">Other Info</h2>

                <ul className="dataList">
                  <li>
                    <p className="key">decimals</p>

                    <div className="valueBox">
                      <div className="linkBox">
                        <p className="blue">
                          {tokenInfo.decimals}
                        </p>
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
                  onClick={() => setCategory(v)}
                >
                  <p>{v}</p>
                </li>
              ))}
            </ul>
          </article>

          {category === D_transferCategoryList[0] && <TransferList />}
          {category === D_transferCategoryList[1] && <HoldersList />}
        </section>
      </TokenBox>
    </>
  );
}

const TokenBox = styled.main`
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
        align-items: flex-end;
        gap: 8px;

        img {
          width: 60px;
        }

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