import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '../../lib/i18n';
import { WalletStyles } from './styles';

const Wallet = ({ src, heading, text, button }) => (
  <WalletStyles>
    {src && <img src={src} alt={heading} />}
    <h3>{heading}</h3>
    <p>{text}</p>
    <a href={button.url} className="button" rel="noopener noreferrer" target="_blank">
      {button.text}
    </a>
  </WalletStyles>
);

Wallet.propTypes = {
  src: PropTypes.string,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.object.isRequired,
};

export default withTranslation('common')(Wallet);
