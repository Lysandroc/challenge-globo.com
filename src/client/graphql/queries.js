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
  {
    getParticipanteById(_id: "5bdcb6fd1b2d1f1fc5ec3675") {
      idade,nome,_id
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
        nome,
        _id
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
