import gql from 'graphql-tag';

export const updateParticipante = gql`
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

export const deleteParticipante = gql`
  mutation {
    deleteParticipante(_id: "5bdcb6fd1b2d1f1fc5ec3675"), {
      _id,
      nome,
      idade
    }
  }
`;

const queries = {
  updateParticipante,
  deleteParticipante,
};

export default queries;
