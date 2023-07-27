import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./Components/globalStyle";
import TopBar from "./Router/TobBar";
import RouterListen from "./Util/RouterListen";
// import Landing from "./Router/Landing";
import Main_1 from "./Router/Main_1";
// import IndexPage from "./Router/IndexPage";
// import Main_2 from "./Router/Main_2";
import { connect } from "react-redux";
import { setHeaderKinds } from "./Util/store";
import DailyPrice from "./Router/DailyPrice";
import Transactions from "./Router/Transactions";
import Gas from "./Router/Gas";
import Mine from "./Router/Mine";
import HashRate from "./Router/HashRate";
import TransactionsChart from "./Router/TransactionsChart";
import Blocks from "./Router/Blocks";
import Block from "./Router/Block";
import transaction from "./Router/Transaction";
import Address from "./Router/Address";
import Tokens from "./Router/Tokens";
import Token from "./Router/Token";
import Contract from "./Router/Contract";

function App({ store, setHeaderKinds }) {
  return (
    <AppBox id="AppBox" style={{ width: "100%", height: "100%" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
        rel="stylesheet"
      />
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap"
        rel="stylesheet"
      /> */}

      <GlobalStyle />
      <HashRouter>
        <RouterListen setHeaderKinds={setHeaderKinds} />
        <TopBar />
        <Switch>
          <Route exact path="/" component={Main_1} />
          {/* <Route exact path="/landing" component={Landing} /> */}
          {/* <Route exact path="/main_1" component={Main_1} /> */}
          {/* <Route exact path="/main_2" component={Main_2} /> */}
          <Route exact path="/dailyprice" component={DailyPrice} />
          <Route exact path="/gas" component={Gas} />
          <Route exact path="/mine" component={Mine} />
          <Route exact path="/hashrate" component={HashRate} />
          <Route exact path="/transactionchart" component={TransactionsChart} />
          <Route exact path="/blocks" component={Blocks} />
          <Route exact path="/block/:numberOrHash" component={Block} />
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/transaction/:txHash" component={transaction} />
          <Route exact path="/address/:address" component={Address} />
          <Route exact path="/tokens" component={Tokens} />
          <Route exact path="/token/:address" component={Token} />
          <Route exact path="/contract/" component={Contract} />
        </Switch>
      </HashRouter>
    </AppBox>
  );
}

const AppBox = styled.div`
  background: #fff;
  display: flex;

  .tooltip {
    position: relative;
    display: block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    position: absolute;
    z-index: 1;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }

  .tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    border-style: solid;
    border-width: 5px;
  }

  .tooltip .tooltip-bottom {
    width: auto !important;
    top: 150%;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 5px 10px;
  }
  
  .tooltip .tooltip-bottom::after {
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-color: transparent transparent black transparent;
  }

  .pageBtnBox {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 40px;
    margin-top: 15px;

    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      background: #f0f0f0;
      border-radius: 3px;
    }

    button {
      width: 45px;

      img {
        opacity: 0.28;
      }
    }

    span {
      padding: 0 22px;
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
