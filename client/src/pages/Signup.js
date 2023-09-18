import React from "react";
import "../styles/SignupStyles.css";
import { Form, Input } from "antd";
import { Link } from "react-router-dom"

const Signup = () => {
  // form handler
  const onFinishHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler}>
          <h1>Sign up</h1>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already have an account
          </Link>
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
        </Form>
      </div>
    </>
  );
};

export default Signup;
