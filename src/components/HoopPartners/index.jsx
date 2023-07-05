import React from "react";
import './partners.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Partners() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,

                }
            }
        ]
    };

   
    return (
<section id='sponsors'>
<div className='container'>
    <div className="sponsors">
          <h2> Become a sponsor</h2>
    <img className="section__underline" src="/images/underline.svg" alt="" />
    <Slider {...settings} >
        <div className='slider'>
            <img src="./images/ourWork/sponsor1.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor2.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor3.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor5.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor6.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor7.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor8.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor9.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor10.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor11.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor12.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor13.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor14.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor15.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor16.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor17.png" alt="" />
        </div>

    </Slider>
<div className="buttonPartners">
     <button className="becameApartner">Became a HOOP partner</button>
</div>
    </div>
</div>
</section>
)}