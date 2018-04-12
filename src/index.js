import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//place the app in the "wrapper" div by the id of "root" that is on the index.html page
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
