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

