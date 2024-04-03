// import { Container } from './Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      </main>
      <GlobalStyle />
    </div>
  );
};
