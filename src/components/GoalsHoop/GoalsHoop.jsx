import React from 'react'
import "./goalsHoop.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GoalsHoop = () => {

    let settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    };

  return (
    <>
            <section className='container goalsHoop section__top-margin3'>
                <h2 className='section__header'>Hoop and the SDGS</h2>
                <h3>Goals for the year 2023</h3>
                <Slider {...settings2} >
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel1.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>1. No poverty</h4>
                            <p className="text-main text-left">We’re constantly advising the families of the community regarding topics such as health and wellbeing, in order to improve their quality of life, reduce their vulnerabilities and increase to ongoing changes and risks.</p>
                        </div>
                    </div>
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel2.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>3. Good health and well-being</h4>
                            <p className="text-main text-left">Our family program on promoting the community member’s well-being through psychological accompaniment, counselling and violence prevention..</p>
                        </div>
                    </div>
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel3.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>4. Quality education</h4>
                            <p className="text-main text-left">Our education program focuses on complementary education. Helping the children in the community get access to academic support that allows them to strengthen the knowledge gained in their schools, as well as offer complementary workshop through our partner Por un Perú mejor..</p>
                        </div>
                    </div>
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel4.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>5. Gender Equality</h4>
                            <p className="text-main text-left">Our family and community programs join together with the objective of stopping all forms of discrimination and violence through counselling and training for the women in the community, as well as legal accompaniment for the most sensitive cases. </p>
                        </div>
                    </div>
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel5.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>8. Decent work and economic growth</h4>
                            <p className="text-main text-left">In addition to school support, or education program seeks to encourage adults who have not completed their studies through alliances with Alternatives Basic Education Centers (CEBA) to increase their access to fair employment.</p>
                        </div>
                    </div>
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel6.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>10. Reduced inequality</h4>
                            <p className="text-main text-left">We promote inclusion through entrepreneurship led mainly by the mothers of the community, giving them a space for their professional development through training representation and accompaniment.</p>
                        </div>
                    </div>
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel7.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>10. Sustainable cities and communities</h4>
                            <p className="text-main text-left">Through Vida Digna (our project), we promote the improvement of the homes of the most exposed community members. And with projects such as Flora Circular we focus on educating the community regarding waste management and the increase of green areas in their homes. </p>
                        </div>
                    </div>

                </Slider>

            </section>
    </>
  )
}

export default GoalsHoop