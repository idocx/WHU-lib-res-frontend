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

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];