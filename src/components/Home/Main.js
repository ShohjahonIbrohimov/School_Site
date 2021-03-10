import React, { useState } from "react";
import { Button, Space, Tooltip } from "antd";
import SupportRequests from "./SupportRequests";
import SendMessage from "./SendMessage";
import CreateUserForm from "./CreateUserForm";
import GModal from "../Reusable/GModal";

const Main = () => {
  const [open, setopen] = useState(false);

  return (
    <div>
      <Space>
        <Tooltip placement='topLeft' title='Create user'>
          <Button shape='round' onClick={() => setopen(true)}>
            Create
          </Button>
        </Tooltip>
        <Tooltip placement='topLeft' title=' Send notification'>
          <Button shape='round'>Write</Button>
        </Tooltip>
      </Space>
      <SupportRequests />
      <SendMessage />
      <GModal visible={open} setVisible={setopen}>
        <CreateUserForm />
      </GModal>
    </div>
  );
};

export default Main;
