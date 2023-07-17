import React from 'react'
import "./ourPrograms.css"

const OurPrograms = () => {
  return (
    <>
    <section id="ourPrograms" className='ourPrograms section__top-margin3'>
                <h2 className='section__header'>Our Programs</h2>
                <img className="section__underline" src="/images/underline.svg" alt="" />
                <div className="row program">
                    <div className="col-12 col-md-6 container section__top-margin">
                        <div>
                            <h3>Education</h3>
                            <p className="text-main text-left">We believe that education is the pillar to improving the lives of our community members, which is why we offer support for children, adolescents and adults. Helping the young ones overcome academic difficulties, and motivating the adults who haven’t concluded their education to do so through our alliance with CEBA Micaela Bastidas. Our multiple allies help us offer different types of options for our community, so they can see new ways to pursue their education and better their lives.</p>
                            <a className='learnMore' href="./education">Learn more..</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 imgPrograms section__top-margin">
                        <div>
                            <img src="./images/ourWork/ourPrograms1.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row program">
                    <div className="col-12 col-md-6 imgPrograms2 section__top-margin">
                        <div>
                            <img src="./images/ourWork/ourPrograms2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 container order section__top-margin">
                        <div>
                            <h3>Family</h3>
                            <p className="text-main text-left">This multidisciplinary program seeks not only the mental and emotional well-being of the community but also its physical health. Giving them access to preventative health programs, medical campaigns, and so on. Together with the psychological accompaniment, it offers workshops for each member of the families, seeking to promote integral health and their development as independent people.</p>
                            <a className='learnMore'  href="./family">Learn more..</a>
                        </div>
                    </div>
                </div>
                <div className="row program">
                    <div className="col-12 col-md-6 container section__top-margin">
                        <div>
                            <h3>Community</h3>
                            <p className="text-main text-left">To continue promoting the independent development of the community, and to push their own progress, we support them by giving them access to workshops in topics such as administration and generation of different products and services according to their abilities and talents. Thus fostering their autonomy and professional development. We also offer assistance in legal or medical emergencies, as well as the management of donations that enter through allied companies.</p>
                            <a className='learnMore'  href="./community">Learn more..</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 imgPrograms section__top-margin">
                        <div >
                            <img src="./images/ourWork/ourPrograms3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default OurPrograms