import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../Context/ProvideAuth';

function Login() {

  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/dashboard/home" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    }, { name: "Joao" });
  };

  return (
    <div className="Login">
      <h1>Login page</h1>
      <button onClick={login}>Log in</button>
    </div>
  )
}

export default Login;
