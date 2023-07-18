import React from "react";
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import './navbar.css';

export function Navbar() {

    const handleCloseClick = () => {
        document.getElementById("myNav").style.height = "0%";
    };

    const handleOpenClick = () => {
        document.getElementById("myNav").style.height = "100%";
    };


    const handleScrollToGetInTouch = (id) => {
        setTimeout(()=>{scrollToGetInTouch(id)}, 200);
        handleCloseClick();
    };

    const scrollToGetInTouch = (id) => {
        scroller.scrollTo(id, {
            duration: 400,
            offset: -60,
        });
    };

    $( function(){ setTimeout( ()=> {
        let url = window.location.href; 
        $(".nav-item .nav-link").each( function() {
            if(url.includes(this.id.substring(4))) { 
                $(this).addClass("nav-item-active");
            }
        });
    }, 250)
    });

    return (
        <div className="navbar__container bg-body-tertiary">
            <div id="myNav" className="overlay" >
                <a href="javascript:void(0)" className="closebtn" onClick={handleCloseClick}>&times;</a>
                <div className="overlay-content">
                    <Link to="/">
                        <a onClick={() => { handleCloseClick; handleScrollToGetInTouch('heroHome') }}>Home</a>
                    </Link>
                    <Link to="/about-us">
                        <a onClick={() => { handleCloseClick; handleScrollToGetInTouch('heroCommon') }}>About us</a>
                    </Link>
                    <Link to="/our-work">
                        <a onClick={() => { handleCloseClick; handleScrollToGetInTouch('heroCommon') }}>Our work</a>
                    </Link>
                    <Link to="/volunteer">
                        <a onClick={() => { handleCloseClick; handleScrollToGetInTouch('heroCommon') }}>Volunteer</a>
                    </Link>
                    <Link to="/faq">
                        <a onClick={() => { handleCloseClick; handleScrollToGetInTouch('heroCommon') }}>FAQs</a>
                    </Link>
                    <Link to="/get-involved">
                        <a onClick={() => { handleCloseClick; handleScrollToGetInTouch('heroCommon') }}><strong className='text-yellow'>Get involved</strong></a>
                    </Link>
                    <p className="section__top-margin"><strong>Follow us</strong></p>
                    <div className="overlay__social-media">
                        <div className="icon__background background-lightblue"><a href="https://www.facebook.com/HOOPPeru/" role="button"><i className="fab fa-facebook-f fa-lg text-blue"></i></a></div>
                        <div className="icon__background background-lightblue"><a href="https://twitter.com/hoopperu?lang=en" role="button"><i className="fab fa-twitter fa-lg"></i></a></div>
                        <div className="icon__background background-lightblue"><a href="https://www.instagram.com/hoopperu/?hl=en" role="button"><i className="fab fa-instagram fa-lg"></i></a></div>
                        <div className="icon__background background-lightblue"><a href="https://www.youtube.com/channel/UC6bUtxZ6YRKtqPNjhYqfQIA" role="button"><i className="fab fa-youtube fa-lg"></i></a></div>
                    </div>
                    <Link to="/"><a onClick={()=>{handleScrollToGetInTouch('getInTouch')}}>Contact us</a></Link>
                </div>
            </div>

            <nav className="container navbar navbar-expand-lg">
                <div className="container-fluid align-items-end">
                    <Link to="/">
                        <a className="navbar-brand" onClick={() => { handleScrollToGetInTouch('heroHome') }}><img src="/images/navbar_logo.png" alt="" /></a>
                    </Link>
                    <button onClick={handleOpenClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" /*data-bs-target="#navbarNavDropdown"*/ aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="nav_about-us">About us</a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/about-us">
                                            <a className="dropdown-item" onClick={()=>{handleScrollToGetInTouch('heroCommon')}}><img className="navbar__icon" src="images/navbar_icon-history.svg" alt="Our story" /><p>Our History</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us">
                                        <a className="dropdown-item" onClick={()=>{handleScrollToGetInTouch('our-results')}}><img className="navbar__icon" src="images/navbar_icon-testimonies.png" alt="Tesimonies" /><p>Testimonies</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us">
                                            <a className="dropdown-item" onClick={()=>{handleScrollToGetInTouch('ourPurpose')}}><img className="navbar__icon" src="images/navbar_icon-purpose.png" alt="Purpose" /><p>Purpose</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us">
                                            <a className="dropdown-item" onClick={()=>{handleScrollToGetInTouch('ourImpact')}}><img className="navbar__icon" src="images/navbar_icon-impact.png" alt="Impact" /><p>Impact</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us">
                                            <a className="dropdown-item" onClick={()=>{handleScrollToGetInTouch('team')}}><img className="navbar__icon" src="images/navbar_icon-team.png" alt="Team" /><p>Team</p></a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="nav_our-work">Our work</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkRight">
                                    <li>
                                        <Link to="/our-work">
                                            <a className="dropdown-item" onClick={()=>{handleScrollToGetInTouch('heroCommon')}}><img className="navbar__icon" src="images/navbar_icon-all.png" alt="Our work" /><p>Our work</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/education">
                                            <a className="dropdown-item"><img className="navbar__icon" src="images/navbar_icon-education.png" alt="Education" /><p>Education</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/family">
                                            <a className="dropdown-item" href="./family"><img className="navbar__icon" src="images/navbar_icon-family.png" alt="Family" /><p>Family</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/community">
                                            <a className="dropdown-item" href="./community"><img className="navbar__icon" src="images/navbar_icon-community.png" alt="Community" /><p>Community</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/our-work">
                                            <a className="dropdown-item" href=""><img className="navbar__icon" src="images/navbar_icon-impact.png" alt="Impact" /><p>Impact</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/our-work">
                                            <a className="dropdown-item" href=""><img className="navbar__icon" src="images/navbar_icon-reports.png" alt="reports" /><p>Annual reports</p></a>
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="nav_volunteer">Volunteer</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkRight">
                                    <li>
                                        <Link to="/volunteer">
                                            <a className="dropdown-item" onClick={()=>{handleScrollToGetInTouch('heroCommon')}}><img className="navbar__icon" src="images/navbar_icon-all.png" alt="Volunteer" /><p>Volunteer</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/volunteer">
                                            <a className="dropdown-item" onClick={()=>{handleScrollToGetInTouch('volunteer')}}><img className="navbar__icon" src="images/navbar_icon-opportunities.png" alt="opportunities" /><p>Opportunities</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/volunteer">
                                            <a className="dropdown-item" onClick={() => { handleScrollToGetInTouch('Volunteers') }}><img className="navbar__icon" src="images/navbar_icon-volunteers.png" alt="volunteers" /><p>Our volunteers</p></a>
                                        </Link>
                                    </li>

                                    <li><a className="dropdown-item" href=""><img className="navbar__icon" src="images/navbar_icon-partners.png" alt="partners" /><p>Our partners</p></a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to="/faq">
                                    <a className="nav-link text-grey" id="nav_faq" onClick={() => { handleScrollToGetInTouch('heroCommon') }}>FAQs</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/get-involved">
                                    <a className="nav-link btn btn-primary text-white" id="nav_get-involved" onClick={() => { handleScrollToGetInTouch('heroCommon') }}><strong>Get involved</strong></a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )
}