import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { closePopupAll, setLanguage } from "../Util/store";

function LanguagePopup({ store, setLanguage, closePopupAll }) {
  function onClickProf(e) {
    setLanguage(e.target.innerText);
    closePopupAll();
  }

  return (
    <LanguagePopupBox>
      {languageList.map((language, index) => (
        <li key={index} onClick={(e) => onClickProf(e)}>
          {language}
        </li>
      ))}
    </LanguagePopupBox>
  );
}

const LanguagePopupBox = styled.ul`
  width: 240px;
  height: 420px;
  overflow-y: scroll;
  background: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 16px;
  z-index: 6;
  position: absolute;
  bottom: 78px;

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    color: #222;
    cursor: pointer;
  }
`;

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    setLanguage: (language) => dispatch(setLanguage(language)),
    closePopupAll: () => dispatch(closePopupAll()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguagePopup);

const languageList = [
  "English",
  "Deutsch",
  "Español",
  "Suomalainen",
  "日本語",
  "한국어",
  "Nederlands",
  "Nederlands",
  "Nederlands",
  "Nederlands",
  "Nederlands",
  "Nederlands",
  "Nederlands",
  "Nederlands",
  "Nederlands",
  "Nederlands",
  "Nederlands",
];
