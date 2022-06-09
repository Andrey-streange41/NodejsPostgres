import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import  store  from './app/store';
import App from './App';



const container = document.getElementById('root');
const root = createRoot(container);
console.log(process.env.REACT_APP_API_URL)
root.render(
  
    <Provider store={store}>
      <App />
    </Provider>
  
);



