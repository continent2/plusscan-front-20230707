import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { setHeaderKinds } from "../Util/store";

function IndexPage({ store, setHeaderKinds }) {
  const history = useHistory();

  useEffect(() => {
    setHeaderKinds(0);
  }, []);

  return (
    <IndexPageBox>
      <li onClick={() => history.push("/landing")}>랜딩</li>
      <li onClick={() => history.push("/main_1")}>메인_1</li>
      <li onClick={() => history.push("/main_2")}>메인_2</li>
      <li onClick={() => history.push("/dailyprice")}>일일 가격 차트</li>
      <li onClick={() => history.push("/transactions")}>트랜잭션</li>
      <li onClick={() => history.push("/gas")}>가스</li>
      <li onClick={() => history.push("/mine")}>채굴</li>
      <li onClick={() => history.push("/hashrate")}>해시레이트</li>
      <li onClick={() => history.push("/transactionshart")}>일일 거래 차트</li>
      <li onClick={() => history.push("/blocks")}>블록</li>
      <li onClick={() => history.push("/block")}>블록 상세</li>
      <li onClick={() => history.push("/transactionslist")}>거래</li>
      <li onClick={() => history.push("/transactiondetails")}>상세 거래내역</li>
      <li onClick={() => history.push("/adress")}>주소</li>
      <li onClick={() => history.push("/tokens")}>블록_1</li>
      <li onClick={() => history.push("/contract")}>블록_1</li>
    </IndexPageBox>
  );
}

const IndexPageBox = styled.ul`
  padding-top: 80px;
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
  font-size: 20px;


  li{
    cursor: pointer;
  }
`;

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    setHeaderKinds: (kinds) => dispatch(setHeaderKinds(kinds)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
