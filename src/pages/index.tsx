import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selector } from '../store/auth';
import { User } from '../common';

const IndexPage: React.FC = () => {
  const auth = useAppSelector(selector)
  if (!auth.user) return <NotAuthError />;
  return <UsersList />;
};

const NotAuthError = () => (
  <p>
    Inicia sesión para ver este contenido.
  </p>
);

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  return <>
    <p>Hola</p>
    <ul>
      {users.map(({ name, id }) => (
        <li key={id}>
          {name}
        </li>
      ))}
    </ul>
  </>;
}

export default IndexPage;
