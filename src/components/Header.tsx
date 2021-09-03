import { Layout } from "antd";
import React from "react";
import { EModal } from "../common";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { show } from "../store/modal";
import { selector, logout } from '../store/auth';
import styles from './Header.module.sass';

const { Header } = Layout;

export const CustomHeader = () => {
  const auth = useAppSelector(selector);
  return (
    <Header className={styles.header}>
      {!!auth.user && <HeaderForUser />}
      {!auth.user && <HeaderForGuest />}
    </Header>
  );
};

const HeaderForUser = () => {
  const auth = useAppSelector(selector);
  const dispatch = useAppDispatch();
  return <>
    <h2>
      Bienvenido, {auth.user?.name}
      {' '}
      <small>(<a onClick={() => dispatch(logout())}>cerrar sesión</a>)</small>
    </h2>
    <p>Éstas son las personas que han comprado entrada</p>
  </>
};

const HeaderForGuest = () => {
  const dispatch = useAppDispatch();
  const showModalLogin = () => dispatch(show({ type: EModal.LOGIN }));
  return <>
    <h2>Aún no has iniciado sesión</h2>
    <p>
      Para poder ver todo el contenido, {' '}
      <a onClick={showModalLogin}>inicia sesión</a>.
    </p>
  </>
};
