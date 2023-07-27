import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hoopVolunteers.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { maxHeight } from '@mui/system';


const HoopVolunteers = () => {

    var settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "60px",

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "60px",

                }
            }
        ]
    };


    return (
        <>
            <section id='Volunteers' className='section__top-margin2 background-lightgray'>
                <div className='container volunteers'>
                    <a id="volunteers"></a>
                    <h2 className='section__header'>HOOP</h2>
                    <img className="section__underline" src="/images/underline.svg" alt="" />
                    <Slider {...settings} >
                        <div className='slider'>
                        <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "5px", margin: "5px" }} className='cardVolunteers'>
                        <div className='cardMedia'> 
                                <img src="images/volunteer1.png" alt="" />
                                </div>
                                <CardContent>
                                    <Typography className='titleCard'>
                                        <h4>Christian Canizales</h4>
                                    </Typography>
                                    <Typography className="contCard" >
                                        <div className='detailP'>

                                        </div>

                                        <div className='pCard'>
                                            “My time in Peru would not have been the same if not for the team and community at HOOP —the relationship between HOOP and the community of Flora Tristan is magical. HOOP is the gold standard of social service and education non-profit organizations; the staff and volunteers give every piece of their heart to their work!”
                                        </div>

                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className='slider'>
                        <Card sx={{  display: "flex", flexDirection: "column", alignItems: "center", padding: "5px", margin: "5px" }} className='cardVolunteers'>
                        <div className='cardMedia'> 
                                <img src="images/volunteer3.jpeg" alt="" />
                                </div>
                                <CardContent>
                                    <Typography className='titleCard'>
                                        <h4>Jimena Salas</h4>
                                    </Typography>
                                    <Typography className="contCard" >
                                        <div className='detailP'>

                                        </div>

                                        <div className='pCard'>
                                        “Volunteering at Hoop is one of the best experiences of my life. Kids teach me every day about love, compassion, generosity and happiness. At Hoop we all do our best to provide kids with a safe space where they can learn English and other skills that will be the foundation of a better life for them in the future.”
                                        </div>

                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className='slider'>
                            <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "5px", margin: "5px" }} className='cardVolunteers'>
                            <div className='cardMedia'> 
                                <img src="images/volunteer3.png" alt="" />
                                </div>
                                <CardContent>
                                    <Typography className='titleCard'>
                                        <h4>Sadaura Jeudy</h4>
                                    </Typography>
                                    <Typography className="contCard" >
                                        <div className='detailP'>

                                        </div>

                                        <div className='pCard'>
                                        “From my experience with working with HOOP it’s not just an English teaching program or an organization that kind of does 1 good deed and live. They have a consistent presence in the community of Flora Tristan and help in just so many different ways. So if you’re looking for a place to volunteer, HOOP is definitely the place to join.”
                                        </div>

                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className='slider'>
                        <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "5px", margin: "5px" }} className='cardVolunteers'>
                                <div className='cardMedia'> 
                                <img src="images/volunteer4.png" alt="" />
                                </div>
                                <CardContent>
                                    <Typography className='titleCard'>
                                        <h4>Noa Hakansson</h4>
                                    </Typography>
                                    <Typography className="contCard" >
                                        <div className='detailP'>

                                        </div>
                                        <div className='pCard'>
                                        “I am deeply grateful for the opportunity to have worked at HOOP and for having been a part of their efforts to making a positive impact on the lives of the community in Flora Tristan. I will forever cherish the memories I have from HOOP and I recommend anyone thinking about joining them or helping them in any way to do it.”
                                        </div>

                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default HoopVolunteers