import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import  { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk));

// console.log("firebase ", config);
ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));
registerServiceWorker();
