import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import  { Provider } from 'react-redux'

const store = createStore(rootReducer);

// console.log("firebase ", config);
ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));
registerServiceWorker();
