import React, { useState } from 'react';
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
import { useRouter } from 'next/dist/client/router';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selector, toggle } from '../store/navigation';

const { Sider } = Layout;

const routes = [
  { icon: <AppstoreFilled />, path: '/', label: 'Home' },
  { icon: <BookOutlined />, path: '/2', label: 'Lessons' },
  { icon: <BarChartOutlined />, path: "/3", label: 'Stats' },
  { icon: <AuditOutlined />, path: "/4", label: 'Certificates' },
  { icon: <WalletOutlined />, path: "/5", label: 'Wallet' },
  { icon: <QuestionCircleOutlined />, path: '/6', label: 'Help' },
];

export const Navbar = () => {
  const isCollapsed = useAppSelector(selector);
  const dispatch = useAppDispatch();
  const toggleNavbar = () => dispatch(toggle());

  const router = useRouter();
  const getRouteHandler = (path: string) => () => router.push(path);

  return (
    <Sider theme="light" collapsed={isCollapsed} collapsedWidth={70}>
      <div className={styles.burger}>
        <MenuOutlined size={100} onClick={toggleNavbar} />
      </div>
      <div className={`logo ${styles.logo}`} >
        <img src={isCollapsed ? '/logo.png' : '/logo-large.png'} />
      </div>
      <Menu defaultSelectedKeys={[router.asPath]} mode="vertical" className={styles.menu}>
        {routes.map(({ icon, path, label }) => (
          <Menu.Item key={path} icon={icon} onClick={getRouteHandler(path)}>{label}</Menu.Item>
        ))}
      </Menu >
    </Sider >
  );
};
