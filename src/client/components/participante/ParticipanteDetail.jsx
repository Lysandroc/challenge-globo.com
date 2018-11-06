import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.style`
  
`;

const ParticipanteDetalhe = ({
  detalhe: {
    _id,
    nome,
    idade,
    quantidadeVotosUltimoParedao = 0
  }
}) => (
  <Wrapper key={_id}>
    <p>{`${nome}: ${idade} ${quantidadeVotosUltimoParedao}`}</p>
  </Wrapper>
);

ParticipanteDetalhe.propTypes = {
  detalhe: PropTypes.shape({
    _id: PropTypes.string,
    nome: PropTypes.string,
    idade: PropTypes.number,
    quantidadeVotosUltimoParedao: PropTypes.number,
  }).isRequired,
};

export default ParticipanteDetalhe;
