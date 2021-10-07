import { configureStore, createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "storeReducer",
  initialState: {
    profPopup: false,
    overProfPopup: false,
    coinPopup: false,
    overCoinPopup: false,
    isLogin: false,
    headerkinds: 1,
    chain: "Mainnet",
  },
  reducers: {
    closePopupAll: (state, action) => {
      return {
        ...state,
        profPopup: false,
        coinPopup: false,
      };
    },

    setProfPopup: (state, action) => {
      return {
        ...state,
        profPopup: true,
      };
    },
    overProfPopup: (state, action) => {
      console.log(action.payload);
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
  },
});

export const {
  closePopupAll,
  setProfPopup,
  overProfPopup,
  setCoinPopup,
  overCoinPopup,
  setLogin,
  setHeaderKinds,
  setChain,
} = store.actions;
export default configureStore({ reducer: store.reducer });
