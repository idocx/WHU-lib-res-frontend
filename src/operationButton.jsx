import React from "react";

import { Button } from 'antd';

import "antd/dist/antd.css";

import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  display: --webkit-flex;
  margin: 20px 20% 0 15%;
  justify-content: space-between;
`;

function OperationButton (props) {
  return (
    <Button 
      {...props}
      onClick={() => props.onChange(props.value)}
    >
      {props.label}
    </Button>
  )
}

export default function OperationButtons({ id, onChange }) {
  const operations = [
    {
      htmlType: "submit",
      type: "secondary", 
      value: "save",
    },
    {
      htmlType: "submit",
      type: "primary",
      value: "reserve",
    },
    {
      htmlType: "submit",
      type: "secondary",
      value: "change",
    }
  ]
  return (
    <Buttons size={50} id={id}>
      {
        operations.map(operation => (
          <OperationButton
            {...operation} 
            shape="round" 
            onChange={onChange} 
            key={operation.value}
          />
        ))
      }
    </Buttons>
  )
}