import React, { useState } from "react";

import { Slider, Tag, Row, Col } from "antd";
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
    if (values[0] === values[1] || values[0] < minTime || values[1] > maxTime) {
      if (values[1] <= maxTime - 30) {
        setValue([value[0], value[1]+30]);
      } else if (values[0] >= minTime + 30) {
        setValue([value[0]-30, value[1]]);
      }
    };
  }
  return (
    <TimeSlider>
      <Row align="middle">
        <Col span={3}>
          <span className={"option-name"}>
            起止时间
          </span>
        </Col>
        <Col span={15}>
          <Slider
            id={name} 
            range
            min={minTime}
            max={maxTime}
            step={timeInterval}
            onChange={handleChange}
            onAfterChange={handleAfterChange}
            tooltipPlacement="bottom"
            value={value}
            tipFormatter={formatTime}
          />
        </Col>
        <Col span={5} offset={1}>
          <Tag color="red">{formatTime(value[0])}</Tag>
          <span style={{ margin: "0 8px 0 0"}}>~</span>
          <Tag color="geekblue">{formatTime(value[1])}</Tag>
        </Col>
      </Row>
    </TimeSlider>
  )
}