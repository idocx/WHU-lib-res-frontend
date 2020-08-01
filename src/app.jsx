import React from "react";

import { Form } from "antd";

import "antd/dist/antd.css";

import styled from "styled-components";

import UserInfoComponent from "./userInfo";
import ResTimeSlider from "./time";
import LibRoomCascader from "./libRoom";
import SeatOptionRadios from "./seatOption";
import OperationButtons from "./operationButton";
import NoticeArea from "./noticeArea";

const FormItem = Form.Item;

const AppBody = styled.div`
  display: -webkit-flex; /* Safari */
  display: flex;
  height: 570px;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  background-color: #fafafa;
  border: 3px solid #f0f0f0;
  border-radius: 0 0 4px 4px;
  border-style:none solid solid solid;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-app-region: no-drag;
`;

const defaultValues = {
  userInfo: {
    username: "203213243",
    password: ""
  },
  startEndTime: {
    startTime: 600,
    endTime: 720
  },
  libRoom: {
    lib: 0,
    room: 12
  },
  seatOptions: {
    window: 0,
    plugger: 0
  }
}

const options = {  
  libRoomOptions: [
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
  pluggerOptions: [
    {value: 1, "label": "有插座"},
    {value: 2, "label": "无插座"},
    {value: 0, "label": "不限"}
  ]
}

function getDefaultValue() {
  return defaultValues;
}

export default function App() {
  const defaultValues = getDefaultValue();
  const handleFinish = (values) => {
    console.log(values);
  }
  var text = "测试中\naaa\nfdsf\nge\nff\ngfre\nfs\ngrdfg\ngfdg\ngd"
  return (
      <Form
        initialValues={defaultValues}
        onFinish={handleFinish}
      >
        <AppBody>
          <FormItem
            name="userInfo"
          >
            <UserInfoComponent />
          </FormItem>
          <FormItem
            name="startEndTime"
          >
            <ResTimeSlider />
          </FormItem>
          <FormItem
            name="libRoom"
          >
            <LibRoomCascader 
              libRoomOptions={options.libRoomOptions}
            />
          </FormItem>
          <FormItem
            name="seatOptions"
          >
            <SeatOptionRadios 
              windowOptions={options.windowOptions}
              pluggerOptions={options.pluggerOptions}
            />
          </FormItem>
          <FormItem
            name="buttons"  
          >
            <OperationButtons />
          </FormItem>
          <FormItem>
            <NoticeArea text={text}/>
          </FormItem>
        </AppBody>
      </Form>
  )
}
