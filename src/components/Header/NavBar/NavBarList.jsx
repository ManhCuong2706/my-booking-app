import React from 'react';
import PropTypes from 'prop-types';

import '../../../assets/scss/components/NavBar/NavBarList.scss';
import {Button, Nav} from 'react-bootstrap';

NavBarList.propTypes = {
  navBarData: PropTypes.array,
};

NavBarList.defaultProps = {
  navBarData: [],
};

function NavBarList(props) {
  const {navBarData} = props;

  const handlerMoveToHome = () => {
    window.location.replace('http://localhost:3000/');
  };

  return (
    <>
      <div className='navHeader'>
        <div className='navHeader__title'>
          <h2 onClick={handlerMoveToHome}>
            <span className='orange-color'>Booking</span> Website
          </h2>
        </div>
        <div className='navHeader__buttons'>
          <Button className='navHeader__register' href='#'>
            Register
          </Button>
          <Button className='navHeader__login' href='#'>
            Login
          </Button>
        </div>
      </div>
      <div className='nav-bar'>
        <Nav className='nav-bar__list'>
          {navBarData.map((item, i) => (
            <Nav
              className={i === 0 ? 'nav-bar__item active' : 'nav-bar__item'}
              key={i}
            >
              <i className={`nav-bar__icon fa ${item.icon}`} />
              {item.type}
            </Nav>
          ))}
        </Nav>
      </div>
    </>
  );
}

export default NavBarList;
