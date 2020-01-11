import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '../../lib/i18n';
import Exchange from './Exchange';
import { ExchangesStyles } from './styles';

const exchanges = [
  {
    heading: 'qTrade',
    src: '/images/exchanges/qtrade-logo.png',
    url: 'https://qtrade.io/market/NYZO_BTC',
  },
  {
    heading: 'qTrade',
    src: '/images/exchanges/bihodl-logo.png',
    url: 'https://bihodl.com/#/exchange/nyzo_usdt',
  },
];

const Exchanges = ({ heading }) => (
  <ExchangesStyles>
    <h2>{heading}</h2>
    <div className="row">
      {exchanges.map(exchange => {
        return (
          <Exchange
            heading={exchange.heading}
            text={exchange.text}
            src={exchange.src}
            url={exchange.url}
          />
        );
      })}
    </div>
  </ExchangesStyles>
);

Exchanges.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default withTranslation('common')(Exchanges);
