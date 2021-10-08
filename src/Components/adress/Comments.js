import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function Comments() {
  const [commentInput, setCommentInput] = useState("");

  return (
    <CommentsBox>
      <div className="inputContainer">
        <div className="postInputBox">
          <span className="profImg" />
          <textarea placeholder="포스트 글을 작성해주세요" />
        </div>

        <div className="bottomBar">
          <span />
        </div>
      </div>

      {commentList.map((comment, index) => (
        <li key={index}>
          <div className="profBar">
            <span className="profImg" />
            <p className="profName">{comment.profName}</p>
          </div>

          <div className="textBox">
            <p className="comment">{comment.contText}</p>
            <div className="timeBox">
              <p>{comment.time[0]}</p>
              <p>{comment.time[1]}</p>
            </div>
            {index === commentList.length - 1 && (
              <div className="inputBox">
                <input
                  className="commentInput"
                  placeholder="댓글을 작성해주세요"
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                />
                <button
                  className="enrollBtn"
                  onClick={() => setCommentInput("")}
                >
                  게시
                </button>
              </div>
            )}
          </div>
        </li>
      ))}
    </CommentsBox>
  );
}

const CommentsBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 16px;
  border-top: 1px solid #d1d1d1;
  padding-top: 16px;
  width: 100%;
  color: #373737;

  .inputContainer {
    width: inherit;
    height: 186px;
    background: #f3f3f3;
    border-radius: 15px;
    padding: 0 10px;
    margin-bottom: 30px;
    font-size: 14px;

    .postInputBox {
      display: flex;
      gap: 15px;
      padding: 26px 10px 10px 10px;
      height: 130px;

      .profImg {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #c4c4c4;
      }

      textarea {
        margin-top: 13px;
        width: 100%;
        height: 80px;
        background: none;

        &::placeholder {
          color: #ccc;
        }
      }
    }

    .bottomBar {
      padding: 10px;
      border-top: 1px solid #d1d1d1;

      span {
        display: inline-block;
        width: 205px;
        height: 35px;
        background: #c4c4c4;
        border-radius: 30px;
      }
    }
  }

  li {
    .profBar {
      display: flex;
      align-items: center;
      gap: 16px;

      .profImg {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: #c4c4c4;
        border-radius: 50%;
      }

      .profName {
        line-height: 14px;
      }
    }

    .textBox {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-left: 56px;

      .timeBox {
        display: flex;
        gap: 15px;
      }

      .inputBox {
        display: flex;
        align-items: center;
        height: 35px;
        background: #f2f2f2;
        border-radius: 3px;
        padding: 0 16px;
        
        .commentInput {
          width: 100%;
          background: none;

          &::placeholder {
            color: #ccc;
          }
        }

        .enrollBtn {
          min-width: 28px;
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

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
const commentList = [
  {
    profName: "김둘리",
    contText:
      "if you could fix my stock transaction of 0,9 ETH from bitstamp to liqui (0x6f129353524d4b948cd39377a168ebe5cfd6c9b11717db081af3bcbca2c7f505) I promise to sent you 0,1 ETH if it arrive for helping me. If i interpret it correct you’ve already worked on Block 4892197 and people do get there ETH back. Please help me as well. Because Bitstamp-Support is not answering my Emails and Support-tickets, or twitter-post. THANK you",
    time: [10, 12],
  },
  {
    profName: "김둘리",
    contText:
      "if you could fix my stock transaction of 0,9 ETH from bitstamp to liqui (0x6f129353524d4b948cd39377a168ebe5cfd6c9b11717db081af3bcbca2c7f505) I promise to sent you 0,1 ETH if it arrive for helping me. If i interpret it correct you’ve already worked on Block 4892197 and people do get there ETH back. Please help me as well. Because Bitstamp-Support is not answering my Emails and Support-tickets, or twitter-post. THANK you",
    time: [10, 12],
  },
  {
    profName: "김둘리",
    contText:
      "if you could fix my stock transaction of 0,9 ETH from bitstamp to liqui (0x6f129353524d4b948cd39377a168ebe5cfd6c9b11717db081af3bcbca2c7f505) I promise to sent you 0,1 ETH if it arrive for helping me. If i interpret it correct you’ve already worked on Block 4892197 and people do get there ETH back. Please help me as well. Because Bitstamp-Support is not answering my Emails and Support-tickets, or twitter-post. THANK you",
    time: [10, 12],
  },
  {
    profName: "김둘리",
    contText:
      "if you could fix my stock transaction of 0,9 ETH from bitstamp to liqui (0x6f129353524d4b948cd39377a168ebe5cfd6c9b11717db081af3bcbca2c7f505) I promise to sent you 0,1 ETH if it arrive for helping me. If i interpret it correct you’ve already worked on Block 4892197 and people do get there ETH back. Please help me as well. Because Bitstamp-Support is not answering my Emails and Support-tickets, or twitter-post. THANK you",
    time: [10, 12],
  },
];
