import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '../../lib/i18n';
import { FeaturesStyles } from './styles';

const Features = ({ heading }) => (
  <FeaturesStyles>
    <h2>{heading}</h2>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </FeaturesStyles>
);

Features.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default withTranslation('common')(Features);
