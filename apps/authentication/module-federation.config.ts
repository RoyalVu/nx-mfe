import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'authentication',
  exposes: {
    // './Module': './src/remote-entry.ts',
    './AuthenticationContainer': './src/app/app',
  },
};

export default config;
