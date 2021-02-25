import React  from 'react';
import './index.scss';
import logo from '../../assests/graphics/logo.jpg';

const Header=(props)=>{
  return(
      <header>
          <div className="wrap">
             <div className="logo">
                 <img src={logo} alt="logo"/>
             </div>
          </div>
      </header>
  )
}

export default Header;