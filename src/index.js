import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global } from '@emotion/react';//defined app wide css variables/ props

ReactDOM.render(
  <React.StrictMode>
    <Global styles={{':root':{
      '--nav-height':'70px'
    }}}/>
    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);