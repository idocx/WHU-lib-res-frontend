import React from "react";

import { Button } from 'antd';
import { CloseOutlined, MinusOutlined  } from '@ant-design/icons';

import "antd/dist/antd.css";

import styled from "styled-components";

const AppHeader = styled.div`
  width: 100%;
  height: 30px;
  background-color: #fafafa;
  border: 3px solid #f0f0f0;
  border-radius: 4px 4px 0 0;
  border-style:solid solid none solid;
  display: flex;
  display: -webkit-flex; /* Safari */
  -webkit-app-region: drag;

  div.header-content {
    margin: 3px 5px;
    height: 100%;
  }

  div.closeWindow,
  div.minimizeWindow {
    -webkit-app-region: no-drag;
    display: inline;
  }

  div.title {
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    font-size: 14px;
    font-weight: 400;
  }
`;

export default function Header({ title, type }) {
  return (
    <AppHeader id="app-header">
      {
        type === "web" ? "" : (
          <div className="buttons header-content">
            <div className="closeWindow">
              <Button 
                type="text"
                size="small" 
                style={{ 
                  color: "#ff0000",
                }}
                icon={<CloseOutlined />}
                onClick={ () => { window.ipcRenderer.send("close"); }}
              />
            </div>  
            <div className="minimizeWindow">
              <Button 
                danger
                type="text"
                size="small" 
                style={{ 
                  color: "#1E9600",
                }}
                icon={<MinusOutlined />}
                onClick={ () => { window.ipcRenderer.send("min"); }}
              />
            </div>
          </div>
        )
      }
      <div className="title header-content">
        {title}
      </div>
    </AppHeader>
  );
}