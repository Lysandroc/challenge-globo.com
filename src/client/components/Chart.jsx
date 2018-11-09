import React from 'react';
import { Query } from 'react-apollo';
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';
import { GET_LASTEST_PAREDAO } from '../graphql/queries';

const Chart = () => (
  <Query query={GET_LASTEST_PAREDAO}>
    {({ loading, error, data }) => {
      const chart = {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
        }]
      };

      if (loading) return (<p>Montando graficos...</p>);
      if (error) return (<p>Erro ao consultar, verifique a conexão mongodb.</p>);

      data.getLastestParedao.participantes.forEach((detalhe) => {
        chart.labels.push(`${detalhe.nome} possui ${detalhe.quantidadeVotosUltimoParedao} votos`);
        chart.datasets[0].data.push(detalhe.quantidadeVotosUltimoParedao);
        chart.datasets[0].backgroundColor.push(randomColor());
        chart.datasets[0].hoverBackgroundColor.push(randomColor());
      });
      return (
        <Doughnut
          data={chart}
          width={300}
          height={300}
          options={{ maintainAspectRatio: false }}
        />
      );
    }}
  </Query>
);

export default Chart;
