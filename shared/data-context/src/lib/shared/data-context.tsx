import { createContext, useMemo, useState } from 'react';

export interface SharedDataContextProps {
  children: JSX.Element;
}

export const DataContext = createContext<Record<string, any>>({});

export function DataProvider({ children }: SharedDataContextProps) {
  const [counter, setCounter] = useState(1);
  const [accessToken, setAccessToken] = useState('');

  const values: Record<string, any> = useMemo(
    () => ({
      counter,
      setCounter,
      accessToken,
      setAccessToken,
    }),
    [accessToken, counter]
  );

  return (
    <DataContext.Provider value={{ values }}>{children}</DataContext.Provider>
  );
}
export default DataProvider;
