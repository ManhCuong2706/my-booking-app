import React, {useState} from 'react';
import initData from '../../../data/navBar.json';
import NavBarList from './NavBarList';

NavBar.propTypes = {};
function NavBar(props) {
  const [navBarData, setNavBarData] = useState(initData);

  return (
    <div className='navBar__container'>
      <NavBarList navBarData={navBarData} />
    </div>
  );
}

export default NavBar;
