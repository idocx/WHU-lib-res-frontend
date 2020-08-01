import React, {useReducer} from "react";

import { Space, Button } from 'antd';
import { CloseOutlined  } from '@ant-design/icons';

import "antd/dist/antd.css";

import styled from "styled-components";

const AppHeader = styled.div`
  -webkit-app-region: drag;
  width: 100%;
  height: 40px;
  background-color: #fafafa;
  border: 3px solid #f0f0f0;
  border-radius: 4px 4px 0 0;
  border-style:solid solid none solid;
  display: flex;

  div.header-content {
    margin: 1px 5px;
  }

  div.title {
    margin: auto;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    color: #111;
    font-size: 15px;
  }
`;

export default function Header({ title }) {
  return (
    <AppHeader>
      <div className="closeWindow header-content">
        <CloseOutlined />
      </div>
      <div className="title header-content">
        {title}
      </div>
    </AppHeader>
  );
}