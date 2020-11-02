import React, { Component } from 'react';
import {Link, useLocation } from 'react-router-dom';

// import P5Wrapper from 'react-p5-wrapper'

class NavBar extends Component {



  render(){
    
      const nav_new =(
        <nav class="uk-navbar-container uk-margin uk-background-light" uk-navbar="mode: click">
            <div class="uk-navbar-left uk-width-expand">

                <ul class="uk-navbar-nav">
                  <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>About</Link></li>
                  <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/works"}>Works</Link></li>
                  <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/works/shodo"}>Workslist</Link></li>
                  <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/works/webdesign/2"}>Detail</Link></li>
                  {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/interests"}>Interests</Link></li> */}
                  {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li> */}
                </ul>

            </div>
        </nav>
        
      )
    
  
    return(
      <div className="jumbotron jumbotron-fluid">
          <div className="vh-50">
            Yu Ohno
          </div>
        <div className="d-none d-lg-inline">

          {nav_new}
          

        </div>

        <div className="d-lg-none d-inline">
          <div class="button_container" id="toggle">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
          </div>


          <div class="overlay" id="overlay">
            <nav class="overlay-menu">
              <ul>
                <li className=""><Link className="" to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
                <li className=""><Link className="" to={process.env.PUBLIC_URL + "/about"}>About</Link></li>
                <li className=""><Link className="" to={process.env.PUBLIC_URL + "/works"}>Works</Link></li>
                {/* <li className=""><Link className="" to={process.env.PUBLIC_URL + "/interests"}>Interests</Link></li> */}
                <li className=""><Link className="" to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>


    )
  }
}
export default NavBar;