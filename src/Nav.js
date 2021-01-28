import React from 'react';
import { Link } from 'react-router-dom'



class Nav extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>
          FLATNOTE
        </Link>
        <div>
          <Link to='/newForm'>
            New Note
          </Link>
          <Link to='/login'>
            Sign Out
          </Link>
        </div> 
      </div>
    );
  }
}

export default Nav;
