import React from "react";

import { Radio, Space, Col, Row } from 'antd';

import "antd/dist/antd.css";

import styled from "styled-components";

const RadioSpace = styled(Space)`
  align-items: baseline;
`;

const CustomRadio = ({ name, options, defaultValue, handleChange }) => {
  return (
    <RadioSpace size={40}>
      <label className={"option-name"}>{name}</label> 
      <Radio.Group
        defaultValue={defaultValue}
        buttonStyle="solid"
        onChange={handleChange}
      >
        {
          options.map(option => {
            return (
            <Radio.Button value={option.value}>{option.label}</Radio.Button>
            )
          })
        }
      </Radio.Group>
    </RadioSpace>
  )
}

export default function SeatOptionRadios({ defaultWindow, defaultPlugger, windowOptions, pluggerOptions, handleChange }) {
  return (
    <Row align={"middle"}>
      <Col span={12}>
        <CustomRadio
          name={"是否靠窗"}
          defaultValue={defaultWindow}
          options={windowOptions}
          handleChage={handleChange}
        />
      </Col>
      <Col span={12}>
        <CustomRadio
          name={"是否有插座"}
          defaultValue={defaultPlugger}
          options={pluggerOptions}
          handleChage={handleChange}
        />
      </Col>
    </Row>
  )
}