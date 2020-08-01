import React from "react";

import { Radio, Space, Col, Row } from 'antd';

import "antd/dist/antd.css";

import styled from "styled-components";

const RadioSpace = styled(Space)`
  align-items: baseline;
`;

const CustomRadio = ({ name, options, value, onChange }) => {
  return (
    <RadioSpace size={30}>
      <label className="option-name">{name}</label> 
      <Radio.Group
        value={value}
        buttonStyle="solid"
        onChange={(e) => {
          onChange(e.target.value)
        }}
      >
        {
          options.map(option => {
            return (
            <Radio.Button 
              value={option.value}
              key={option.value}
            >
              {option.label}
            </Radio.Button>
            )
          })
        }
      </Radio.Group>
    </RadioSpace>
  )
}

export default function SeatOptionRadios({ value, id, onChange, windowOptions, pluggerOptions }) {
  return (
    <Row align="middle" id={id}>
      <Col span={12}>
        <CustomRadio
          name="是否靠窗"
          value={value.window}
          options={windowOptions}
          onChange={(windowValue) => {
            onChange({...value, window: windowValue})
          }}
        />
      </Col>
      <Col span={12}>
        <CustomRadio
          name="是否有插座"
          value={value.plugger}
          options={pluggerOptions}
          onChange={(pluggerValue) => {
            onChange({...value, plugger: pluggerValue})
          }}
        />
      </Col>
    </Row>
  )
}