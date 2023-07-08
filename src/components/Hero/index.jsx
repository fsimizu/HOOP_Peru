import React from "react";
import './hero.css';

export function Hero() {
    return (
        <div className="hero__container p-5 bg-image">
            <div className="container">
                <div className="d-flex justify-content-end h-100">
                        <div className="text-right text-white col-lg-4 col-md-8">
                            <h4 className="mb-3 hero__we-are">We are</h4>
                            <img src="/images/hero_logo.png" alt="" />
                            <p className="mb-3">Helping Overcome Obstacles Peru</p>
                            <h4 className="mb-3 text-main text-right"><strong>An NGO working with communities in the <span className="hero__yellow-text">cono norte of Arequipa Peru.</span></strong></h4>
                            {/* <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a> */}
                        </div>
                </div>
            </div>

            
        </div>
)}