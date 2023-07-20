import React from 'react'
import "./routeVolunteer.css"
import { Card } from '@mui/material'
import Slider from "react-slick";

const ContentVolunteer = () => {
    return (
<section >
<div className='container volunteer'>
    <h2 className='section__header'>Volunteer opportunities & Internships</h2>
    <p className='text-main'>We could use some extra pairs of hands to help the community of Flora Tristán. You can be part of the change we are seeking to make by participating in our volunteer and internship opportunities*.</p>
    <p className='text-main strong'>Check out our active positions by clicking the banner below:</p>
    <div className='bannerVolunteer'>
        <div className='banner'>
          <a target='_blank' href="https://linktr.ee/welcomevolunteers"><img src="./images/volunteer/bannerVolunteer.png" alt="" /></a>  
        </div>
          
    </div>
<p className='text-main'>*All of our positions are volunteer/internship positions and are therefore unpaid.</p>
    <h3>Do you have questions about volunteering in hoop?</h3>
    <h3>Read our FAQ or send us an email at info@hoop.ngo To learn more about our work, you can review our Annual Reports.</h3>
</div>          
        </section>

    )
}

export default ContentVolunteer