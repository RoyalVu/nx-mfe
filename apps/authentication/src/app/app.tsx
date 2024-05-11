import { loginApi } from '@mfe-nx/data';
import { DataProvider, useDataContext } from '@mfe-nx/data-context';

export function App() {
  const { setAccessToken, accessToken, counter } = useDataContext();

  const loginF = () => {
    // eslint-disable-next-line no-console
    console.log('run');

    loginApi({
      email: 'email',
      password: 'pw',
    })
      .then((rs) => {
        // eslint-disable-next-line no-console
        console.log('rs :', rs);
        setAccessToken(rs.data);
      })
      .catch(() => {});
  };

  return (
    <DataProvider>
      <div className="mx-auto flex flex-col items-center">
        <h1>counter : {counter}</h1>
        <h1 className="m-2">Login with accessToken: {accessToken || 'null'}</h1>
        <button
          className="p-4 rounded-md bg-blue-400"
          // onClick={() => loginF()}
          onClick={loginF}
          type="button"
        >
          submit
        </button>
      </div>
    </DataProvider>
  );
}

export default App;
