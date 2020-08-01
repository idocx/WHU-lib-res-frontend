import React from "react";

import { Cascader, Row, Col } from 'antd';

import "antd/dist/antd.css";

export default function LibRoomCascader({ defaultLibRoom, options, handleChange }) {
  return (
    <Row align={"middle"}>
      <Col span={3}>
        <label className={"option-name"}>
          场馆选择
        </label>
      </Col>
      <Col span={15}>
        <Cascader 
        expandTrigger={"hover"}
        placeholder={"请选择"} 
        options={options}
        defaultValue={defaultLibRoom}
        onChange={handleChange}
        style={{ width: "100%" }}
      />
      </Col>
    </Row>
  )
}
