import React, {useReducer} from "react";
import ReactDOM from "react-dom";

import { Space, Button, Form } from 'antd';

import "antd/dist/antd.css";

import styled from "styled-components";

import UserInfoComponent from "./userInfo";
import ResTimeSlider from "./time";
import LibRoomCascader from "./libRoom";
import SeatOptionRadios from "./seatOption"
import OperationButtons from "./operationButton"

const AppDiv = styled(Space)`
  width: 100%;
`;

function handleChange( state, action ) {
  return {
    ...state,
    [action.type]: action.value 
  }
}

function App({ defaultValues }) {
  const [values, setValues] = useReducer(handleChange, defaultValues)
  const [form] = Form.useForm();
  const handleFinsh = values => {
    console.log(values);
  }
  return (
    <AppDiv direction={"vertical"} size={40}>
      <UserInfoComponent 
        defaultUsername={values.username}
      />
      <Form
        form={form}
        onFinish={handleFinsh}
      >
        <Form.Item>
          <ResTimeSlider 
            defaultValue={values.startEndTime}
          />
          <Button type="primary" htmlType="submit">确认</Button>
        </Form.Item>
      </Form>

      <LibRoomCascader 
        defaultLibRoom={values.room} 
        options={values.options}
      />
      <SeatOptionRadios 
        handleChange={()=>{}} 
        defaultWindow={values.window}
        defaultPlugger={values.plugger}
        windowOptions={values.windowOptions}
        pluggerOptions={values.pluggerOptions}
      />
      <OperationButtons />
    </AppDiv>
  )
}

const defaultValues = {
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
  <App defaultValues={defaultValues}/>,
  document.getElementById("root")
  );
  