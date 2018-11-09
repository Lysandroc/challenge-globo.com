import React from 'react';
import { Query } from 'react-apollo';
import { Row } from 'reactstrap';
import styled from 'styled-components';
import moment from 'moment';
import { GET_LASTEST_PAREDAO, GET_PARTICIPANTE } from '../graphql/queries';
import VotacaoDetail from './VotacaoDetail';
import Chart from './Chart';

const Title = styled.h4`
  text-align: center;
  vertical-align: middle;
  line-height: 50px; 
`;

const SubTitle = styled.h4`
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

const ChartStyled = styled.div`
  text-align: center;
  vertical-align: middle;
`;

class Resultado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { _id } = this.props.match.params;
    return (
      <div>
        <Title>QUEM DEVE SER <strong>ELIMINADO</strong>?</Title>
        <Hr />
        <Query query={GET_PARTICIPANTE} variables={{ _id }}>
          {({ data: getParticipanteById, loading, error }) => {
            if (loading) return <SubTitle>Carregando...</SubTitle>;
            if (error) return <SubTitle>Ocorreu um erro :(</SubTitle>;

            return <SubTitle><strong>Parabéns!</strong> Seu voto para <strong>{getParticipanteById.ParticipanteById.nome}</strong> foi enviado com sucesso.</SubTitle>;
          }}
        </Query>
        <Row className="justify-content-center">
          <Query query={GET_LASTEST_PAREDAO}>
            {({ loading, error, data }) => {
              if (loading) {
                return <p>Buscando participantes...</p>;
              }
              if (error) {
                return <p>Erro ao consultar, verifique a conexão mongodb.</p>;
              }
              return data.getLastestParedao.participantes.map((detalhe, index) => (
                <VotacaoDetail
                  key={detalhe._id}
                  detail={{ ...detalhe, index, }}
                  showText={false}
                />
              ));
            }}
          </Query>
        </Row>
        <ChartStyled>
          <Chart />
        </ChartStyled>
        <Query query={GET_LASTEST_PAREDAO}>
          {({ loading, error, data }) => {
            if (loading) return (<p>Buscando participantes...</p>);
            if (error) return (<p>Erro ao consultar, verifique a conexão mongodb.</p>);

            const tempoFim = moment(new Date(parseInt(data.getLastestParedao.tempoFim, 10)));
            const tempoRestante = moment.utc(tempoFim.diff(moment(new Date()))).format('HH:mm:ss');
            return (
              <SubTitle> FALTA {tempoRestante} HORAS PARA ENCERRAR AS VOTAÇÕES </SubTitle>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Resultado;
