import React from 'react';
import AppContext from '../context/index';

const NavBarComponent = () => {
  // eslint-disable-next-line no-undef
  const users = React.useContext(AppContext);

  return (
    <h1>hi: {users.user}</h1>
  )
}

export default NavBarComponent;