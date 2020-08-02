import React, { useState, useEffect, useRef } from "react";

import "antd/dist/antd.css";

import styled from "styled-components";

const NoticeArea = styled.div`
  width: 100%;
  height: 200px;
  min-height: 200px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  overflow-y: scroll;
  user-select: text;
  padding: 2px 6px;
  white-space: pre-wrap;

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.isActive ? "#e5e5e5" : "none"};
  }
`;

export default function Notice({ text, id }) {
  const maxCharNumber = 10000;
  var noticeRef = useRef(null),
      timeOutRef = useRef(null);
  const [ isActive, setActive ] = useState(true);

  // limit text length
  const processText = (text) => {
    return text.slice(-maxCharNumber);
  }

  const handleScroll = () => {
    if (timeOutRef !== null) {
      clearTimeout(timeOutRef);
    }
    setActive(true);
    timeOutRef = setTimeout(() => {
      setActive(false);
      timeOutRef = null;
    }, 3000);
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
      isActive={isActive}
      onScroll={handleScroll}
      dangerouslySetInnerHTML={{ __html: processText(text) }}
    />
  )
}