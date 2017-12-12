import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const styles = {
  activeNav: {
    textDecoration: 'underline',
  },
}

const Navbar = () => (
  <Menu>
    <Menu.Item name='Menu'>
      <NavLink exact activeStyle={styles.activeNav} to='/'>Menu</NavLink>
    </Menu.Item>
  </Menu>
)

export default Navbar;
