import { ENV } from '@mfe-nx/data';
import { useDataContext } from '@mfe-nx/data-context';
import { useEffect } from 'react';

export default function HomePage() {
  const context = useDataContext();

  useEffect(() => {
    console.log('A :', context);
  });

  return (
    <div className="h-[90vh] flex flex-col justify-center items-center bg-gray-100 gap-y-4 w-full">
      <p className="text-[200px]">Container</p>
      <p className="text-xl">Counter: {context.counter}</p>
      <h1 className="text-xl font-bold text-primary">
        Welcome to the Container!
      </h1>
      <p className="text-xl font-bold text-primary">
        ENV Access token: {ENV.NX_ACCESS_TOKEN_KEY}
      </p>
      <p className="text-xl font-bold text-primary">
        Value Access token: {context.accessToken || 'null'}
      </p>
    </div>
  );
}
