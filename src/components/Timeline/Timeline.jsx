import React from 'react'
import "./timeline.css"
import { useEffect, useState } from 'react';


const Timeline = () => {

    useEffect(() => {
        const timeline = document.querySelector('.timeline');
        const topChildDivs = document.querySelectorAll('.topTimeline .child');
        const bottomChildDivs = document.querySelectorAll('.bottomTimeline .child');
    
        const totalChildDivs = Math.max(topChildDivs.length, bottomChildDivs.length);
    
        const handleTimelineHover = () => {
          for (let i = 0; i < totalChildDivs; i++) {
            setTimeout(() => {
              if (i < topChildDivs.length) {
                topChildDivs[i].style.opacity = 1;
              }
              if (i < bottomChildDivs.length) {
                bottomChildDivs[i].style.opacity = 1;
              }
            }, i * 1500);
          }
        };
    
        timeline.addEventListener('mouseenter', handleTimelineHover);
    
        return () => {
          timeline.removeEventListener('mouseenter', handleTimelineHover);
        };
      }, []);
    
      return (
<section id='timeline' >
  <h2 className='section__header'>
  Our History
  </h2>
  <div className='timeline'>
  <div className='topTimeline'>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2012</h4>  
    </div> 
<div className='pLine'>
  <p>Creation of a little English school in Flora Tristán, Cerro Colorado, Arequipa made of 7 families and 20 children.
 </p>
  </div>
  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2014</h4>  
    </div> 
<div className='pLine'>
  <p>Our Social Work department was created offering services in health, legal and economic advice.
 </p>
  </div>
  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2016</h4>  
    </div> 
<div className='pLine'>
  <p>We moved to our office in Cayma. That included many social activities with volunteers. Great times!
 </p>
  </div>
  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2018</h4>  
    </div> 
<div className='pLine'>
  <p>We were working with up to 159 children and had opened 8 English classes!
 </p>
  </div>
  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2020</h4>  
    </div> 
<div className='pLine'>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet fugiat fugit? </p>
  </div>
  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2022</h4>  
    </div> 
<div className='pLine'>
  <p>Beginning of the constructions of our long awaited Community Center. Very exciting!
</p>
  </div>
  </div>

</div>
    </div>
    <div className='lineTimeline'>
<img src="./images/ourWork/line.png" alt="" />

    </div>
    <div className='bottomTimeline'>
    <div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2013</h4>  
    </div> 
<div className='pLine2'>
  <p>HOOP (Helping Overcome Obstacles Peru) became an officially registered Association!
 </p>
  </div>

  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2015</h4>  
    </div> 
<div className='pLine2'>
  <p>Our Psychology Department was created, offering help regarding emotional and mental health.
 </p>
  </div>
 
  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2017</h4>  
    </div> 
<div className='pLine2'>
  <p>A group of HOOPsters raised 1000$ with the hula hooping on a high altitude challenge!
</p>
  </div>

  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2019</h4>  
    </div> 
<div className='pLine2'>
  <p>A group of HOOPsters did the <br /> “2 Peaks Challenge” Climbing the 3 highest peaks in Scotland, England, and Wales in just 24 hours!
 </p>
  </div>

  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2021</h4>  
    </div> 
<div className='pLine2'>
  <p>We updated our brand logo, our objectives, our mission and vision as well.
</p>
  </div>
 
  </div>

</div>
    </div>
  </div>

  <div className='timelineMobile'>
    <div className='imgTimelineMobile'>
      <img src="./images/timelineMobile.png" alt="" />
    </div>

  </div>
  
  
</section>
  )
}

export default Timeline