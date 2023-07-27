// import styled from "styled-components";
// import { Component } from "react";
import { ReactComponent as ArwLtSky } from "../../Img/Icon/ArwLtSky.svg";
import { ReactComponent as ArwRtSky } from "../../Img/Icon/ArwRtSky.svg";

export default function ListPageNation({ page = 1, setPage }) {
  return (
    <ListPageNation>
      <button
        className="arrBtn pre"
        disabled={page <= 1}
        onClick={() => setPage(--page)}
      >
        <ArwLtSky />
      </button>

      <div className="currentBox">
        <p>Page {page} of 999</p>
      </div>
      <button
        className="arrBtn next"
        disabled={page >= 999}
        onClick={() => setPage(++page)}
      >
        <ArwRtSky />
      </button>
    </ListPageNation>
  );
}

// const ListPageNationBox = styled.nav`
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   gap: 10px;
//   height: 40px;

//   .arrBtn {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 45px;
//     height: 100%;
//     background: #f0f0f0;
//     border-radius: 3px;

//     &:disabled {
//       svg {
//         path {
//           stroke: #b9b9b9;
//         }
//       }
//     }
//   }

//   .currentBox {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 130px;
//     height: 100%;
//     background: #f0f0f0;
//     border-radius: 3px;

//     p {
//       font-size: 14px;
//       color: #000;
//     }
//   }
// `;