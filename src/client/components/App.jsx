import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Participantes from './participante/Participantes';
import Votacao from './votacao/Votacao';
import NotFound from './shared/NotFound';

const Wrapper = styled.div`
  padding: 5em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const App = () => (
  <Wrapper>
    <Title>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Votacao} />
          <Route path="/participantes" component={Participantes} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Title>
  </Wrapper>
);

export default App;
