import React from "react";
import './ourImpact.css';


export function OurImpact() {
    return (
        <div className="ourImpact__container background-lightgray">
            <div className="container">
                <h2 className="section__header">Our impact</h2>
                <img className="section__underline" src="/images/underline.svg" alt="" />
                <p className="text-main">Learn how these projects have impacted the community by reading these reports.</p>
                <div className="hoopReportsImg"> 
                    <a href="#"><img src="./images/hoopReports.png" alt="Hoop Reports" /></a>
                </div>
            </div>
        </div>
)}