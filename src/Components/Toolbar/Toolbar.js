import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className='toolbar'>
    <nav className='toolbar__navigation'>
      <div className='toolbar__hamburger'>
        <DrawerToggleButton click={props.drawerClick}/>
      </div>
      <div className='toolbar__logo'><a href='/'>THE LOGO</a></div>
      <div className='spacer' />
      <div className='toolbar__navigation-items'>
        <ul>
          <li><a href='/'>Products</a></li>
          <li><a href='/'>Users</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
