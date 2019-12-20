import { withTranslation } from '../i18n';

const cycleLength = 5000;

const Mesh = ({ t }) => <h1>{t('h1', { cycleLength })}</h1>;

Mesh.getInitialProps = async ({ res, err }) => {
  return {
    namespacesRequired: ['mesh'],
  };
};

export default withTranslation('mesh')(Mesh);
