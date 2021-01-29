import React from 'react';
import './App.css'
import { Link } from 'react-router-dom'



class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div>
        <Link to='/homepage' className='logo'>
          Flatnote
        </Link>
        <div className='links'>
          <Link to='/newForm'>
            New Note
          </Link>
          
          <span className='padding1'><Link to='/login'>
            Sign Out
          </Link></span>
        </div> 
      </div>
      </React.Fragment>
    );
  }
}

export default Nav;
