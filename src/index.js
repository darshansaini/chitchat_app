import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
import { UserContextProvider } from './context/UserContext'
import { Provider } from 'react-redux';
import { store } from './app/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <DarkModeContextProvider>
    <Provider store={store}>
      <App />
  </Provider>
    </DarkModeContextProvider>
  </UserContextProvider>
);


