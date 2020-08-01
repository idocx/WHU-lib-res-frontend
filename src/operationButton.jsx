import React from "react";

import { Space, Button } from 'antd';

import "antd/dist/antd.css";

import styled from "styled-components";

const Buttons = styled(Space)`
  display: flex;
  display: --webkit-flex;
  justify-content: center;
  margin-top: 10px;
`;

export default function OperationButtons() {
  return (
    <Buttons size={50}>
      <Button type="secondary" shape="round">保存信息</Button>
      <Button type="primary" shape="round">预约座位</Button>
      <Button type="secondary" shape="round">改签座位</Button>
    </Buttons>
  )
}