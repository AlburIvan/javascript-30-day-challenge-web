import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Intro from './pages/intro/Intro';
import App from './pages/app/App';
import registerServiceWorker from './registerServiceWorker';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route exact path="/app" component={App} />
    </Switch>
  </BrowserRouter>
);


ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
