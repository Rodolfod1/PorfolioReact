import React from 'react'
import SideItem from "../SideItem"

const Wrapper = (props) => {
    return (
        <div className="container principal">
            <div className="col-sm-2">
            {/* adding a collapsable button  */}
                <a href="#" data-activates="slide-out" className="btn btn-dark p-2 button-collapse"><i className="fas fa-bars fa-2x"></i></a> 
                <SideItem />
            </div>
            <div className="col-sm-10">
                {props.children}
            </div>
        </div>
        
    )
}

export default Wrapper
