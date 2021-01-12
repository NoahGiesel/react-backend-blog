import React from 'react';
import "./Menu.css"

const  Menu = () =>  {
    return (
      <div className="Menu"> 
        <ul>
          <li><a href="#" className="active">Portfolio</a></li>
          <li><a href="#">UpComing</a></li>
          <li><a href="#">GitHub</a></li> 
        </ul>
      </div>
    );
  }
  
  export default Menu;
  