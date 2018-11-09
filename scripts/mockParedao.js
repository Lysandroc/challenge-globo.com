import { request } from 'graphql-request';
import moment from 'moment';

const insertParticipanteEverton = `
  mutation  {
    createParticipante(input: {
      nome: "Everton",
      idade: 20
    })
    {
      nome,
      idade,
      _id
    }
  }
`;

const insertParticipanteGabriel = `
  mutation  {
    createParticipante(input: {
      nome: "Gabriel",
      idade: 24
    })
    {
      nome,
      idade,
      _id
    }
  }
`;

const insertParedao = `
  mutation($everton: String!, $gabriel: String!, $dthEncerramento: String!) {
    createParedao (input: {
      tempoInicio: "2018-01-10T17:48:23.602Z",
      tempoFim: $dthEncerramento,
      participantes: [{
        _id: $everton
      }, { 
        _id: $gabriel
      }]
    }), {
      tempoInicio,
      tempoFim, 
      participantes {
        _id, 
        nome, 
        idade, 
        quantidadeVotosUltimoParedao
      }
    }
  }
`;

export const mock = async () => {
  const dataEverton = await request('http://localhost:3001/graphql', insertParticipanteEverton);
  const everton = dataEverton.createParticipante._id;
  console.log(`criando participante do BBB ${JSON.stringify(dataEverton)}`);

  const dataGabriel = await request('http://localhost:3001/graphql', insertParticipanteGabriel);
  const gabriel = dataGabriel.createParticipante._id;
  console.log(`criando participante do BBB ${JSON.stringify(dataGabriel)}`);

  const dthEncerramento = moment().add(4, 'hours');
  const dataParedao = await request('http://localhost:3001/graphql',
    insertParedao,
    { everton, gabriel, dthEncerramento });
  console.log(`criando participante do BBB ${JSON.stringify(dataParedao)}`);
};

export default { mock };
