import React from "react";
import './ourProjects.css';

export function OurProjects() {
    return (
        <div className="ourProjects__container">
            <h2 className="section__header">Our projects</h2>
            <img className="section__underline" src="/images/underline.svg" alt="" />

            <div className="ourProjects__cards justify-content-center section__top-margin">
                <div className="card">
                    <a target="_blank" href="https://www.instagram.com/floracircular/">
                        <div className="ourProjects__card-content background-gray overflow-hidden ">
                            <img src="/images/ourProjects_flora.png" alt="" />
                        </div>
                    </a>
                    <div>
                        <a href="https://www.instagram.com/floracircular/" className="text-main btn btn-secondary buttonProjects1"><strong>Read more</strong></a>
                    </div>
                </div>

                <div className="card">
                    <a target="_blank" href="https://www.instagram.com/ruwana.aqp/">
                        <div className="ourProjects__card-content background-gray overflow-hidden ">
                            <img src="/images/ourProjects_ruwana.png" alt="" />
                        </div>
                    </a>
                    <div>
                        <a href="https://www.instagram.com/ruwana.aqp/" className="text-main btn buttonProjects"><strong>Buy Now</strong></a>
                    </div>
                </div>
            </div>


        </div>
)}