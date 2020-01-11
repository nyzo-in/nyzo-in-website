import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '../../lib/i18n';
import { ExchangeStyles } from './styles';

const Exchange = ({ src, heading, url }) => (
  <ExchangeStyles href={url} rel="noopener noreferrer" target="_blank">
    <img src={src} alt={heading} />
  </ExchangeStyles>
);

Exchange.propTypes = {
  src: PropTypes.string,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.object.isRequired,
};

export default withTranslation('common')(Exchange);
