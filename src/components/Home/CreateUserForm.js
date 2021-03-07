import React from "react";
import CreateUser from "./CreateUser.json";
import { Form, Input, Select, Button, Row, Col } from "antd";

const { Option } = Select;

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const CreateUserForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const getInputField = (item) => {
    switch (item.type) {
      case "email":
        return (
          <Form.Item
            key={item.name}
            name={item.name}
            label={item.label}
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        );
      case "password":
        return (
          <Form.Item key={item.name} name={item.name} label={item.label}>
            <Input.Password />
          </Form.Item>
        );
      case "select":
        return (
          <Form.Item key={item.name} name={item.name} label={item.label}>
            <Select
              placeholder={item.placeholder}
              // onChange={onGenderChange}
              allowClear
            >
              {item.options.map((o) => (
                <Option value={o}>{o}</Option>
              ))}
            </Select>
          </Form.Item>
        );
      default:
        return (
          <Form.Item key={item.name} name={item.name} label={item.label}>
            <Input />
          </Form.Item>
        );
    }
  };

  return (
    <Form layout='vertical' form={form} name='register' onFinish={onFinish}>
      <Row gutter={4} justify='space-between' align='middle'>
        {CreateUser.map((item) => {
          return (
            <Col className='gutter-row' span={12}>
              {getInputField(item)}
            </Col>
          );
        })}
        <Col className='gutter-row' span={24}>
          <Form.Item>
            <Button shape='round' htmlType='submit'>
              Register
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateUserForm;
