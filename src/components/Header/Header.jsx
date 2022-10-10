import React from 'react';
import {Container} from 'react-bootstrap';

import '../../assets/scss/components/Header/Header.scss';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import NavBar from './NavBar/NavBar';

function Header(props) {
  const {type} = props;
  return (
    <div
      className={
        type === 'list' ? 'header__container search' : 'header__container'
      }
    >
      <Container>
        <NavBar />
        {type !== 'list' && (
          <>
            <HeaderSearch />
          </>
        )}
      </Container>
    </div>
  );
}

export default Header;
