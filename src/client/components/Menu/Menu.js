import React from 'react';

import {
  BrowserRouter as Router, 
  Link, 
} from "react-router-dom";
 
import "./Menu.css"

const  Menu = () =>  {
    return ( 
        <div className="Menu"> 
        <nav>

          <ul>
            <li> <Link to="/">Blog</Link></li>
            <li> <Link to="/Upcoming">Upcoming</Link></li> 
            <li> <a href="https://www.noahgiesel.com/"  target="_blank">Portfolio</a></li>
            <li> <a href="https://github.com/NoahGiesel"  target="_blank">GitHub</a></li> 
          </ul> 
        </nav>
        </div> 
    );
  }
  
  export default Menu;
  