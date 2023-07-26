import React from "react";
import './ourVision.css';

export function OurVision() {
    return (
        <div className="ourVision__container section__top-margin">
            <a id="our-vision"></a>
            <div className="row">

                <div className="ourVision__image-container col-12 col-lg-5">
                    <div id="ourVision__image"></div>
                </div>

                <div className="col-12 col-lg-7 section__top-margin ourVision__item-container">

                    <div className="ourVision__item">
                        <div className="ourVision__icon"><div><img src="/images/vision_icon1.svg" alt="" /></div></div>
                        <h3 className="ourVision__subheader section__subheader text-pink">Our vision</h3>
                        <p className="ourVision__text text-main"><strong>To promote the comprehensive development of individuals and their families through education.</strong><br />
                            We understand education as the promotion of knowledge through workshops, the development of skills and academic complementarity to improve people’s abilities.</p>
                    </div>

                    <div className="ourVision__item">
                        <div className="ourVision__icon"><div><img src="/images/vision_icon2.svg" alt="" /></div></div>
                        <h3 className="ourVision__subheader section__subheader text-pink">Our mission</h3>
                        <p className="ourVision__text text-main"><strong>Families transforming communities.</strong><br />
                            Our goal is to provide people with the necessary tools for them to become agent of the change within their own community and generate their own development.</p>
                    </div>

                    <div className="ourVision__item">
                        <div className="ourVision__icon"><div><img src="/images/vision_icon4.svg" alt="" /></div></div>
                        <h3 className="ourVision__subheader section__subheader text-pink">Our values</h3>
                        <p className="ourVision__text text-main">Collaboration, trust and dynamism</p>
                    </div>

                </div>
            </div>
        </div>
)}