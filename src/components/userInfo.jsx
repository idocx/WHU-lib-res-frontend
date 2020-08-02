import React, { useState, useRef } from "react";

import { Button, Input, Form, Drawer, Col, Row } from 'antd';
import "antd/dist/antd.css";

import styled from "styled-components";

const FormItem = Form.Item;

const RightSide = styled.div`
  float: right;
`;

const Description = styled.div`
  font-size: 16px;
  align-items: baseline;
`;

function UserInfoDescription({ username, openEditDrawer }) {
  return (
    <Description size={75}>
      <Row align={"middle"}>
        <Col span={3}>
          <span className={"option-name"}>
            学号
          </span>
        </Col>
        <Col span={3}>
          {username}
        </Col>
        <Col xs={2} offset={3}>
          <Button 
            type="secondary"
            shape="round"
            onClick={openEditDrawer} 
          >
            修改个人信息
          </Button>
        </Col>
      </Row>
    </Description>
  )
}

function EditUserInfoDrawer({ visible, closeEditDrawer, onChange }) {
  var usernameInputRef = useRef(null),
      confirmButtonRef = useRef(null);

  const handleClose = () => {
    closeEditDrawer();
  }

  const handleFinish = values => {
    onChange(values);
    form.resetFields();
    handleClose();
  };

  const handleCancel = () => {
    form.resetFields();
    handleClose();
  }

  const handleVisibleChange = (visible) => {
    if (visible && usernameInputRef) {
      usernameInputRef.focus();
    }
  }

  const handleKeyUp = (e) => {
    if (e.keyCode === 13 && confirmButtonRef) {
      confirmButtonRef.click();
    }
  }

  const [form] = Form.useForm();

  return (
    <Drawer
    title="修改个人信息"
    placement="right"
    closable={false}
    onClose={handleClose}
    visible={visible}
    afterVisibleChange={handleVisibleChange}
    getContainer={document.getElementById("root")}
    width={270}
  >
    <Form
      hideRequiredMark
      onFinish={handleFinish}
      form={form}
      onKeyUp={handleKeyUp}
    > 
      <FormItem 
        name="username" 
        label="学号"
        rules={[{
          required: true,
          message: "学号不能为空"
        }]}
      >
        <Input 
          ref={(input) => usernameInputRef = input} 
          placeholder="请输入学号" 
        />
      </FormItem>
      <FormItem 
        name="password" 
        label="密码"
        rules={[{
          required: true,
          message: "密码不能为空"
        }]}
      >
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <RightSide>
        <Button 
          type="primary" 
          htmlType="submit" 
          shape={"round"}
          ref={(confirm) => confirmButtonRef = confirm}
        >
          确认
        </Button>
        <Button 
          type="secondary" 
          onClick={handleCancel} 
          shape="round"
          style={{ 
            margin: "0 5px 0 15px"
          }}
        >
          取消
        </Button>
      </RightSide>
      </Form>
  </Drawer>
  )
}

export default function UserInfoComponent( { value, id, onChange} ) {
  const [editModeVisible, setEditModeVisible] = useState(false);

  const openEditDrawer = () => {
    setEditModeVisible(true);
  }
  const closeEditDrawer = () => {
    setEditModeVisible(false);
  }

  return (
    <>
      <UserInfoDescription id={id}
        username={value.username}
        openEditDrawer={openEditDrawer}
      />
      <EditUserInfoDrawer
        visible={editModeVisible} 
        closeEditDrawer={closeEditDrawer}
        onChange={onChange}
      />
    </>
  )
}