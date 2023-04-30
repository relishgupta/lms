import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import App from './App';

import { UserProvider } from './contexts/emp.context';

const root =document.getElementById('root');
render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App /> 
      </UserProvider>
    </Router>
  </React.StrictMode>,
  root
);
