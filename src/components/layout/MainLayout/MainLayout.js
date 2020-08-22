import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class MainLayout extends React.Component {
  render() {
    const { children, rwdMode, rwdModeMaxWidth, setRwdMode } = this.props;

    const rwdModeSelect = windowWidth => {
      if (windowWidth <= rwdModeMaxWidth.mobile) {
        setRwdMode('mobile');
      } else if (windowWidth <= rwdModeMaxWidth.tablet && rwdMode !== 'tablet') {
        setRwdMode('tablet');
      } else if (windowWidth > rwdModeMaxWidth.tablet && rwdMode !== 'desktop') {
        setRwdMode('desktop');
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
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
  rwdMode: PropTypes.string,
  setRwdMode: PropTypes.func,
  rwdModeMaxWidth: PropTypes.object,
};

export default MainLayout;
