import React, { useState, useRef } from "react";

import { Slider, Tag, Row, Col } from "antd";
import "antd/dist/antd.css";

import styled from "styled-components";

import { formatTime } from "../utils";

const TimeSlider = styled.div`
  margin-bottom: 5px;

  .bold-tag {
    font-weight: 500;
  }
`;

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

  var prevValue = useRef(value_)

  const handleChange = values => {
    setValue(values)
    onChange({ startTime: values[0], endTime: values[1] });
  }  

  const handleAfterChange = values => {
    // when startTime === endTime
    if (values[0] === values[1]) {

      if (prevValue.current[1] === values[1] || values[0] === minTime) {
        values[1] += 30;
      } 
      else if (prevValue.current[0] === values[0] || values[1] === maxTime) {
        values[0] -= 30;
      }
      handleChange(values);
      prevValue.current = values
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
          <Tag 
            color={isBusy ? "" : "red"}
            className="bold-tag"
          >
            {formatTime(value_[0])}
          </Tag>
          <span style={{ margin: "0 8px 0 0"}}>~</span>
          <Tag 
            color={isBusy ? "" : "geekblue"}
            className="bold-tag"
          >
            {formatTime(value_[1])}
          </Tag>
        </Col>
      </Row>
    </TimeSlider>
  )
}