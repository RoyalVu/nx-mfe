import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'order',
  exposes: {
    // './Module': './src/remote-entry.ts',
    './OrderContainer': './src/app/app',
  },
};

export default config;
