import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import pad from 'pad-left';

const VotacaoDetail = ({
  detail: {
    _id,
    nome,
    index,
  }
}) => (
  <Col sm="6" key={_id}>
    <Card body>
      <CardTitle>{nome}</CardTitle>
      <CardText>
        Para eliminar o participante {nome} pelo telefone disque 0800-123-{pad(index+1, 3, '0')} ou mande SMS para 8{pad(index+1, 3, '0')}.
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
