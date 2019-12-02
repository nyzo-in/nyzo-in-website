import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

import { i18n, Link, withTranslation } from '../i18n';
import LanguageSelect from './LanguageSelect.jsx';

const Header = ({ t, lang }) => (
  <header>
    <Link href={'/'}>
      <a>{t('home')}</a>
    </Link>
    <br />
    <NextLink href={'/en/guides/intro'}>
      <a>en intro</a>
    </NextLink>
    <br />
    <NextLink href={'/de/docs/intro'}>
      <a>de intro</a>
    </NextLink>
    <br />
    <NextLink href={'/es/guias/intro'}>
      <a>es intro</a>
    </NextLink>
    <LanguageSelect lang={lang} />
  </header>
);

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Header);
