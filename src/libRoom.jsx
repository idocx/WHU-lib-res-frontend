import React from "react";

import { Cascader } from 'antd';

import "antd/dist/antd.css";

export default function LibRoomCascader({ defaultValue, options, handleChange }) {
  return (
    <Cascader 
      expandTrigger="hover" 
      options={options}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
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