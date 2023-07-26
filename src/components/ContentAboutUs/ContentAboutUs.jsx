import React from 'react'
import "./contentAboutUs.css"


const ContentAboutUs = () => {
    return (
        <>
            <section id="ourValues" className="container our section__top-margin" >
                <div className="row misionVision">
                    <div className=" col-12 col-md-6">
                        <div className="icon-title">
                            <img src="/images/vision_icon2.svg" alt="" />
                            <div className="title">
                                <h2 className='section__header'>Our vision</h2>
                            </div>
                        </div>
                        <div className="text.main text-left">
                            <p>
                                <strong>Families transforming communities.</strong> <br />
                                Our goal is to provide people with the necessary tools for them to become agent of the change within their own community and generate their own development.
                            </p>
                        </div>

                    </div>
                    <div className=" col-12 col-md-6">
                        <div className="icon-title">
                            <img className="icon1" src="/images/vision_icon1.svg" alt="" />
                            <div className="title">
                                <h2 className='section__header'>Our mission</h2>
                            </div>
                        </div>
                        <div className="text.main text-left">
                            <p> <strong>To  promote the comprehensive development of individuals and their families through education.</strong>
                            We understand education as the promotion of knowledge through skills development, workshop and academic activities to improve people's abilities</p>
                        </div>
                    </div>

                </div>

                <div className="row values">
                    <h2 className='section__header'>Our values</h2>
                    <div className="col-12 col-md-4">
                        <h3>Collaboration</h3>
                        <p>We constantly work towards building a cooperative environment where respect, tolerance and kindness prevail.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h3>Trust</h3>
                        <p>We maintain a close relationship with our collaborators and participants based on transparency and communication.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h3>Dynamism</h3>
                        <p>
                            Our work is constantly adapting to changes; generating a creative, dedicated and flexible environment.
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ContentAboutUs