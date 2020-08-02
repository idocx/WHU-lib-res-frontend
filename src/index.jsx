import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";

import Header from "./header";
import App from "./app";

import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
  body {
    height:0;
    background-color:transparent;
    overflow-y: hidden;
  }

  .option-name {
    font-size: 14px;
    color: #000000aa;
    font-weight: 600;
  }

  #root {
    width: 750px;
    margin: auto;
  }
  
  // style of scroll bar
  ::-webkit-scrollbar-track {
    background-color: none;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #e5e5e5;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #46a6ff;
  }
  ::-webkit-scrollbar {
    width: 7px;
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

