import React, { PureComponent } from 'react';
import { Query, Mutation } from 'react-apollo';
import styled from 'styled-components';
import { GET_PARTICIPANTES_VOTACAO } from '../../graphql/queries';
import { INCREMENT_VOTACAO_PARTICIPANTE } from '../../graphql/mutations';
import ParticipanteDetail from '../participante/ParticipanteDetail';

const Button = styled.button`
  width: 96px;
  -webkit-appearance: none;
  border: 0;
  padding: 10px;
  background: #d2116f;
  margin-left: 10px;
  color: #ffffff;
`;

class Votacao extends PureComponent {
  render() {
    return (
      <Query query={GET_PARTICIPANTES_VOTACAO}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Buscando participantes...</p>;
          }
          if (error) {
            return <p>ERRO. Verificar o log no console do servidor.</p>;
          }
          return data.getAllParticipantes.map((detalhe) => {
            const { _id } = detalhe;
            return (
              <Mutation mutation={INCREMENT_VOTACAO_PARTICIPANTE} key={_id} variables={{ _id }}>
                {(action, { loadingMutation, errorMutation }) => (
                  <div>
                    {loadingMutation}
                    {errorMutation}
                    <ParticipanteDetail key={detalhe._id} detalhe={detalhe} />
                    <Button type="button" onClick={action}>aqui</Button>
                  </div>
                )}
              </Mutation>
            );
          });
        }}
      </Query>
    );
  }
}

export default Votacao;
