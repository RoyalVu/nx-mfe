import { loginApi } from '@mfe-nx/data';
import { useDataContext } from '@mfe-nx/data-context';
import { useEffect } from 'react';

export default function HomePage() {
  const context = useDataContext();

  useEffect(() => {
    console.log('context :', context);
  });

  const loginF = () => {
    console.log('run');
    loginApi({
      email: 'email',
      password: 'pw',
    })
      .then((rs) => {
        console.log('rs :', rs);
        context.setAccessToken(rs.data?.access_token);
      })
      .catch(() => {});
  };

  return (
    <div className="mx-auto flex flex-col items-center">
      <h1>counter : {context.counter}</h1>
      <h1 className="m-2">
        Login with accessToken: {context.accessToken || 'null'}
      </h1>
      <button
        className="p-4 rounded-md bg-blue-400"
        onClick={loginF}
        type="button"
      >
        submit
      </button>
    </div>
  );
}
