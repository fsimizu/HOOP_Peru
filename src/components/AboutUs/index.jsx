import React from "react";
import './abousUs.css';

export function AboutUs() {
    return (
        <div className="aboutUs__container section__top-margin">
            <div className="row ">
                <div className="col-12 col-lg-6 text-main-container">
                    <h2 className="section__header">About us</h2>
                    <img className="section__underline" src="/images/underline.svg" alt="" />
                    <div className="text-main text-grey aboutUs__text">
                        <p>Hoop is an NGO dedicated to work in vulnerables communities in the northern part of Arequipa developing projects focused on 3 main areas: 
                        <strong><em> Education, Family (psychology), Community (social work)</em></strong></p>
                        <p><strong>HOOP </strong>was <strong>founded in 2012 by volunteers and staff of the Flora Tristan </strong>English School in Cerro Colorado. Families there had no access to basic services and it was sought to <strong>provide educational services</strong> to achieve a <strong>positive impact on the community.</strong></p>
                        <p>Today former volunteers represent us in countries like Austria, France, Germany, Taiwan, England and the United States, supporting our organization and ensuring the sustainability of our work through grants and donations.</p>
                        <p><strong><a href="./about-us" className="text-grey">Read more...</a></strong></p>
                    </div>
                </div>
            </div>
        </div>
)}