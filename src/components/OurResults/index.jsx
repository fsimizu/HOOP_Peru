import React from "react";
import './ourResults.css';

export function OurResults({title}) {

    // const carouselElements = document.querySelectorAll('[data-bs-ride="carousel"]');
    // carouselElements.forEach((element) => {
    //   const carousel = bootstrap.Carousel.getOrCreateInstance(element);
    //   carousel.pause();
    // });

    return (
        <div className="ourResults__container section__top-margin">
            <div className="container">
                <a id="our-results"></a>
                <h2 className="section__header">{title}</h2>
                <img className="section__underline" src="/images/underline.svg" alt="" />

                <div className="row">

                    <div className="col-12 col-lg-6 section__top-margin">

                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-bs-ride="true" data-bs-interval="true" data-bs-touch="true">

                            <div className="carousel-inner text-white">
                                
                                <div className="carousel-item active" id="carousel-item-1">
                                    <div className="carousel-item-text background-blue">
                                        <div className="section__header carousel-item-header">Life stories</div>
                                        <div><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i></div>
                                        <div><img src="/images/results_line.png" alt="" /></div>
                                        <div className="carousel-item-subheader">Testimony Rodrigo:</div>
                                        <p className="text-main">I like HOOP, because I like English and I love being with the teachers. It’s very important to learn English, and HOOP also offers lots of activities for all ages!</p>
                                    </div>
                                </div>

                                <div className="carousel-item" id="carousel-item-2">
                                    <div className="carousel-item-text background-red">
                                        <div className="section__header carousel-item-header">Life stories</div>
                                        <div><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i></div>
                                        <div><img src="/images/results_line.png" alt="" /></div>
                                        <div className="carousel-item-subheader">Testimony señora Ceferina:</div>
                                        <p className="text-main"> I am in HOOP; because they help us with English classes and also other support with the moms, for example for me, I participate in the knitting activity and we became a team</p>
                                    </div>
                                </div>


                                <div className="carousel-item" id="carousel-item-3">
                                    <div className="carousel-item-text background-yellow">
                                        <div className="section__header carousel-item-header">Life stories</div>
                                        <div className="carousel-item-stars"><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i></div>
                                        <div><img src="/images/results_line.png" alt="" /></div>
                                        <div className="carousel-item-subheader">Testimony Señora Valentina:</div>
                                        <p className="text-main">I am learning, we’re trying new activities. I am part of the Ruwana team and it’s helping my family to get another source of income. We're grateful and super content to be part of such an experience.</p>
                                    </div>
                                </div>

                                <div className="carousel-item" id="carousel-item-4">
                                    <div className="carousel-item-text background-green">
                                        <div className="section__header carousel-item-header">Life stories</div>
                                        <div><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i></div>
                                        <div><img src="/images/results_line.png" alt="" /></div>
                                        <div className="carousel-item-subheader">Testimony señora Maccimiana:</div>
                                        <p className="text-main">At HOOP, I have the opportunity to learn and write, that is something I never thought I would be able to do with having to take care of my babies.</p>
                                    </div>
                                </div>

                                <div className="carousel-item" id="carousel-item-5">
                                    <div className="carousel-item-text background-purple">
                                        <div className="section__header carousel-item-header">Life stories</div>
                                        <div><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i></div>
                                        <div><img src="/images/results_line.png" alt="" /></div>
                                        <div className="carousel-item-subheader">Testimony Yerson:</div>
                                        <p className="text-main">HOOP brings me education, teaches me English, helps getting to know new friends, brings new teachers to talk to, thanks to HOOP I know how to speak English.</p>
                                    </div>
                                </div>

                            </div>

                             <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                            </ol>

                        </div>

  
                    </div>
                    

                    <div className="col-12 col-lg-6 section__top-margin">
                        <div className="ourResults__item-container text-main text-grey" >
                            <div className="ourResults__icon">
                                <img src="/images/results_icon1.svg" alt="" />
                            </div>
                            <div className="ourResults__text">
                                <p className="text-main"><strong>50</strong> Volunteers & <strong>8</strong> staff members</p>
                            </div>
                        </div>
                        <div className="ourResults__item-container text-main text-grey" >
                            <div className="ourResults__icon">
                                <img src="/images/results_icon2.svg" alt="" />
                            </div>
                            <div className="ourResults__text">
                                <p className="text-main"><strong>140</strong> Students</p>
                            </div>
                        </div>
                        <div className="ourResults__item-container text-main text-grey" >
                            <div className="ourResults__icon">
                                <img src="/images/results_icon3.svg" alt="" />
                            </div>
                            <div className="ourResults__text">
                                <p className="text-main"><strong>230</strong> Families supported</p>
                            </div>
                        </div>
                        <div className="ourResults__item-container text-main text-grey" >
                            <div className="ourResults__icon">
                                <img src="/images/results_icon4.svg" alt="" />
                            </div>
                            <div className="ourResults__text">
                                <p className="text-main"><strong>5</strong> International offices around the world <br /><em>(US, Germany, France, Austria, UK)</em></p>
                            </div>
                        </div>
                
                    </div>



                </div>
            </div>
        </div>
)}