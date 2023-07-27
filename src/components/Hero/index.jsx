import React from "react";
import './hero.css';

export function Hero() {
    return (
        <div id="heroHome" className="hero__container p-5 bg-image">
            <div className="container">
                <div className="d-flex justify-content-end h-100">
                        <div className="text-right text-white col-lg-4 col-md-8">
                            <h4 className="mb-3 text-main text-right">We are</h4>
                            <img src="/images/hero_logo.png" alt="" />
                            <p className="mb-3">Helping Overcome Obstacles Peru</p>
                            <h4 className="mb-3 text-main text-right"><strong>An NGO working with communities in <span className="hero__yellow-text">Arequipa,Peru.</span></strong></h4>
                        </div>
                </div>
            </div>

            
        </div>
)}