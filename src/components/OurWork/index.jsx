import React from "react";
import './ourWork.css';

export function OurWork() {
    return (
        <div className="ourWork__container section__top-margin background-lightgray">
            <a id="our-work"></a>
            <div className="container">
                <h2 className="section__header">Our work</h2>
                <img className="section__underline" src="/images/underline.svg" alt="" />

                <div className="ourWork__cards justify-content-center">
                    <div className="ourWork__card-container">
                        <img src="/images/icon_blue.png" className="ourWork__icons" id="icon_blue" alt="" />
                        <div className="card ourWork__card-content overflow-hidden">
                            <img className="card-img-top" src="/images/card_blue.jpg" alt="education" />
                            <div className="card-body background-darkblue">
                                <h5 className="section__subheader card-title">Education</h5>
                                <p className="card-text">We provide free English and coding classes for children between 6 and 17 years old, primary and secondary education for adults.</p>
                                <div className="ourWork__readMore"><a href="/education" className="btn btn-outline-light">Read more</a></div>                 
                            </div>
                        </div>
                    </div>
                    <div className="ourWork__card-container">
                        <img src="/images/icon_red.png" className="ourWork__icons" alt="" />
                        <div className="card ourWork__card-content overflow-hidden">
                            <img className="card-img-top" src="/images/card_red.jpg" alt="family" />
                            <div className="card-body background-purple">
                                <h5 className="section__subheader card-title">Family</h5>
                                <p className="card-text">We promote and raise awareness about mental and physical health through psychoeducational workshops and activities to achieve self-knowledge, emotional management and well-being </p>
                                <div className="ourWork__readMore" ><a href="/family" className="btn btn-outline-light">Read more</a></div> 
                            </div>
                        </div>
                    </div>
                    <div className="ourWork__card-container">
                        <img src="/images/icon_green.png" className="ourWork__icons" alt="" />
                        <div className="card ourWork__card-content overflow-hidden">
                            <img className="card-img-top" src="/images/card_green.jpg" alt="community" />
                            <div className="card-body background-green">
                                <h5 className="section__subheader card-title">Community</h5>
                                <p className="card-text">We give consultation and training in composting and knitting that create opportunities for the communities that manage these projects.</p>
                                <div className="ourWork__readMore"><a href="/community" className="btn btn-outline-light">Read more</a></div> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
)}