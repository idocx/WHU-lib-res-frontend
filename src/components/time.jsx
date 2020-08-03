import React, { useState } from "react";

import { Slider, Tag, Row, Col } from "antd";
import "antd/dist/antd.css";

import styled from "styled-components";

const TimeSlider = styled.div`
  margin-bottom: 5px
`;

export function formatTime(value) {
  const value_60 = String(Math.floor(value / 60)).padStart(2, '0'),
        value__60 = String(value - value_60 * 60).padStart(2, '0');
  return `${value_60}:${value__60}`
}

export default function ResTimeSlider({ value, id, onChange, isBusy }) {
  const minTime = 480,
        maxTime = 1350,
        timeInterval = 30;

  // check in advance
  if (value.startTime >= value.endTime) {
    value = {
      ...value,
      startTime: value.endTime,
      endTime: value.startTime
    }
  }
  value = {
    ...value,
    startTime: minTime < value.startTime ? value.startTime : minTime,
    endTime: maxTime > value.endTime ? value.endTime : maxTime
  }

  const [ value_, setValue ] = useState([ value.startTime, value.endTime ])

  const handleChange = values => {
    setValue(values)
    onChange({ startTime: values[0], endTime: values[1] });
  }  

  const handleAfterChange = values => {
    // when startTime === endTime
    if (values[0] === values[1]) {

      if (values[1] <= maxTime - 30) {
        values[1] += 30;
      } 
      else if (values[0] >= minTime + 30) {
        values[0] -= 30;
      }
      handleChange(values);
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
            id={id} 
            range
            min={minTime}
            max={maxTime}
            disabled={isBusy}
            step={timeInterval}
            onChange={handleChange}
            onAfterChange={handleAfterChange}
            tooltipPlacement="bottom"
            value={value_}
            tipFormatter={formatTime}
          />
        </Col>
        <Col span={5} offset={1}>
          <Tag color={isBusy ? "" : "red"}>{formatTime(value_[0])}</Tag>
          <span style={{ margin: "0 8px 0 0"}}>~</span>
          <Tag color={isBusy ? "" : "geekblue"}>{formatTime(value_[1])}</Tag>
        </Col>
      </Row>
    </TimeSlider>
  )
}