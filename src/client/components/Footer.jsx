import React from 'react';
import styled from 'styled-components';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
  padding-top: 15px
`;

const ButtonValidated = ({ action, _id }) => {
  if (action) {
    return (
      <Link to={`/resultado/${_id}`}>
        <Button color="primary" onClick={action}> Envie seu voto agora</Button>
      </Link>
    );
  }
  return (<Button color="grey">Para votar basta clicar em um canditato.</Button>);
};

ButtonValidated.propTypes = {
  action: PropTypes.func,
  _id: PropTypes.string
};

ButtonValidated.defaultProps = {
  action: null,
  _id: null,
};

const Footer = ({
  selectedCardState: {
    action,
    _id,
  }
}) => (
  <FooterContainer className="text-center">
    <Jumbotron>
      <ButtonValidated action={action} _id={_id} />
    </Jumbotron>
  </FooterContainer>
);

Footer.propTypes = {
  selectedCardState: PropTypes.shape({
    action: PropTypes.func,
    _id: PropTypes.string,
  }),
};

Footer.defaultProps = {
  selectedCardState: {
    action: null,
    _id: null
  }
};

export default Footer;
