import React from "react";

import { Input } from "antd";

import "antd/dist/antd.css";

const { TextArea } = Input;

export default function StatusArea( { text } ) {
  return (
    <TextArea 
      readonly
      autoSize={{
        minRows: 10,
        maxRows: 10
      }}
      value={text}
    />
  )
}