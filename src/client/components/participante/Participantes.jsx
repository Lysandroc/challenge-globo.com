import React from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_PARTICIPANTES } from '../../graphql/queries';
import ParticipanteDetail from './ParticipanteDetail';

const Participantes = () => (
  <Query
    query={GET_ALL_PARTICIPANTES}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return <p>Buscando participantes...</p>;
      }
      if (error) {
        return <p>Houve um problema, infelizmente (verifique o log no console do servidor) :(</p>;
      }
      return data.getAllParticipantes.map(
        detalhe => <ParticipanteDetail key={detalhe._id} detalhe={detalhe} />
      );
    }}
  </Query>
);

export default Participantes;
