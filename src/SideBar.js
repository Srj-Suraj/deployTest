import React from 'react';
import {Link } from 'react-router-dom';

// css
import './sideBar.css';


function SideBar(){
    return (
        <>
        
<div className="sideBar shadow">

  <ul className='col-md-12 '>
    <li>
      <Link to="/Dashboard" >
        <i className="fa fa-dashboard" />
        Dashboard
      </Link>
    </li>
    <li>
      <Link to="/Clients" >
        <i className="fa fa-address-book-o" />
        Clients
      </Link>
    </li>
    <li>
      <Link to="/Categories" >
      <i className="fa fa-list-ul" />
        Categories
      </Link>
    </li>
    <li>
      <Link to="/Products" >
        <i className="fa fa-superpowers" />
        Products
      </Link>
    </li>
    <li>
      <Link to="/Sales" >
        <i className="fa fa-anchor" />
        Sales
      </Link>
    </li>
    <li>
      <Link to="" >
        <i className="fa fa-briefcase" />
        Deal
      </Link>
    </li>
    <li>
      <Link to="/help-support" >
        <i className="fa fa-plug" />
        Help Support
      </Link>
    </li>
   
    <li>
      <Link to="/subscription" >
        <i className="fa fa-check-circle-o" />
        Subscription
      </Link>
    </li>
    
  </ul>

  
  {/*-bottome section of  side bar*/}
  <span style={{ position: "absolute", bottom: 0 }} className='col-md-12 border-top'>
    <ul >
      <li>
        <Link to="" >
          <i className="fa fa-bullseye" />
          FAQ
        </Link>
      </li>
      <li>
        <Link to="/profile-setting" >
          <i className="fa fa-gear" />
          Setting
        </Link>
      </li>
      <li>
        <Link to="" >
          <i className="fa fa-sign-out" />
          Log Out
        </Link>
      </li>
    </ul>
  </span>
</div>
        </>

    );
}

export default SideBar  ;