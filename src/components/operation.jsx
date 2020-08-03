import React from "react";

import { Button, Row, Col } from "antd";

import { LoadingOutlined } from "@ant-design/icons"

import "antd/dist/antd.css";

import styled from "styled-components";

import { formatTime } from "./time";

const Buttons = styled(Row)`
  margin: 0 18%;

  .col {
    display: flex;
    justify-content: center;
  }
`;

const OperationButton = ({ value, targetValue, busy, text, onChange, type="secondary" }) => {
  const hasTarget = Boolean(targetValue),
        isTarget = value === targetValue,  // is the button corresponding to current operation
        isWaiting = isTarget & (busy > 0);  // is on waiting

  return (
    <Button 
      icon={isTarget ? <LoadingOutlined /> : ""}
      // disabled={hasTarget & !isWaiting}
      type={type}
      htmlType="submit" 
      shape="round"
      value={isWaiting ? "cancel" : value}
      onClick={() => {
        // when targetValue is empty, it mean the pipeline is free
        if (!targetValue) onChange(value)
      }}
    >
       {isWaiting ? `取消操作(${formatTime(busy)})` : text}
    </Button>
  )
};

export default function OperationButtons({ value="", id, onChange, busy }) {
  return (
    <Buttons align="middle" id={id}>
      <Col span={10} className="col">
        <OperationButton 
          value="check"
          targetValue={value}
          busy={busy}
          text="查看座位空闲时间"
          onChange={onChange}
          type="secondary"
        />
      </Col>

      <Col span={10} offset={4} className="col">
        <OperationButton 
          value="reserve"
          targetValue={value}
          busy={busy}
          text="预约/改签座位"
          onChange={onChange}
          type="primary"
        />
      </Col>

    </Buttons>
  )
}
