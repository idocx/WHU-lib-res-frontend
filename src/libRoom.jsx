import React from "react";

import { Cascader, Row, Col } from 'antd';

import "antd/dist/antd.css";

export default function LibRoomCascader({ value, id, onChange, libRoomOptions }) {
  return (
    <Row align="middle">
      <Col span={3}>
        <label className="option-name">
          场馆选择
        </label>
      </Col>
      <Col span={15}>
        <Cascader
        id={id}
        expandTrigger="hover"
        placeholder="请选择"
        options={libRoomOptions}
        value={[ value.lib, value.room ]}
        onChange={ (values) => { 
          onChange({ lib: values[0], room: values[1] })
        }}
        style={{ width: "100%" }}
      />
      </Col>
    </Row>
  )
}
