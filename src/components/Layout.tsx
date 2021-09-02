import { Breadcrumb, Layout } from "antd";
import React from "react";
import styles from './Layout.module.sass';
import { Navbar } from ".";

const { Header, Content } = Layout;

export const MainLayout = () => <>
  <Layout className={styles.layout}>
    <Navbar />

    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          Bill is a cat.
        </div>
      </Content>
    </Layout>
  </Layout>
</>;
