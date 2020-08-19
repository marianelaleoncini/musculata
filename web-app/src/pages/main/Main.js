import React from 'react';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { useAuth } from '../../context/auth-context';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

function Main() {
  const { user } = useAuth();

  return (
    <React.Suspense fallback={<Spin size="large" />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}

export default Main;
