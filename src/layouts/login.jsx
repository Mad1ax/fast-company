import React, { useState } from 'react';
import LoginForm from '../components/ui/loginForm';
import { useParams } from 'react-router-dom';
import RegisterForm from '../components/ui/registerForm';

const Login = () => {
  const params = useParams();
  const { type } = params;

  const [formType, seetFormType] = useState(
    type === 'register' ? type : 'login'
  );

  const toggleFormType = () =>
    seetFormType((prevState) =>
      prevState === 'register' ? 'login' : 'register'
    );

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 shadow p-4">
            {formType === 'register' ? (
              <>
                <h3 className="mb-4">Register</h3>
                <RegisterForm />
                <p>Already have account?</p>
                <a role="button" onClick={toggleFormType}>
                  Sing in
                </a>
              </>
            ) : (
              <>
                <h3 className="mb-4">Login</h3>
                <LoginForm /> <p>Dont have account?</p>
                <a role="button" onClick={toggleFormType}>
                  Sing up
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
