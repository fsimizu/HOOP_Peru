import React from 'react';
import './getInTouch.css';

export const GetInTouch = () => {
  return (
    <div className='getInTouch section__top-margin'>
      <a id="getInTouch"></a>
      <div className='container'>
        <div className='getInTouch__circle-background'></div>
        <div className='row contentGetInTouch'>
          <div className="col-12 col-lg-6 getInTouch__form">
            <h2 className="section__header">Get in <span className='text-pink'>touch</span></h2>
            <p className="text-grey">Get in touch with HOOP and be a part of our mission to empower communities in the northern cone of Arequipa. Share your name and email to join us in making a positive impact together.</p>

            <form action="https://formsubmit.co/info@hoop.ngo" method="POST" >
              <div><input type="text" id="nombre" placeholder="Name" name="name" required /></div>
              <div><input type="email" id="email" placeholder="Email*" name="email" required /></div>
              <div><input type="tel" id="telefono" placeholder="Phone number*" name="tel" required /></div>
              <div>
                <select id="select" name="select" required>
                  <option value="options">How did you find us?</option>
                  <option value="option1">Volunteer</option>
                  <option value="option2">Partner</option>
                </select>
              </div>

              <input className="hiden" type="hiden" name="_next" defaultValue="http://localhost:5174/" />
              <input className="hiden" type="hiden" name="_captcha" defaultValue="false" />

              <button type="submit">Send</button>

            </form>

          </div>

          <div className="col-12 col-lg-5 getInTouch__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.0700195173727!2d-71.56288472611996!3d-16.31936618439694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x914249cd863834bf%3A0x195a3f56e7a9e7ef!2sAsociaci%C3%B3n%20Flora%20Trist%C3%A1n!5e0!3m2!1ses!2sar!4v1687354628206!5m2!1ses!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>

      </div>

    </div>

  )
}