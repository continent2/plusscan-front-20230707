import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./Components/globalStyle";
import TopBar from "./Router/TobBar";
import RouterListen from "./Util/RouterListen";
import Landing from "./Router/Landing";
import Main_1 from "./Router/Main_1";
import IndexPage from "./Router/IndexPage";
import Main_2 from "./Router/Main_2";
import { connect } from "react-redux";
import { setHeaderKinds } from "./Util/store";
import DailyPrice from "./Router/DailyPrice";
import Transactions from "./Router/Transactions";

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
      <GlobalStyle />
      <HashRouter>
        <RouterListen setHeaderKinds={setHeaderKinds} />
        <TopBar />
        <Switch>
          <Route exact path="/index" component={IndexPage} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/main_1" component={Main_1} />
          <Route exact path="/main_2" component={Main_2} />
          <Route exact path="/dailyprice" component={DailyPrice} />
          <Route exact path="/transactions" component={Transactions} />
        </Switch>
      </HashRouter>
    </AppBox>
  );
}

const AppBox = styled.div`
  background: #fff;
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