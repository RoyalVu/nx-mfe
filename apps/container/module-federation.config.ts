import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'container',
  remotes: ['info', 'order', 'account'],
};

export default config;
