import { FC } from "react";
import { Layout, Menu } from "antd";
import { Header } from "./header";

const { Content, Sider } = Layout;

export const PageLayout: FC = (props) => {
  const { children } = props;

  return (
    <Layout>
      <Header title="Characters" />
      <Layout>
        <Sider className="sidebar">
          <Menu mode="inline" className="side-menu" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Characters</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content className="page-content">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
