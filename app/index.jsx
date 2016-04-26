import './main.css';

import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.jsx';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

const app = document.getElementById('app');

persist(alt,storage, 'app');

ReactDom.render(<App />, app);
