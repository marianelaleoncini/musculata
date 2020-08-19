import React from 'react';
import 'antd/dist/antd.css';
import './app.scss';
import { AuthProvider } from './context/auth-context';
import Main from './pages/main/Main';

const App = () => (
  <div className="musculata-container">
    <AuthProvider>
      <Main />
    </AuthProvider>
  </div>
);

export default App;
