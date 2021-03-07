import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const SendMessage = () => {
  const [loading, setloading] = useState(false);
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Form name='nest-messages' onFinish={onFinish}>
        <Form.Item name={["user", "introduction"]}>
          <Input.TextArea placeholder='Message' />
        </Form.Item>
        <Form.Item>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button
            onClick={() => setloading(!loading)}
            loading={loading}
            type='primary'
            htmlType='submit'
            bordered
            shape='round'
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SendMessage;
