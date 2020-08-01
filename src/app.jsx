import React from "react";

import "antd/dist/antd.css";

import styled from "styled-components";

import UserInfoComponent from "./userInfo";
import ResTimeSlider from "./time";
import LibRoomCascader from "./libRoom";
import SeatOptionRadios from "./seatOption";
import OperationButtons from "./operationButton";
import StatusArea from "./statusArea";

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

  .container {
    width: 100%;
  }
`;

// function handleChange( state, action ) {
//   return {
//     ...state,
//     [action.type]: action.value 
//   }
// }

export default function App({ defaultValues }) {
  var values = { ...defaultValues }
  // const [values, setValues] = useReducer(handleChange, defaultValues)
  return (
    <AppBody>
      <UserInfoComponent 
        defaultUsername={values.username}
      />
      <ResTimeSlider 
        defaultValue={values.startEndTime}
      />
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
      <OperationButtons/>
      <StatusArea text="Hello, world." />
    </AppBody>
    )
  }
  