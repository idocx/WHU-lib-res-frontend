import React, { useState } from "react";

import { Button, Space, Input, Form, Drawer, Divider, Col, Row } from 'antd';
import "antd/dist/antd.css";

import styled from "styled-components";

const FormItem = Form.Item;

const FButton = styled(Button)`
  float: right;
`;

const Description = styled.div`
  font-size: 16px;
  align-items: baseline;
`;

function UserInfoDescription({ username, openEditDrawer }) {
  return (
    <Description size={75}>
      <Row>
        <Col span={6} offset={5}>
          <span>
            <strong>学号：</strong>{username}
          </span>
        </Col>
        <Col xs={2} offset={6}>
          <Button type="primary" onClick={openEditDrawer}>修改信息</Button>
        </Col>
      </Row>
    </Description>
  )
}

function EditUserInfoDrawer({ visible, closeEditDrawer, setUserInfo }) {
  const handleClose = () => {
    closeEditDrawer();
  }

  const handleFinish = values => {
    setUserInfo(values);
    handleClose();
  };

  return (
    <Drawer
    title="修改个人信息"
    placement="right"
    onClose={handleClose}
    visible={visible}
    width={320}
  >
    <Form
      onFinish={handleFinish}
    > 
      <FormItem 
        name="username" 
        label="学号"
        rules={[{required: true}]}
      >
        <Input placeholder="请输入学号" />
      </FormItem>
      <FormItem 
        name="password" 
        label="密码"
        rules={[{required: true}]}
      >
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <FButton type="primary" htmlType="submit">确认</FButton>
    </Form>
  </Drawer>
  )
}

export default function UserInfoComponent({ defaultUsername }) {
  const [editModeVisible, setEditModeVisible] = useState(false),
        [username, setUsername] = useState(defaultUsername);

  const openEditDrawer = () => {
    setEditModeVisible(true);
  }
  const closeEditDrawer = () => {
    setEditModeVisible(false);
  }
  const setUserInfo = ({ username, password }) => {
    setUsername(username);
  }
  return (
    <>
      <UserInfoDescription
        username={username}
        openEditDrawer={openEditDrawer}
      />
      <EditUserInfoDrawer
        visible={editModeVisible} 
        closeEditDrawer={closeEditDrawer}
        setUserInfo={setUserInfo}
      />
      <Divider />
    </>
  )
}