import React from 'react';
import { Modal } from 'antd';
import { EModal } from '../common';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selector, hide } from '../store/modal';
import { TagFilled, CloseCircleOutlined } from '@ant-design/icons';
import styles from './ModalUser.module.sass';

export const ModalUser = () => {
  const dispatch = useAppDispatch();
  const { activeModal, user } = useAppSelector(selector);
  const isActive = activeModal === EModal.USER;

  let ticketColor = '#aaa';
  if (user && 'present' in user) ticketColor = user?.present ? '#8CB880' : '#D74459';

  const title = (
    <div className={styles.title}>
      <div className={styles.icon} style={{ color: ticketColor }}>
        <TagFilled />
      </div>
      <div className={styles.name}>
        <strong>{user?.firstName} {user?.lastName}</strong>
        <br />
        <small>{user?.present ? 'Ha entrado' : 'No ha entrado'}</small>

      </div>
    </div>
  );

  return <>
    <Modal
      title={title}
      visible={isActive}
      footer={null}
      width={600}
      onCancel={() => dispatch(hide())}
      closeIcon={<CloseCircleOutlined />}
    >
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>
              ID
              <br />
              <span className={styles.gray}>{user?._id}</span>
            </td>
            <td colSpan={2}>
              Nº de ticket
              <br />
              <span className={styles.gray}>{user?.ticket}</span>
            </td>
          </tr>
          <tr>
            <td>
              Fecha de nacimiento
              <br />
              <span className={styles.gray}>{user?.birthdate}</span>
            </td>
            <td>
              Email
              <br />
              <span className={styles.gray}>{user?.email}</span>
            </td>
            <td>
              Teléfono
              <br />
              <span className={styles.gray}>{user?.phone}</span>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              Dirección
              <br />
              <span className={styles.gray}>{user?.address}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </Modal>
  </>;
};
