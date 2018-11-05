import React, { Component } from 'react';
import styled from 'styled-components';

const Teste = styled.a`
  border: 2px solid black;
`;

class App extends Component {
    render(){
        return <div><Teste>{'teste...'}</Teste></div>;
    }
}

export default App;
