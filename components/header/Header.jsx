import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

import { i18n, Link, withTranslation } from '../../lib/i18n';
import LanguageSelect from '../LanguageSelect.jsx';
import { HeaderStyles } from './styles.js';

const Header = ({ t, lang }) => (
  <HeaderStyles>
    <Link href={`/${lang}`}>
      <a>{t('home')}</a>
    </Link>
    <LanguageSelect lang={lang} />
  </HeaderStyles>
);

Header.propTypes = {
  t: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
};

export default withTranslation('common')(Header);
