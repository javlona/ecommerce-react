import React from 'react'
import { Form, Input, Button, Checkbox } from "antd";
import './style.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authSignUp } from '../../store/authReducer';

function SignUp() {
  const dispatch = useDispatch();

  const onFinish = values => {
    dispatch(authSignUp(values));
    
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };


  return (
    <div className='sign'>
      <h3 className="sign__title">Sign up</h3>
      <p>Already have an account? <Link to='/sign-in'>Sign in</Link></p>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          email: "",
          password: "",
          name: "",
          phone: "",
          address: "",
          role: "user",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignUp