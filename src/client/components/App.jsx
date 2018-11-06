import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Participantes from './participante/Participantes';
import Votacao from './votacao/Votacao';
import NotFound from './shareds/NotFound';

const Wrapper = styled.a`
  
`;

const App = () => (
  <Wrapper>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Votacao} />
        <Route path="/participantes" component={Participantes} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Wrapper>
);

export default App;
