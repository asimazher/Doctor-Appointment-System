import React from "react";
import "../styles/SignupStyles.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

const Signup = () => {

  const navigate = useNavigate();

  // form handler
  const onFinishHandler = async(values) => {
    try {
      const res = await axios.post("/api/v1/user/signup", values);
      if (res.data.success) {
        message.success("Registered Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
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
