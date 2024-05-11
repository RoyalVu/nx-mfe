import { loginApi } from '@mfe-nx/data';
import { useDataContext } from '@mfe-nx/data-context';

export default function HomePage() {
  const context = useDataContext();

  const loginF = () => {
    loginApi({
      email: 'email',
      password: 'pw',
    })
      .then((rs) => {
        // TODO: handle save data to state store local of project

        // Save token to global store of host & other remote
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
