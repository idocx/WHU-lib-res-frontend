import React from "react";

import { Radio, Space } from 'antd';

import "antd/dist/antd.css";

import styled from "styled-components";

const RadioDiv = styled(Space)`
  display: flex;
  display: -webkit-flex; /* Safari */
  justify-content: center;
`;

const RadioSpace = styled(Space)`
  align-items: baseline
`;

const CustomRadio = ({ name, options, defaultValue, handleChange }) => {
  return (
    <RadioSpace size={"large"}>
      <strong>{name}</strong>
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

export default SeatOptionRadios = ( handleChange ) => {
  return (
    <RadioDiv size={75}>
      <CustomRadio
        name={"是否靠窗"}
        defaultValue={"c"}
        options={[{value: "a", "label": "靠窗"}, {value: "b", "label": "不靠窗"}, {value: "c", "label": "不限"}]}
        handleChage={handleChage}
      />
      <CustomRadio
        name={"是否有插座"}
        defaultValue={"c"}
        options={[{value: "a", "label": "有插座"}, {value: "b", "label": "无插座"}, {value: "c", "label": "不限"}]}
        handleChage={handleChage}
      />
    </RadioDiv>
  )
}