import React from "react";
import logo from "../assets/logo.gif";
import user_image from "../assets/profile_img.png";
import { Avatar, Image, Button, Row, Col } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Row gutter={16} justify='space-between' align='middle'>
        <Col className='gutter-row' span={6}>
          <img style={{ width: "300px" }} src={logo} alt='Website logo' />
        </Col>
        <Col className='gutter-row'>
          <Row gutter={16} justify='space-between' align='middle'>
            <Col>
              <h3>John Doe</h3>
              <p>Adminstrator</p>
            </Col>
            <Col>
              <Avatar size={90} src={<Image src={user_image} />} />
            </Col>

            <Col>
              <Button shape='round' icon={<LogoutOutlined />}>
                Logout
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
