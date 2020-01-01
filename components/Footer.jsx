import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../lib/i18n';

const links = [
  {
    key: 'home',
    url: 'https://nyzo.co',
  },
  {
    key: 'twitter',
    name: '@nyzo_currency on Twitter',
    url: 'https://twitter.com/nyzo_currency',
  },
  {
    key: 'reddit',
    url: 'https://www.reddit.com/r/Nyzo/',
  },
  {
    key: 'facebook',
    url: 'https://www.facebook.com/nyzoblockchain/',
  },
  {
    key: 'telegram',
    url: 'https://t.me/NyzoCo',
  },
  {
    key: 'bitcointalk',
    url: 'https://bitcointalk.org/index.php?topic=5079696.0',
  },
];

const Footer = ({ t }) => (
  <footer>
    <h4>{t('links.heading')}</h4>
    <ul>
      {links.map(link => {
        return (
          <li key={link.key}>
            <a target="_blank" rel="noreferrer" href={link.url}>
              {t(`links.${link.key}`)}
            </a>
          </li>
        );
      })}
    </ul>
  </footer>
);

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('footer')(Footer);
