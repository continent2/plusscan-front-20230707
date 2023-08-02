import { configureStore, createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "storeReducer",
  initialState: {
    profPopup: false,
    overProfPopup: false,
    coinPopup: false,
    overCoinPopup: false,
    languagePopup: false,

    isLogin: false,
    headerkinds: 1,
    chain: "Mainnet",
    leftBar: false,
    language: "EN",
    slideKinds: 3,
  },
  reducers: {
    closePopupAll: (state, action) => {
      return {
        ...state,
        profPopup: false,
        coinPopup: false,
        languagePopup: false,
      };
    },

    setProfPopup: (state, action) => {
      return {
        ...state,
        profPopup: true,
      };
    },
    overProfPopup: (state, action) => {
      return {
        ...state,
        overProfPopup: action.payload,
      };
    },
    setCoinPopup: (state, action) => {
      return {
        ...state,
        coinPopup: true,
      };
    },
    overCoinPopup: (state, action) => {
      return {
        ...state,
        overCoinPopup: action.payload,
      };
    },
    setLanguagePopup: (state, action) => {
      return {
        ...state,
        languagePopup: true,
      };
    },

    //

    setLogin: (state, action) => {
      return {
        ...state,
        isLogin: true,
      };
    },

    setHeaderKinds: (state, action) => {
      return {
        ...state,
        headerkinds: action.payload,
      };
    },

    setChain: (state, action) => {
      return {
        ...state,
        chain: action.payload,
      };
    },
    stretchLeftBar: (state, action) => {
      return {
        ...state,
        leftBar: action.payload,
      };
    },
    setLanguage: (state, action) => {
      return {
        ...state,
        language: action.payload,
      };
    },
    setSlideKinds: (state, action) => {
      return {
        ...state,
        slideKinds: action.payload,
      };
    },
  },
});

export const {
  closePopupAll,
  setProfPopup,
  overProfPopup,
  setCoinPopup,
  overCoinPopup,
  setLanguagePopup,
  setLogin,
  setHeaderKinds,
  setChain,
  stretchLeftBar,
  setLanguage,
  setSlideKinds,
} = store.actions;
export default configureStore({ reducer: store.reducer });
