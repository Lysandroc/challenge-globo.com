import gql from 'graphql-tag';

export const GET_ALL_PARTICIPANTES = gql`
  {
    getAllParticipantes {
      idade,nome,_id
    }
  }
`;

export const GET_PARTICIPANTES_VOTACAO = gql`
  {
    getAllParticipantes {
      idade,nome,_id,quantidadeVotosUltimoParedao
    }
  }
`;

export const GET_PARTICIPANTE = gql`
  query($_id: ID!){
    ParticipanteById(_id: $_id) {
      nome, _id, idade, quantidadeVotosUltimoParedao
    }
  }
`;

export const GET_LASTEST_PAREDAO = gql`
  {
    getLastestParedao {
      _id, 
      tempoInicio, 
      tempoFim, 
      participantes {
        _id,
        nome,
        quantidadeVotosUltimoParedao,
      }
    }
  }
`;

const queries = {
  GET_ALL_PARTICIPANTES,
  GET_PARTICIPANTES_VOTACAO,
  GET_PARTICIPANTE,
  GET_LASTEST_PAREDAO,
};

export default queries;
