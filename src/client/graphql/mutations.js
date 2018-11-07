import gql from 'graphql-tag';

export const UPDATE_PARTICIPANTE = gql`
  mutation {
    updateParticipante(_id: "5bdcb6fd1b2d1f1fc5ec3675", input: {
      idade: 24,
      nome: "Isaac Carioca"
    }), {
      _id,
      nome,
      idade
    }
  }
`;

export const DELETE_PARTICIPANTE = gql`
  mutation {
    deleteParticipante(_id: "5bdcb6fd1b2d1f1fc5ec3675"), {
      _id,
      nome,
      idade
    }
  }
`;

export const INCREMENT_VOTACAO_PARTICIPANTE = gql`
  mutation($_id: ID!) {
    incrementVotosParedaoParticipante(_id: $_id), {
      _id,
      nome,
      idade,
      quantidadeVotosUltimoParedao
    }
  }
`;

const queries = {
  UPDATE_PARTICIPANTE,
  DELETE_PARTICIPANTE,
  INCREMENT_VOTACAO_PARTICIPANTE,
};

export default queries;
