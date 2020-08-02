import React, { useEffect, useRef } from "react";

import "antd/dist/antd.css";

import styled from "styled-components";

const NoticeArea = styled.div`
  width: 100%;
  height: 200px;
  min-height: 200px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  overflow-y: scroll;
  user-select: text;
  padding: 5px;
  white-space: pre-wrap;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.1);
    border-radius: 3px;
    background-color: #fefefe;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0ae;
    border-radius: 4px;
    background-color: #1890ff;
  }
  ::-webkit-scrollbar {
    width: 4px;
    background-color: #F5F5F5;
  }
`;

export default function Notice({ text, id }) {
  const maxCharNumber = 10000;
  var noticeRef = useRef(null);

  // limit text length
  const processText = (text) => {
    return text.slice(-maxCharNumber);
  }

  // scroll the area to the correct place
  useEffect(() => { 
    if (noticeRef) {
      noticeRef.scrollTop = noticeRef.scrollHeight;
    }
  }, [text]);

  return (
    <NoticeArea
      id={id}
      ref={(area) => noticeRef = area}
      dangerouslySetInnerHTML={{ __html: processText(text) }}
    />
  )
}