import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import './style.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../../store/authReducer";

function SignIn() {
  const dispatch = useDispatch();
  const hasError = useSelector(state => state.auth.error);

  const onFinish = values => {
    dispatch(authSignIn(values));
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="sign">
      {hasError && <p className="sign__error">{hasError}</p>}
      <h3 className="sign__title">Sign in</h3>
      <p>Don't have an account? <Link to='/sign-up'>Register</Link></p>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
  );
}

export default SignIn;
