import React from 'react'
import doc from "../Assets/RodolfoDiaz.pdf"
const HomeItems = () => {
const eng={ title:"About Me", resume:"View My Resume", firstPh:"For more than two decades, I have led multiple international and multicultural development teams, delivering disruptive top notch products and services for the automotive industry",
            secondPh:"As program manager I consider pragmatic communication to be among my strongest assets as well as executing “Agile” Methodologies for assertive business decisions and risk mitigation",
            thirdPh:"I have been recognized several times on different companies as best manager to lead global business units",
            SklTitle:"My Core Skills",
            skills:["Global Program Management",
                "Business Development",
                "P&L Management",
                 "APQP ASPICE",
                "Risk Analysis",
                "Business Strategic Planning",
                "Supply Chain Management",
                "Lean Manufacturing",
                "Six Sigma",
                "Engineering Management",
               "MSA",
            "Problem Solving",
                "JIRA",
                "KANBAN",
                "Automotive",]}



const sel= eng;

    return (
        <div className="jumbotron">

          
            <div className="container principal">
                <h1>{sel.title} <span className="resume">
                <a href={doc} target="blank"> <button type="button" className="btn btn-secondary">{sel.resume}</button></a>
                    </span></h1>
                    <p className="mtext">{sel.firstPh}</p> 
                    <article><p>{sel.secondPh}</p><p>{sel.thirdPh}</p></article>

            </div>
            
        </div>
    )
}

export default HomeItems
