import React from 'react';
import '../css/Footer.css';

function Footer(){
  const linkedin = '';
  const github = '';

  return(
    <footer>
      <a href = {linkedin} target='_blank' rel='noopener noreferrer'>
        <i className='LIicon'></i>
      </a>
      <a href = {github} target='_blank' rel='noopener noreferrer'>
        <i className='GHicon'></i>
      </a>
    </footer>
  );
}

export default Footer;