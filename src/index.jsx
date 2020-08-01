import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";

import Header from "./header";
import App from "./app";

function Root({ defaultValues }) {
  return (
    <>
      <Header title={defaultValues.title}/>
      <App defaultValues={defaultValues}/>
    </>
  )
}

const defaultValues = {
  title: "武汉大学图书馆座位预约助手",
  username: "201xxxxxxxx",
  startEndTime: [600, 720],
  room: [0, 12],
  options: [
    {
      value: 0,
      label: "总馆",
      children: [
        {
          value: 11,
          label: "A1"
        },
        {
          value: 12,
          label: "A2"
        }
      ]
    },
    {
      value: 1,
      label: "信图",
      children: [
        {
          value: 21,
          label: "不知道"
        }
      ]
    }
  ],
  windowOptions: [
    {value: 1, "label": "靠窗"},  
    {value: 2, "label": "不靠窗"},
    {value: 0, "label": "不限"}
  ],
  window: 0,
  pluggerOptions: [
    {value: 1, "label": "有插座"},
    {value: 2, "label": "无插座"},
    {value: 0, "label": "不限"}
  ],
  plugger: 0
}

ReactDOM.render(
  <Root defaultValues={defaultValues}/>,
  document.getElementById("root")
  );
  