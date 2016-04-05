import './main.css';

import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.jsx';

const app = document.getElementById('app');

ReactDom.render(<App />, app);