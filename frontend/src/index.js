// These must be the first lines in src/index.jsx
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(React.createElement(App, null), document.getElementById('root') || document.createElement('div'));

