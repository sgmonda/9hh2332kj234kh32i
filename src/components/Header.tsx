import { Layout } from "antd";
import React from "react";
import styles from './Header.module.sass';

const { Header } = Layout;

export const CustomHeader = () => {
  return (
    <Header className={styles.header}>
      <h2>Bienvenido</h2>
      <p>Éstas son las personas que han comprado entrada</p>
    </Header >
  );
};
