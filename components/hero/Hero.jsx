import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '../../lib/i18n';
import { HeroStyles } from './styles';

const Hero = ({ heading, src }) => (
  <HeroStyles src={src}>
    <h1>{heading}</h1>
  </HeroStyles>
);

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default withTranslation('common')(Hero);
