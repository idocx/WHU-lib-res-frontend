import React from "react";

import { Input } from "antd";

import "antd/dist/antd.css";

const { TextArea } = Input;

export default function NoticeArea( { text, id } ) {
  return (
    <TextArea
      readOnly
      id={id}
      value={text}
      rows={8}
      autoSize={{
        minRows: 8,
        maxRows: 8
      }}
    />
  )
}