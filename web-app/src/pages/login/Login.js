import React from 'react';
import { useState } from 'react';
import firebaseApp from '../../config/firebase';
import { Form, Input, Button, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.scss';

const Login = () => {
  const [state, setState] = useState({ status: null, error: null });

  const onSubmit = (body) => {
    setState({ ...state, status: 'pending' });
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(body.email, body.password)
      .then(() => {
        setState({ ...state, status: 'success' });
      })
      .catch((error) => {
        let errorMessage = 'Hubo un error. Vuelva a intentar más tarde.';
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
          errorMessage = 'El email o contraseña son incorrectos';
        }
        setState({ error: errorMessage, status: 'error' });
      });
  };

  return (
    <section className="login-page">
      <div className="login-image"></div>
      <div className="login-data">
        <Form
          name="normal_login"
          className="login-data__form"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          size="large"
        >
          <h1 className="login-data__form__title">Inicie sesión</h1>
          <Form.Item name="email" rules={[{ required: true, message: 'Ingrese un email' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Ingrese una contraseña' }]}>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Contraseña"
            />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              Olvidé la contraseña
            </a>
          </Form.Item>
          {state.status === 'error' && (
            <Alert message={state.error} type="error" showIcon closable className="login-data__form__alert" />
          )}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-data__form__button"
              loading={state.status === 'pending'}
            >
              Ingresar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
