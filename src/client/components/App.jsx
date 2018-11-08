import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Votacao from './Votacao';
import NotFound from './NotFound';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Votacao} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
