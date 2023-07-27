import React from "react";
import './educationInitiatives.css';

export function EducationInitiatives() {
    return (
        <div className="educationInitiatives__container section__top-margin">
            <h2 className="section__header">Our education initiatives</h2>
            <img className="section__underline" src="/images/underline.svg" alt="" />


            <div className="educationInitiatives__cards justify-content-center">
                <div className="card">
                    <div className="educationInitiatives__card-content overflow-hidden" id="educationInitiatives_card1">
                        <h2 className='section__header'>Primary & Secondary education for adults</h2>
                        <div className="educationInitiatives__border">
                            <p>We value education and <strong>encourage the mothers in their community</strong> to pursue the completion of their education alongside CEBA Micaela Bastidas to ensure <strong>better working opportunities.</strong></p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="educationInitiatives__card-content overflow-hidden" id="educationInitiatives_card2">
                        <h2>The Coding Kuska project</h2>
                        <div className="educationInitiatives__border">
                        <p>"Kuska" means together in quechua and through that project, HOOP enables members of the community to learn about programming, so they can broaden their horizons and seek a better future.</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="educationInitiatives__card-content overflow-hidden" id="educationInitiatives_card4">
                        <h2>English with HOOP</h2>

                        <div className="educationInitiatives__border">
                        <p><strong>We offer daily english classes </strong>to students aged from 6 to 17 years old that strengthen their knowledge, expose them to <strong>new cultures and give them an edge in life.</strong></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}