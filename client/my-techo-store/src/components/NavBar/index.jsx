import React from "react";
import {authController,setUser} from '../../app/userSlice'
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink , useHistory} from "react-router-dom";
import { ADMIN_ROUT, LOGIN_ROUT, SHOP_ROUT } from "../../utils/constants";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";

export default function BootstrapNavBar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = () =>{
    dispatch(setUser({}));
    dispatch(authController(false));
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
          <Container>
               <section style={{display:'flex', justifyContent:'space-between', width:'100%',alignItems:'center'}}>
          <section>
            <NavLink
              style={{ color: "white", textDecoration: "none" }}
              to={SHOP_ROUT}
            >
              Купи девайс
            </NavLink>
          </section>
          {user.isAuth ? (
            <section style={{display:'flex',justifyContent:'space-around', width:'25%', alignItems:'center'}}>
              <Button onClick={()=>history.push(ADMIN_ROUT)} >Админ панель</Button>
              <Button onClick={()=>logOut()} >Выйти</Button>
            </section>
          ) : (
            <section  style={{display:'flex',justifyContent:'space-around', width:'25%', alignItems:'center'}}>
              <Button onClick={()=>{history.push(LOGIN_ROUT)}}>Авторизaция</Button>
            </section>
          )}
        </section>
          </Container>
       
      </Navbar>
    </div>
  );
}
