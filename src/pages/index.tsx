import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selector as authSelector } from '../store/auth';
import { selector as usersSelector, setListData } from '../store/users';
import { User } from '../common';
import { useEffect } from 'react';
import axios from 'axios';

const IndexPage: React.FC = () => {

  const auth = useAppSelector(authSelector)

  return auth.user ? <UsersList /> : <NotAuthError />;
};

const NotAuthError = () => <p>Inicia sesión para ver este contenido.</p>;

const UsersList = () => {
  const auth = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetch = async () => {
      console.log('FETCHING...');
      let { data } = await axios.get('/api/users', { headers: { token: auth.user?.token } });
      dispatch(setListData({ items: data }));
    }
    fetch();
  }, [])
  const { page, pages, items } = useAppSelector(usersSelector);
  console.log('PAGE', page, 'PAGES', pages, 'ITEMS', items);
  return <>
    <p>Hola</p>
    <ul>
      {items.map(({ name, id }) => (
        <li key={id}>
          {name}
        </li>
      ))}
    </ul>
  </>;
}

export default IndexPage;
