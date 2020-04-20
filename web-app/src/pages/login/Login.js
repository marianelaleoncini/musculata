import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.scss';

const Login = () => {
  const onSubmit = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <section className="login-page">
      <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onSubmit}>
        <h1>Inicie sesión</h1>
        <Form.Item name="email" rules={[{ required: true, message: 'Ingrese un email' }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Ingrese una contraseña' }]}>
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Contraseña" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Olvidé la contraseña
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Login;
