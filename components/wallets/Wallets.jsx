import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '../../lib/i18n';
import Wallet from './Wallet';
import { WalletsStyles } from './styles';

const wallets = [
  {
    heading: 'Web wallet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ipsum e',
    src: '/images/wallets/Nyzo-Web-Wallet.png',
    button: {
      url: 'https://nyzo.co/wallet',
      text: 'Visit',
    },
  },
  {
    heading: 'Android wallet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ',
    src: '/images/wallets/Nyzo-Android-Wallet.png',
    button: {
      url: 'https://play.google.com/store/apps/details?id=io.threedots.nyzo_wallet',
      text: 'Download',
    },
  },
];

const Wallets = ({ heading }) => (
  <WalletsStyles>
    <h2>{heading}</h2>
    <div className="row">
      {wallets.map(wallet => {
        return (
          <Wallet
            heading={wallet.heading}
            text={wallet.text}
            src={wallet.src}
            button={wallet.button}
          />
        );
      })}
    </div>
  </WalletsStyles>
);

Wallets.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default withTranslation('common')(Wallets);
