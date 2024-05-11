import * as React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
// import { Button } from '@mfe-nx/ui';

const HomePage = React.lazy(() => import('../pages/home'));

const Authentication = React.lazy(
  () => import('authentication/AuthenticationContainer')
);

const Info = React.lazy(() => import('info/InfoContainer'));
const Order = React.lazy(() => import('order/OrderContainer'));
const Account = React.lazy(() => import('account/AccountContainer'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: '2rem',
          margin: '1rem',
        }}
      >
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? 'lightblue' : 'blue',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            color: 'white',
          })}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? 'lightblue' : 'blue',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            color: 'white',
          })}
          to="/login"
        >
          Authentication
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? 'lightblue' : 'blue',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            color: 'white',
          })}
          to="/info"
        >
          Info
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? 'lightblue' : 'blue',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            color: 'white',
          })}
          to="/order"
        >
          Order
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? 'lightblue' : 'blue',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            color: 'white',
          })}
          to="/account"
        >
          Account
        </NavLink>
      </nav>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Authentication />} path="/login" />
        <Route element={<Info />} path="/info" />
        <Route element={<Order />} path="/order" />
        <Route element={<Account />} path="/account" />
      </Routes>
    </React.Suspense>
  );
}

export default App;
