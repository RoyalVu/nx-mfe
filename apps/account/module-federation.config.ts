import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'account',
  exposes: {
    './AccountContainer': './src/app/app',
  },
};

export default config;
