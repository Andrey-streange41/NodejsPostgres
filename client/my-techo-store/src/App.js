import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { check } from './api/userAPI';
import AppRouter from './components/AppRouter';
import  BootstrapNavBar from './components/NavBar/index';
import { authController, setUser } from './app/userSlice';
import { Spinner } from 'react-bootstrap';

function App() {
    const user = useSelector(state=>state.user);
    const [loading,setLoading] = useState();
    const dispatch = useDispatch();

    useEffect(()=>{
        check().then( data =>{
         dispatch(authController(true))
         dispatch(setUser(data))
        }).finally(()=>{
          setLoading(false);
        })
    },[])
    

  if(loading){
    <Spinner animation='grow'/>
  }

  return (
      <BrowserRouter>
       < BootstrapNavBar/>
          <AppRouter/>
         
      </BrowserRouter>
  );
}

export default App;
