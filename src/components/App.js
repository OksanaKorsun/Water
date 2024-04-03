import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';
// import { RestrictedRoute } from './RestrictedRoute';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const SigninPage = lazy(() => import('../pages/SigninPage/SigninPage'));
const SignupPage = lazy(() => import('../pages/SignupPage/SignupPage'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Route>
    </Routes>
  );
};
