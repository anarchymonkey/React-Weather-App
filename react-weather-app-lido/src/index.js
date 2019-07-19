import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// basically its rendering the App function and binding it to root in the index.html file
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
