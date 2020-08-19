import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, PieChartOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState } from 'react';
import firebaseApp from '../../../config/firebase';

const { Sider } = Layout;

const logout = () => {
  firebaseApp.auth().signOut();
};

const SiderMenu = (props) => {
  const { location } = props;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible breakpoint="lg" collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
      <div className="logo" />
      <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline">
        <Menu.Item key="/" icon={<PieChartOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="/users" icon={<UserOutlined />}>
          <Link to="/users">Usuarios</Link>
        </Menu.Item>
        <Menu.Item key="/logout" icon={<LogoutOutlined />} onClick={() => logout()}>
          Cerrar Sesión
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(SiderMenu);
