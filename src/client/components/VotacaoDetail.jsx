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

const CardBordered = styled.div`
  border-style: ${props => props.selected ? 'solid' : ''};
  border-width: ${props => props.selected ? '5px' : ''};
  border-radius: ${props => props.selected ? '5px' : ''};
  border-color: ${props => props.selected ? 'darkorange' : ''};
  background-color: ${props => props.selected ? 'darkorange' : ''};
`;

const VotacaoDetail = ({
  detail: {
    _id,
    nome,
    index,
    selected
  }
}) => (
    <Col sm="3" key={_id}>
      <CardBordered selected={selected}>
        <Card body>
          <CardTitle>{nome}</CardTitle>
          <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=40&txt=300x300&w=350&h=350" alt={nome} />
          <CardText>
            <small className="text-muted">
              Para eliminar o participante 
              <strong> {nome} </strong> pelo telefone disque 
              <strong> 0800-123-{pad(index+1, 3, '0')} </strong> ou mande SMS para 
              <strong> 8{pad(index+1, 3, '0')}</strong>
              .
            </small>
          </CardText>
        </Card>
      </CardBordered>
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
