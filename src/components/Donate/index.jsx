import React from "react";
import './donate.css';

export function Donate() {
    return (
        <div className="donate__container section__top-margin">

            <a id="donate"></a>
            <div className="text-main text-main-container text-grey">
                <p>The present and future of the people of Flora Tristán is tightly related to the help HOOP can provide them. As a nonprofit organization we rely on the help from others to ensure progress in these people’s lives, that’s why we need the collaboration of partners, sponsors and volunteers.<br />
                    <strong>If you’re looking to make an impact in peoples lives, we encourage you to help us in the way you prefer.</strong></p>
            </div>

            <div>

                <div className="donate__cards justify-content-center">

                    <div className="card">
                        <div className="donate__card-content overflow-hidden">
                            <div className="card-image" id="card-image-1">
                                <h2>Donate</h2>
                            </div>
                            <div className="card-body background-pink">
                                <h5 className="card-title section__subheader">Donate</h5>
                                <p className="text-main card-text">You can help fund education and health for the  people of Flora Tristán by donating to HOOP</p>

                            </div>
                        </div>
                        <div>
                            <a href="https://gofund.me/4ff655cf" className="donate__readMore background-purple btn btn-secondary">Donate</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="donate__card-content overflow-hidden">
                            <div className="card-image" id="card-image-2">
                                <h2>Become a partner</h2>
                            </div>
                            <div className="card-body background-lightblue">
                                <h5 className="card-title section__subheader">Become a partner</h5>
                                <p className="text-main card-text">Advocate for the future of mothers and children of Flora Tristán by partnering with HOOP to ensure a promising future.</p>
                            </div>
                        </div>
                        <div>
                            <a href="mailto:info@hoop.ngo" className="donate__readMore background-green btn btn-secondary">Become a partner</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="donate__card-content overflow-hidden">
                            <div className="card-image" id="card-image-3">
                                <h2>Become a volunteer</h2>
                            </div>
                            <div className="card-body background-lightyellow">
                                <h5 className="card-title section__subheader">Become a volunteer</h5>
                                <p className="text-main card-text">We could use an extra set of hands to help mothers and children of Flora Tristán. You can better the course of their lives by sharing your time and knowledge through one or more of HOOP’s iniciatives.</p>
                            </div>
                        </div>
                        <div>
                            <a href="/volunteer" className="donate__readMore background-yellow btn btn-secondary">Read more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="donate__contact text-white section__top-margin">
                <p className="text-main"><strong>If you are unsure about what action to take or want more information, we would love to help you! Just send an e-mail to director@hoop.ngo or visit our FAQs</strong></p>
            </div>

        </div>
)}