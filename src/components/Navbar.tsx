import React from 'react';
import { Menu, Layout } from 'antd';
import {
  AppstoreFilled,
  BarChartOutlined,
  QuestionCircleOutlined,
  AuditOutlined,
  WalletOutlined,
  MenuOutlined,
  BookOutlined,
} from '@ant-design/icons';
import styles from './Navbar.module.sass';

const { Sider } = Layout;

export const Navbar = () => {
  return (
    <Sider theme="light" collapsed collapsedWidth={70} >
      <div className={styles.burger}>
        <MenuOutlined size={100} />
      </div>
      <div className={`logo ${styles.logo}`}>
        <img src="/logo.png" />
      </div>
      <Menu defaultSelectedKeys={['1']} mode="vertical" className={styles.menu}>
        <Menu.Item key="1" icon={<AppstoreFilled />} />
        <Menu.Item key="2" icon={<BookOutlined />} />
        <Menu.Item key="3" icon={<BarChartOutlined />} />
        <Menu.Item key="4" icon={<AuditOutlined />} />
        <Menu.Item key="5" icon={<WalletOutlined />} />
        <Menu.Item key="6" icon={<QuestionCircleOutlined />} />
      </Menu>
    </Sider>
  );
};
