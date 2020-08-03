import React, { useState, useRef, useEffect } from "react";

import { Form } from "antd";

import "antd/dist/antd.css";

import styled from "styled-components";

import UserInfoComponent from "./components/userInfo";
import ResTimeSlider from "./components/time";
import LibRoomCascader from "./components/lib-room";
import SeatOptionRadios from "./components/option";
import OperationButtons from "./components/operation";
import NoticeArea from "./components/notice";

import { 
  getDefaultValue, 
  getOptions,
  calculateWaitingTime, 
  sendRequest,
  translate,
  getJob
} from "./utils";

const FormItem = Form.Item;

const AppBody = styled.div`
  display: -webkit-flex; /* Safari */
  display: flex;
  height: 570px;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 30px 0px 30px;
  background-color: #fafafa;
  border: 3px solid #f0f0f0;
  border-radius: 0 0 4px 4px;
  border-style:none solid solid solid;
  -webkit-app-region: no-drag;
`;

export default function App() {
  const [ text, setText ] = useState(""),
        [ busy, setBusy ] = useState(-1),
        [ job , setJob  ] = useState(null),
        [     form      ] = Form.useForm();
  
  var timer = useRef(null);

  const defaultValues = getDefaultValue(),
        options       = getOptions();
  
  // busy represents remaining time for waiting
  // busy === -1 enable form items
  // else disable all of them
  const isBusy = Boolean(busy + 1);

  function clearTimer() {
    if (timer) {
      clearTimeout(timer);
    }
  }

  // show message in the notice component
  function writeMessage(message) {
    setText(
      text + (text ? "\n" : "") + message
    );    
  }

  const handleAfterFinish = (message) => {
    writeMessage(message);
    setBusy(-1);
    form.setFieldsValue({ operation: "" });
  }

  function handleFinish(values) {
    if (job) {
      clearTimer()
      setJob(getJob(
        values, true, handleAfterFinish
      ))
      setBusy(0);
    } else {
      setJob(getJob(
        values, false, handleAfterFinish
      ))
      setBusy(
        calculateWaitingTime(values)
      );
    }
  }
  
  useEffect(() => {
    clearTimer();
    if (busy > 0) {
      timer = setTimeout(() => { 
        setBusy((busy) => busy > 0 ? busy - 1 : busy)
      }, 1000)
    } else {
      if (job) {
        job.request();
        setJob(null)
      }
    }
  }, [ busy ]);

  return (
    <div id="app-body">
      <Form
        form={form}
        initialValues={defaultValues}
        onFinish={handleFinish}
      >
        <AppBody id="app">
          <FormItem
            name="userInfo"
          >
            <UserInfoComponent 
              isBusy={isBusy}
            />
          </FormItem>
          <FormItem
            name="startEndTime"
          >
            <ResTimeSlider 
              isBusy={isBusy}
            />
          </FormItem>
          <FormItem
            name="libRoom"
          >
            <LibRoomCascader 
              libRoomOptions={options.libRoomOptions}
              isBusy={isBusy}
            />
          </FormItem>
          <FormItem
            name="seatOptions"
          >
            <SeatOptionRadios 
              windowOptions={options.windowOptions}
              pluggerOptions={options.pluggerOptions}
              isBusy={isBusy}
            />
          </FormItem>
          <FormItem
            name="operation"  
          >
            <OperationButtons 
              busy={busy}
              isBusy={isBusy}
            />
          </FormItem>
          <FormItem>
            <NoticeArea 
              text={text}
            />
          </FormItem>
        </AppBody>
      </Form>
    </div>
  )
}
