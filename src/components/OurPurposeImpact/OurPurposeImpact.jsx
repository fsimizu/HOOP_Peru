import React from 'react'
import "./ourPurposeImpact.css"

const OurPurposeImpact = () => {
  return (
    <>
      <section id='ourPurpose' className="row purpose section__top-margin">
  
        <div className="col-12 col-md-6 contPurpose">
          <h2 className='section__header '>Our purpose</h2>
          <p className="text-main text-left">On the outskirts of the city of Arequipa many families have migrated from the andes in the search of better lives for their children. Due to lack of opportunities and economic difficulties they have established themselves on the edge of the city in what is called “Asentamiento Humano”. There, very few public services are available and the living conditions are difficult. HOOP operates where the poverty is high, many houses do not have running water or electricity, and the household income is very low.</p>
          <p className="text-main text-left">Most moms are stay-at- home moms, and often have not had the chance to finish school. The fathers mostly work informally in construction and barely make a living. The children will often work with their parents spending time outside of school.</p>        
          <p className="text-main text-left">At HOOP, we know them all, we have been with our families for the past 10 years, because they deserve a fighting chance and they deserve opportunities. We started with one English class of 20 students in one room, and we are now teaching 120 students, 30 mothers and we offer psychological counseling, workshops, micro-finances, health campaigns and many other activities.</p>
        </div>
        <div className="col-12 col-md-6 imgPurpose">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/pOmbGOzIygI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </section>
      <section id='ourImpact' className="row impact section__top-margin">
        <div className="col-12 col-md-6 imgImpact">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/axkhCK__cVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="col-12 col-md-6 contImpact">
          <h2 className='section__header'>Our impact</h2>
          <p className="text-main text-left">From 2012 up until now, HOOP has supported more than 230 families. 120 students are receiving english and/or coding classes, the average attendance to the classes is 80%.</p>

          <p className="text-main text-left">99 families are receiving psychological support by our mental health team made of 6 members.</p>

          <p className="text-main text-left">Over the years, more than 400 volunteers, national & international, have helped us in our projects and we have launched 2 social companies enabling 25 to get trained in professional knitting and receive an additional income.</p>
        </div>
      </section>
    </>
  )
}

export default OurPurposeImpact