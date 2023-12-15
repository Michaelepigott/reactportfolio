
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import '../css/Header.css';

function NavBar() {
  const inWindow = useLocation().pathname;
  return(
    <ul className='nav'>
      <li className='nav-item navcustom'>
        <Link to='/' className={'currentPage' === '/' ? 'nav-link active' : 'nav-link'}>
        About Me
          </Link>
        
      </li>
      <li className='nav-item navcustom'>
        <Link to='/Contact' className={'currentPage' === '/Contact' ? 'nav-link active' : 'nav-link'}>
        Contact Me
          </Link>
        
      </li>
      <li className='nav-item navcustom'>
        <Link to='/Portfolio' className={'currentPage' === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
        My Portfolio
          </Link>
        
      </li>
      <li className='nav-item navcustom'>
        <Link to='/Resume' className={'currentPage' === '/Resume' ? 'nav-link active' : 'nav-link'}>
        My Resume
          </Link>
        
      </li>
    </ul>
  );
}

function  Header(){
  return(
    <header>
      <h1>Michael Pigott</h1>
      <nav><NavBar/></nav>
    </header>
  );
}

export default Header;