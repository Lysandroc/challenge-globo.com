import React from 'react';
import styled from 'styled-components';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const FooterContainer = styled.div`
  padding-top: 15px
`;

const ButtonValidated = ({ action }) => {
  if (action) return (<Button color="primary" onClick={action}>Envie seu voto agora</Button>);
  return (<Button color="grey">Para votar basta clicar em um canditato.</Button>);
};

ButtonValidated.propTypes = {
  action: PropTypes.func.isRequired,
};

const Footer = ({
  selectedCardState: {
    action,
  }
}) => (
  <FooterContainer className="text-center">
    <Jumbotron>
      <ButtonValidated action={action || null} />
    </Jumbotron>
  </FooterContainer>
);

Footer.propTypes = {
  selectedCardState: PropTypes.shape({
    action: PropTypes.func,
  }).isRequired,
};

export default Footer;
