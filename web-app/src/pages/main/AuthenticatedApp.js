import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Users from '../users/Users';
import SiderMenu from '../../components/layout/sider/SiderMenu';

const { Content } = Layout;

const AuthenticatedApp = () => (
  <Router>
    <Layout style={{ minHeight: '100vh', minWidth: '100vw' }}>
      <SiderMenu></SiderMenu>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <AppRoutes />
        </Content>
      </Layout>
    </Layout>
  </Router>
);

const AppRoutes = () => (
  <Switch>
    <Route path="/users" component={Users} />
  </Switch>
);

export default AuthenticatedApp;
