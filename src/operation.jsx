import React from "react";

import { Button } from 'antd';

import "antd/dist/antd.css";

import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  display: --webkit-flex;
  margin: 10px 20% 0 15%;
  justify-content: space-between;
`;

export default function OperationButtons({ id, onChange }) {
  return (
    <Buttons size={50} id={id}>
      <Button 
        type="secondary" 
        htmlType="submit" 
        shape="round"
        value="save"
        onClick={() => {
          onChange("save")
        }}
      >
        保存信息
      </Button>

      <Button 
        type="primary" 
        htmlType="submit" 
        shape="round"
        value="reserve"
        onClick={() => {
          onChange("reserve")
        }}
      >
        预约座位
      </Button>

      <Button 
        type="secondary" 
        htmlType="submit" 
        shape="round"
        value="change"
        onClick={() => {
          onChange("change")
        }}
      >
        改签座位
      </Button>
    </Buttons>
  )
}
