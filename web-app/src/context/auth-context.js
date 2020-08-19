import React from 'react';
import firebaseApp from '../config/firebase';
import { useContext, createContext, useState, useEffect } from 'react';
import { Spin } from 'antd';
import { parseJwt } from '../utils/functions';
import { TOKEN_KEY } from '../utils/constants';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

function AuthProvider({ children }) {
  const [state, setState] = useState({
    status: 'pending',
    error: null,
    user: null,
  });

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (!user) {
        //logout
        setState({ status: 'success', error: null, user: null });
        window.localStorage.removeItem(TOKEN_KEY);
        return;
      }
      user.getIdToken().then((token) => {
        window.localStorage.setItem(TOKEN_KEY, token);
        const { role } = parseJwt(token);
        setState({ status: 'success', error: null, user: { email: user.email, name: user.displayName, role } });
      })
    });
  }, []);

  return (
    <AuthContext.Provider value={state}>
      {state.status === 'pending' ? (
        <Spin size="large" />
      ) : state.status === 'error' ? (
        <div>
          Oh no
          <div>
            <pre>{state.error.message}</pre>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const state = useContext(AuthContext);
  const isPending = state.status === 'pending';
  const isError = state.status === 'error';
  const isSuccess = state.status === 'success';
  const isAuthenticated = state.user && isSuccess;
  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
}

export { AuthProvider, useAuth };
