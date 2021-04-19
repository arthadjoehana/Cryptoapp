import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';


function Navbar() {
        const [click, setClick] = useState(false);
      
        const handleClick = () => setClick(!click);
        return (
          
            <nav>
              <div className={click ? "nav-container active" : "nav-container"}>
                
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/about"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      ABOUT
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/contact"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      CONTACT
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/crypto"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      CRYPTOCURRENCY TRACKER
                    </NavLink>
                  </li>

                </ul>
                


                
                <div className={click ? "nav-icon active" : "nav-icon"} onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
              </div>
            </nav>
          
        );
      }


export default Navbar;