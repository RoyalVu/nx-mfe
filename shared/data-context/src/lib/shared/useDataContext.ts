import { useContext } from 'react';

import { DataContext } from './data-context';

export function useDataContext() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('Info context hook is not used correctly');
  }

  return context;
}
