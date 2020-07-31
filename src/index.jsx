import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Radio, Space, Divider } from 'antd';

import "antd/dist/antd.css";

import styled from "styled-components";

import UserInfoComponent from "./userInfo";
import ResTimeSlider from "./time";
import LibRoomCascader from "./libRoom";

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

function App({ defaultValues }) {
  var values = {...defaultValues};
  return (
    <AppDiv>
      <UserInfoComponent defaultUsername={values.username}/>
      <ResTimeSlider defaultStart={values.startTime} defaultEnd={values.endTime}/>
    </AppDiv>
  )
}

const defaultValues = {
  username: "2017301040039",
  startTime: 600,
  endTime: 1320
}

ReactDOM.render(
  <App defaultValues={defaultValues}/>,
  document.getElementById("root")
  );
  