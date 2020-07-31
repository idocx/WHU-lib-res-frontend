import React, { useState } from "react";

import { Slider, Tag, Row, Col } from "antd";
import "antd/dist/antd.css";

import styled from "styled-components";

const TimeSlider = styled.div`
  margin: 0 25px;
  margin-top: 5px;
`;

const TimeLabel = styled.label`
  font-size: 16px;
  text-align: center;
`;

function formatTime(value) {
  const hour = String(Math.floor(value / 60)).padStart(2, '0'),
        minute = String(value - hour * 60).padStart(2, '0');
  return `${hour}:${minute}`
}

export default function ResTimeSlider({ defaultStart, defaultEnd }) {
  const name = "time-slider",
        minTime = 480,
        maxTime = 1350,
        timeInterval = 30,
        [startEndTime, setTime] = useState([defaultStart, defaultEnd]),
        [warning, setWarning] = useState("");

  const handleChange = (value) => {
    setTime(value)

    if (value[0] === value[1] || value[0] <= minTime || value[1] >= maxTime) {
      setWarning(" (Invalid time range!)")
    } else {
      setWarning("")
    }
  }
  return (
    <TimeSlider>
      <Row align="middle">
        <Col span={7}>
          <TimeLabel htmlFor={name}>起止时间：
            <strong>
              <Tag color="red">{formatTime(startEndTime[0])}</Tag>
              ~&nbsp;&nbsp;
              <Tag color="geekblue">{formatTime(startEndTime[1])}</Tag>
            </strong>
            {warning}
          </TimeLabel>
        </Col>
        <Col span={17}>
          <Slider
            id={name}
            range
            min={minTime}
            max={maxTime}
            step={timeInterval}
            onChange={handleChange}
            tooltipPlacement="bottom"
            defaultValue={[defaultStart, defaultEnd]}
            tipFormatter={formatTime}
          />
        </Col>
      </Row>

    </TimeSlider>
  )
}