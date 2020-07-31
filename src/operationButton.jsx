import React from "react";

import { Space, Button } from 'antd';

import "antd/dist/antd.css";

import styled from "styled-components";

const Buttons = styled(Space)`
  display: flex;
  display: --webkit-flex;
  justify-content: center;
`;

export default function OperationButtons() {
  return (
    <Buttons size={150}>
      <Button type="secondary">保存信息</Button>
      <Button type="primary">预约座位</Button>
      <Button type="secondary">改签座位</Button>
    </Buttons>
  )
}