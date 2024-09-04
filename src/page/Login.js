import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (event) => {
    event.preventDefault();
    // Form 안의 Button type submit이 새로고침 하지 않도록 막아주는 함수이벤트
    console.log("login user function issue");
    dispatch(authenticateAction.login(id, password));
    navigate("/");
  };
  return (
    <Container className="login_container">
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter ID"
            onChange={(event) => setId(event.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your ID with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
        {/* Form 안에 있는 Button의 type이 submit인 경우 onClick이 아닌 onSubmit으로 해야함*/}
      </Form>
    </Container>
  );
};

export default Login;
