import React from 'react';
import { useEffect } from 'react';
import { get } from '../../utils/fetch';

const Users = () => {
  useEffect(() => {
    get('users').then((users) => {
      console.log(users);
    });
  }, []);
  return <div>users</div>;
};
export default Users;
