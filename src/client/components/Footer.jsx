import React from 'react';
import styled from 'styled-components';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

const FooterContainer = styled.div`
  padding-top: 15px
`;

const ButtonValidated = ({ action, _id }) => {
  const recaptchaRef = React.createRef();

  const f = (f1, f2) => {
    f1();
    f2();
  };

  if (action) {
    return (
      <Link to={`/resultado/${_id}`}>
        <Button color="primary" onClick={f(action, recaptchaRef.current.execute)}> Envie seu voto agora</Button>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey="6Lelz3kUAAAAAAxrDHv5tD50AinwcJpWN6mb4z3Y"
        />
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
