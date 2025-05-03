import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Main = styled.main`
  min-height: calc(100vh - 300px); /* Accounting for header and footer heights */
`;

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        {children || <Outlet />}
      </Main>
      <Footer />
    </>
  );
};

export default Layout;