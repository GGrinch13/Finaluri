import React, { useState } from "react";
import { Layout, Table, Avatar, Button } from "antd";
import useFetchUsers from "../useFetchUsers";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import "./style/darkmode.css"; // Import the dark mode CSS

const { Header, Content } = Layout;

const Manage_Users = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { data, loading, error } = useFetchUsers(1);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => <Avatar src={avatar} />,
    },
  ];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Update the dark mode styles
  const darkModeStyles = {
    backgroundColor: darkMode ? "#1a1a1a" : "#f0f2f5", // Darker background color
    color: darkMode ? "#ffffff" : "#000000",
  };

  return (
    <Layout
      className={darkMode ? "dark-mode" : ""}
      style={{ minHeight: "100vh", ...darkModeStyles }}
    >
      <Header
        style={{
          backgroundColor: darkMode ? "#262626" : "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="/">Home</a>
        <Button
          type="text"
          onClick={toggleTheme}
          style={{ color: darkMode ? "#ffffff" : "#000000" }}
        >
          {darkMode ? (
            <BulbFilled style={{ color: "yellow" }} />
          ) : (
            <BulbOutlined />
          )}
        </Button>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{ marginRight: 16, color: darkMode ? "#ffffff" : "#000000" }}
          >
            John Doe
          </div>
          <Avatar size="large" src="/149071.png" />
        </div>
      </Header>

      <Content
        style={{
          margin: "24px 16px 0",
          overflow: "initial",
          ...darkModeStyles,
        }}
      >
        <div
          style={{
            padding: 24,
            textAlign: "center",
            background: darkMode ? "#1a1a1a" : "#fff",
          }}
        >
          {loading && <p>Loading...</p>}
          {error && <p>Error loading data!</p>}
          {!loading && !error && (
            <Table
              columns={columns}
              dataSource={data}
              className={darkMode ? "dark-mode" : ""}
            />
          )}
        </div>
      </Content>
    </Layout>
  );
};

export default Manage_Users;
