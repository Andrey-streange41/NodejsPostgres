import React from "react";
import { Switch, Route,  Redirect } from "react-router-dom";
import {SHOP_ROUT} from "../utils/constants";
import {useSelector } from "react-redux";
import { authRoutes, publicRoutes } from "../routes";

export default function AppRouter() {
  const isAuth = useSelector( (state)=> state.user.isAuth );
  return (
    <div>
      <Switch>
          {isAuth && authRoutes.map((i) => (<Route exact key={i.path} path={i.path} component={i.Component} />))}
          { publicRoutes.map((i) => (<Route  exact key={i.path} path={i.path} component={i.Component} />))}
          <Redirect to={SHOP_ROUT}/>
      </Switch>
    </div>
  );
}
