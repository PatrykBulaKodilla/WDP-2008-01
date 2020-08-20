import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children, ...props }) => {
  const rwdModeSelect = windowWidth => {
    if (windowWidth <= props.rwdModeMaxWidth.mobile) {
      props.setRwdMode('mobile');
    } else if (windowWidth <= props.rwdModeMaxWidth.tablet) {
      props.setRwdMode('tablet');
    } else {
      props.setRwdMode('desktop');
    }
  };

  rwdModeSelect(window.innerWidth);

  window.addEventListener('resize', () => {
    rwdModeSelect(window.innerWidth);
  });

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  rwdMode: PropTypes.string,
  setRwdMode: PropTypes.func,
  rwdModeMaxWidth: PropTypes.object,
};

export default MainLayout;
