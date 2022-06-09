import React, { useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { LOGIN_ROUT, REGISTRATION_ROUT, SHOP_ROUT } from "../utils/constants";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { login, registration } from "../api/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { authController, setUser } from "../app/userSlice";

export default function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUT;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = async () => {
   
    try {
      let data = null;
      if (isLogin) { 
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      } 
      dispatch(setUser(data));
      dispatch(authController(true));
      
      history.push(SHOP_ROUT);
    } catch (error) {
        alert(error.responce.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card className="p-5" style={{ width: 600 }}>
        <h2 style={{ textAlign: "center" }}>
          {isLogin ? "Авторизация" : "Регистрация"}
        </h2>
        <Form style={{ display: "flex", flexDirection: "column" }}>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="mt-2"
            placeholder="Введите ваш email..."
          />
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="mt-3"
            placeholder="Введите ваш password..."
            type={"password"}
          />

          {isLogin ? (
            <div>
              Нету аккаунта ?
              <Link to={REGISTRATION_ROUT}>Зарегистрируйся!</Link>
            </div>
          ) : (
            <div>
              Есть аккаунт ?<Link to={LOGIN_ROUT}>Войдите!</Link>
            </div>
          )}
          <Button variant={"outline-success"} onClick={handleClick}>
            {isLogin ? "Войти" : "Регистрация"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
