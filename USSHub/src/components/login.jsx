import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Form, Input, Button } from "antd";
import "../styles/login.css"

export default function Login() {
    let navigate = useNavigate();

    let { setLoggedIn, setProfile } = useContext(AuthContext);
  
    let onFinish = (formdata) => {
        setProfile(formdata.username);
        setLoggedIn(true);
        navigate('/'); 
    }

    return (
      <div className="login-page">
        <div className="login-box">
          <div className="illustration-wrapper">
            <img src="usshub.png" alt="Logo"/>
          </div>
          <Form
            name="login-form"
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Điền tên!' }]}
            >
              <Input
                placeholder="Tên đăng nhập"
              />
            </Form.Item>
  
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Điền mật khẩu!' }]}
            >
              <Input.Password 
                placeholder="Mật khẩu"
              />
            </Form.Item>
  
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                ĐĂNG NHẬP
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  };