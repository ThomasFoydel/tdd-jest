import React from 'react';
import './styles.scss';
import Logo from 'img/logo.png';

export default function Header() {
  return (
    <header>
      <div className='wrap'>
        <div className='logo'>
          <span>CARROT</span>
          <img className='' alt='Logo' src={Logo} />
          <span>KING</span>
        </div>
      </div>
    </header>
  );
}
