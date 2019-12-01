import { withTranslation } from '../i18n';

const Mesh = ({ t }) => <h1>{t('h1')}</h1>;

Mesh.getInitialProps = async ({ res, err }) => {
  return {
    namespacesRequired: ['mesh'],
  };
};

export default withTranslation('mesh')(Mesh);
