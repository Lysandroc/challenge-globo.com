import React, { Component } from 'react';
import styled from 'styled-components';

const Teste = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  color-background: black;
`;

class App extends Component {
    
    render(){
        return <div><Teste>{'teaste...'}</Teste></div>;
    }
}

export default App;
