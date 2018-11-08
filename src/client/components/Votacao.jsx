import React, { PureComponent } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Row, Jumbotron, Button} from 'reactstrap';
import styled from 'styled-components';
import { GET_LASTEST_PAREDAO } from '../graphql/queries';
import { INCREMENT_VOTACAO_PARTICIPANTE } from '../graphql/mutations';
import VotacaoDetail from './VotacaoDetail';

const Title = styled.h4`
  text-align: center;
  vertical-align: middle;
  line-height: 50px; 
`;

const Hr = styled.hr`
  border: dotted;
  border-top: 3px dotted #e9ecef;
  color: #e9ecef;
  overflow: visible;
  height: 2px;
`;

class Votacao extends PureComponent {
  render() {
    return (
      <div>
        <Title> (icon) QUEM DEVE SER ELIMINADO?</Title>
        <Hr />
        <Row className="justify-content-center">
          <Query query={GET_LASTEST_PAREDAO}>
            {({ loading, error, data }) => {
              if (loading) {
                return <p>Buscando participantes...</p>;
              }
              if (error) {
                return <p>Erro ao consultar, verifique a conexão mongodb.</p>;
              }
              return data.getLastestParedao.participantes.map((detalhe, index) => {
                const { _id } = detalhe;
                return (
                  <Mutation mutation={INCREMENT_VOTACAO_PARTICIPANTE} key={_id} variables={{ _id }}>
                    {(action) => {
                      console.log('aqui tem configurar o state para atualizar votacao');
                      return (
                        <VotacaoDetail key={_id} detail={{ ...detalhe, index }} />
                      );
                    }}
                  </Mutation>
                );
              });
            }}
          </Query>
        </Row>
        <Jumbotron fluid>
          <div className="text-center">
            <Button color="primary">Envie seu voto agora</Button>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Votacao;
