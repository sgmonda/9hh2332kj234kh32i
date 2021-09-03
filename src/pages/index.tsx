import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selector as authSelector } from '../store/auth';
import { selector as usersSelector, setListData } from '../store/users';
import { User } from '../common';
import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { List, UserListItem } from '../components';

const IndexPage: React.FC = () => {
  const auth = useAppSelector(authSelector);
  return auth.user ? <UsersList /> : <NotAuthError />;
};

const NotAuthError = () => <p>Inicia sesión para ver este contenido.</p>;

const UsersList = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(usersSelector);

  const onChange = (page: number, items: User[]) => {
    console.log('items change', page, items);
    dispatch(setListData({ items }));
  };

  console.log('INITIAL', items.length);

  return <>
    <List<User>
      endpoint="/api/users"
      pageSize={10}
      ItemRenderer={UserListItem}
      initialItems={items}
      onChange={onChange}
    />
  </>;
}




// <<<<<<< https://youtu.be/NZKUirTtxcg?t=309

export default IndexPage;
