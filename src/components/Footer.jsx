import React from 'react';
import '../css/Footer.css';

function Footer(){
  const linkedin = 'https://www.linkedin.com/in/michaelepigott/';
  const github = 'https://github.com/Michaelepigott';

  return(
    <footer>
      <a href = {linkedin} target='_blank' rel='noopener noreferrer'>
        <i className='fa fa-linkedin icon'></i>
      </a>
      <a href = {github} target='_blank' rel='noopener noreferrer'>
        <i className='fa fa-github icon'></i>
      </a>
    </footer>
  );
}

export default Footer;