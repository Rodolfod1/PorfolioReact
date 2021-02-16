import { Dropdown } from 'bootstrap'
import React from 'react'
import SideItem from "../SideItem"
import "./style.css"

const Wrapper = (props) => {
    return (
        <div className="container principal">
            <div className="row">
                <div className="col-sm-2">
                    <SideItem />
                </div>
            <div className="col-sm-10">
                {props.children}
            </div>
            </div>
         
        </div>
        
    )
}

export default Wrapper
