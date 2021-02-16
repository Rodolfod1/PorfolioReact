import React from 'react'

const SideItem = () => {
    return (
        // <nav id="sideNav" className="nav flex-sm-column dropdown-menu" >
        <nav className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
        <a id="foto" className="nav-link dropdown-item" href="#"><img id="mifoto" src="./assets/RD.jpg" className="rounded-circle " /></a>
        <a id="casa" className="nav-link dropdown-item" href="#"><i className="fas fa-home fa-2x"></i></a>
        <a id="portfolio" className="nav-link dropdown-item" href="#"><i className="fas fa-briefcase fa-2x"></i></a>
        {/* <a className="nav-link dropdown-item" href="https://www.linkedin.com/in/rodolfo-diaz-2371b819/" target="blank"><i className="fab fa-linkedin fa-2x"></i></a>
        <a className="nav-link dropdown-item" href="https://github.com/Rodolfod1" target="blank"><i className="fab fa-github fa-2x"></i> </a> */}
        <a id="contact" className="nav-link dropdown-item" href="#"><i className="fas fa-id-card fa-2x"></i></a>
      </nav>
    )
}

export default SideItem
