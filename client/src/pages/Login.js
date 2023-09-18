import React from "react";
import "../styles/SignupStyles.css";
import { Form, Input } from "antd";
import { Link } from "react-router-dom"

const Login = () => {
  // form handler
  const onFinishHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler}>
          <h1>Login</h1>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/signup" className="m-2">
            Didn't have an account
          </Link>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>
    </>
  );
};

export default Login;
