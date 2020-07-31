import React, { useState } from "react";

import { Slider, Tag, Row, Col, message } from "antd";
import "antd/dist/antd.css";

import styled from "styled-components";

const TimeSlider = styled.div`
  margin-bottom: 5px
`;

function formatTime(value) {
  const hour = String(Math.floor(value / 60)).padStart(2, '0'),
        minute = String(value - hour * 60).padStart(2, '0');
  return `${hour}:${minute}`
}

export default function ResTimeSlider({ defaultValue }) {
  const name = "time-slider",
        minTime = 480,
        maxTime = 1350,
        timeInterval = 30,
        [value, setValue] = useState(defaultValue);

  const handleChange = values => {
    setValue(values);
  }  

  const handleAfterChange = (values) => {
    if (values[0] === values[1] || values[0] <= minTime || values[1] >= maxTime) {
      message.error("Invalid time range!");
    };
  }
  return (
    <TimeSlider>
      <Row align="middle">
        <Col span={7}>
          <label className={"option-name"}>起止时间：
            <Tag color="red">{formatTime(value[0])}</Tag>
            ~&nbsp;&nbsp;
            <Tag color="geekblue">{formatTime(value[1])}</Tag>
          </label>
        </Col>
        <Col span={17}>
          <Slider
            id={name} 
            range
            min={minTime}
            max={maxTime}
            step={timeInterval}
            onChange={handleChange}
            onAfterChange={handleAfterChange}
            tooltipPlacement="bottom"
            defaultValue={defaultValue}
            tipFormatter={formatTime}
          />
        </Col>
      </Row>
    </TimeSlider>
  )
}