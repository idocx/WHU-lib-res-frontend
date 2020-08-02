import React from "react";

import { Input } from "antd";

import "antd/dist/antd.css";

const { TextArea } = Input;

const maxLineNumber = 10,
      maxCharNumber = 1,
      lineLimit = new RegExp("([^\\n]*\\n){0," + maxLineNumber + "}\\n?$", "mgs"),
      charLimit = new RegExp(".{0," + maxCharNumber + "}$", "mgs");

export function limitLength(text) {
  return text.match(lineLimit)[0].match(charLimit)[0];
}

export default function NoticeArea({ text, id }) {
  return (
    <TextArea
      readOnly
      id={id}
      value={text}
      autoSize={{
        minRows: 8,
        maxRows: 8
      }}
    />
  )
}