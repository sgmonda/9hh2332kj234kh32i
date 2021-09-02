import { Layout } from "antd";
import React from "react";
import styles from './Layout.module.sass';
import { Header, Navbar } from ".";

const { Content } = Layout;

interface Props { }

export const MainLayout: React.FC<Props> = ({ children }) => <>
  <Layout className={styles.layout}>
    <Navbar />
    <Layout className={styles.sublayout}>
      <Header />
      <Content className={styles.content}>
        {children}
      </Content>
    </Layout>
  </Layout>
</>;
