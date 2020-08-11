import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  window.addEventListener('resize', e => {
    console.log(window.innerWidth);
  });

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.state = {
  test: 0,
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
