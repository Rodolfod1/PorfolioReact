
import React from 'react'
import picture from "./RD.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/SideBar.css"



const SideItem = () => {
    return (
<div className="dropdown submenu">
    <a href="#" data-activates="slide-out" className="btn btn-dark p-2 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-bars fa-2x"></i></a> 
      <div className="dropdown-menu my-menu" aria-labelledby="dropdownMenuButton1" >
        <a id="foto" className="nav-link dropdown-item" href="#"><img id="mifoto" src={picture} className="rounded-circle " width="40px"/></a>
        <a id="casa" className="nav-link dropdown-item" href="#"><i className="fas fa-home fa-2x"></i></a>
        <a id="portfolio" className="nav-link dropdown-item" href="#"><i className="fas fa-briefcase fa-2x"></i></a>
          <a id="contact" className="nav-link dropdown-item" href="#"><i className="fas fa-id-card fa-2x"></i></a>
      </div>
</div>
     
    )
}

export default SideItem
