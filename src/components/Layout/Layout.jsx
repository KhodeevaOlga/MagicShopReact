import Header from '../Header/header';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  )
}

export default Layout