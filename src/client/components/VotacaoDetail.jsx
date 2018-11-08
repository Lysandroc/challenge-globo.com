import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap';
import styled from 'styled-components';
import pad from 'pad-left';

const Bold = styled.strong`
  font-weight: bold;
`;

const VotacaoDetail = ({
  detail: {
    _id,
    nome,
    index,
  }
}) => (
  <Col sm="3" key={_id} className="teste">
    <Card body>
      <CardTitle>{nome}</CardTitle>
      <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=40&txt=300x300&w=300&h=300" alt={nome} />
      <CardText>
        <small className="text-muted">
          Para eliminar o participante 
          <Bold> {nome} </Bold> pelo telefone disque 
          <Bold> 0800-123-{pad(index+1, 3, '0')} </Bold> ou mande SMS para 
          <Bold> 8{pad(index+1, 3, '0')}</Bold>
          .
        </small>
      </CardText>
    </Card>
  </Col>
);

VotacaoDetail.propTypes = {
  detail: PropTypes.shape({
    _id: PropTypes.string,
    nome: PropTypes.string,
    idade: PropTypes.number,
    quantidadeVotosUltimoParedao: PropTypes.number,
  }).isRequired,
};

export default VotacaoDetail;
