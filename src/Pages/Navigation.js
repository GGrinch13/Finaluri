import React from "react";
import { Layout, Menu, Typography, Card, Row, Col } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

const Navigation = () => {
  const handleMenuClick = (e) => {
    if (e.key === "2") {
      window.location.replace("/manage-users");
    }
    if (e.key === "3") {
      window.location.replace("/about");
    }
  };

  return (
    <Layout className="layout">
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          onClick={handleMenuClick}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Manage Users</Menu.Item>
          <Menu.Item key="3">About Us</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "50px", marginTop: 64 }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Feature 1" bordered={false}>
                Description of Feature 1.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Feature 2" bordered={false}>
                Description of Feature 2.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Feature 3" bordered={false}>
                Description of Feature 3.
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{ background: "#fff", padding: 24, minHeight: 422 }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Feature 4" bordered={false}>
                Description of Feature 4.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Feature 5" bordered={false}>
                Description of Feature 5.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Feature 6" bordered={false}>
                Description of Feature 6.
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Navigation;
