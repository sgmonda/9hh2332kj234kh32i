import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selector as authSelector } from '../store/auth';
import { selector as usersSelector, setListData } from '../store/users';
import { User } from '../common';
import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { List } from '../components';

const IndexPage: React.FC = () => {
  const auth = useAppSelector(authSelector);
  return auth.user ? <UsersList /> : <NotAuthError />;
};

const NotAuthError = () => <p>Inicia sesión para ver este contenido.</p>;

const UsersList = () => {
  const [page, setPage] = useState<number>(0);

  return <>
    <List<User>
      endpoint="/api/users"
      pageSize={10}
      ItemRenderer={ListItem}
    />
  </>;
}

const ListItem: FC<Partial<User>> = (user) => {
  return (
    <div>{user._id || 'Loading...'}</div>
  );
}


// <<<<<<< https://youtu.be/NZKUirTtxcg?t=309

export default IndexPage;
