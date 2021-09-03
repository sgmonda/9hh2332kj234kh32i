import React, { FC } from "react";
import { EModal, User } from "../common";
import { TagFilled } from '@ant-design/icons';
import { Skeleton } from "antd";
import { useAppDispatch } from "../store/hooks";
import { show } from "../store/modal";
import styles from './UserListItem.module.sass';

export const UserListItem: FC<Partial<User>> = (user) => {
  const dispatch = useAppDispatch();
  const showModalUser = () => dispatch(show({ type: EModal.USER, user: user._id ? (user as User) : undefined }));

  let ticketColor = '#aaa';
  if ('present' in user) ticketColor = user.present ? '#8CB880' : '#D74459';

  return (
    <div className={styles.row}>
      <div style={{ color: ticketColor }}>
        <TagFilled />
      </div>
      <div>

        {user.firstName && <>
          <div>
            <strong>{user.firstName} {user.lastName}</strong>
          </div>
          <div>{user.present ? 'Ha entrado' : 'No ha entrado'}</div>
        </>}
        {!user.firstName && <>
          <Placeholder isTitle />
          <Placeholder />
        </>}
      </div>
      <div>
        {user._id && <>
          <div>ID</div>
          <div>{user._id}</div>
        </>}
        {!user._id && <>
          <Placeholder isTitle />
          <Placeholder />
        </>}

      </div>
      <div>
        {user._id && <>
          <div className={styles.openLink}>
            <a onClick={showModalUser}>...</a>
          </div>
          <div>Nº de ticket</div>
          <div>{user.ticket}</div>
        </>}
        {!user._id && <>
          <Placeholder isTitle />
          <Placeholder />
        </>}

      </div>
    </div>
  );
}

const Placeholder = ({ isTitle }: { isTitle?: boolean }) => (
  <div style={{ marginBottom: isTitle ? '0.5em' : 0 }}>
    <Skeleton title={{ width: '100%' }} paragraph={false} />
  </div>
);
