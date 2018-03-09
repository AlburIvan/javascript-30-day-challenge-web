import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/intro/Intro';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
