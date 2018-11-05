import gql from 'graphql-tag';

export const getAllParticipantes = gql`
  {
    getAllParticipantes {
      idade,nome, _id
    }
  }
`;

export const getParticipanteById = gql`
  {
    getParticipanteById(_id: "5bdcb6fd1b2d1f1fc5ec3675") {
      idade,nome,_id
    }
  }
`;

export const getLastestParedao = gql`
  {
    getLastestParedao {
      _id, 
      tempoInicio, 
      tempoFim, 
      participantes {
        idade
      }
    }
  }
`;

const queries = {
  getAllParticipantes,
  getParticipanteById,
  getLastestParedao,
};

export default queries;
