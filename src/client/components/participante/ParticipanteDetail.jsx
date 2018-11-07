import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  font-weight: bold;
  color: palevioletred;
`;

const ParticipanteDetail = ({
  detalhe: {
    _id,
    nome,
    idade,
    quantidadeVotosUltimoParedao
  }
}) => {
  const shouldDisplayVotos = !!quantidadeVotosUltimoParedao || quantidadeVotosUltimoParedao === 0;
  return (
    <Wrapper key={_id}>
      <div>
        {` 
          ${nome}
          ${idade}
          ${shouldDisplayVotos ? quantidadeVotosUltimoParedao : ''}
        `}
      </div>
    </Wrapper>
  );
};

ParticipanteDetail.propTypes = {
  detalhe: PropTypes.shape({
    _id: PropTypes.string,
    nome: PropTypes.string,
    idade: PropTypes.number,
    quantidadeVotosUltimoParedao: PropTypes.number,
  }).isRequired,
};

export default ParticipanteDetail;
