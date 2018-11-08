import React, { PureComponent } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Row, Button } from 'reactstrap';
import { GET_ALL_PARTICIPANTES } from '../graphql/queries';
import { INCREMENT_VOTACAO_PARTICIPANTE } from '../graphql/mutations';
import VotacaoDetail from './VotacaoDetail';

class Votacao extends PureComponent {
  render() {
    return (
      <Row>
        <Query query={GET_ALL_PARTICIPANTES}>
          {({ loading, error, data }) => {
            if (loading) {
              return <p>Buscando participantes...</p>;
            }
            if (error) {
              return <p>ERRO. Verificar o log no console do servidor.</p>;
            }
            return data.getAllParticipantes.map((detalhe, index) => {
              const { _id } = detalhe;
              return (
                <Mutation mutation={INCREMENT_VOTACAO_PARTICIPANTE} key={_id} variables={{ _id }}>
                  {(action, { loadingMutation, errorMutation }) => (
                    <div>
                      {loadingMutation}
                      {errorMutation}
                      <VotacaoDetail key={_id} detail={{ ...detalhe, index }} />
                      {/* <Button onClick={action}>Vote aqui</Button> */}
                    </div>
                  )}
                </Mutation>
              );
            });
          }}
        </Query>
      </Row>
    );
  }
}

export default Votacao;
