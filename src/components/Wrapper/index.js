import { Dropdown } from 'bootstrap'
import React from 'react'
import SideItem from "../SideItem"

const Wrapper = (props) => {
    return (
        <div className="container principal">
            <div className="col-sm-2">
            {/* adding a collapsable button  */}
            <div className="dropdown">
            {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button> */}
            <a href="#" data-activates="slide-out" className="btn btn-dark p-2 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-bars fa-2x"></i></a> 
            <SideItem />

            </div>
                
            </div>
            <div className="col-sm-10">
                {props.children}
            </div>
        </div>
        
    )
}

export default Wrapper
