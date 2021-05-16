import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import actions from '../../redux/actions/account';

const LoginWrapper = styled.div`
  background-image: url("urban-farmer-transporting-freshly-harvested-pumpkins-in-wheelbarrow-907717424-5c12a55346e0fb000121c123.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormWrapper = styled.div`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 30px 30px;
`;

function Login(props) {
  let history = useHistory();

  const onFinish = (value) => {
    props.onLogin(value, redirect);
  };

  const redirect = () => {
    history.push("/");
  };

  return (
    <LoginWrapper>
      <FormWrapper>
        <h1>Login</h1>
        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="pass"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </LoginWrapper>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (data, callback) => {
        dispatch(actions.login(data,callback))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
