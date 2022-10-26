import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import store from './app/store';
import App from './components/App';

import 'antd/dist/antd.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
