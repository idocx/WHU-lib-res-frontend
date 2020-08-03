import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";

import Header from "./header";
import App from "./app";

import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
  body {
    height:0;
    background-color: transparent;
    overflow-y: hidden;
  }

  #root {
    max-width: 750px;
    margin: 0 auto;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .option-name {
    font-size: 14px;
    color: #000000aa;
    font-weight: 600;
  }

  // style of scroll bar
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #46a6ff;
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: #096dd9;
  }
`;

const title = "武汉大学图书馆座位预约助手";

function Root() {
  return (
    <>
      <Style />
      <Header title={title}/>
      <App/>
    </>
  )
}

ReactDOM.render(
  <Root/>,
  document.getElementById("root")
);

