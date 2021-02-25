import React  from 'react';
import './index.scss';
import logo from '../../assests/graphics/logo.jpg';

const Header=(props)=>{
  return(
      <header data-test="headercomponent">
          <div className="wrap">
             <div className="logo">
                 <img data-test="imgclass" src={logo} alt="logo"/>
             </div>
          </div>
      </header>
  )
}

export default Header;