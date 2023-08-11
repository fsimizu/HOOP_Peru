import React from "react";
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import './getInvolvedBtn.css';

export function GetInvolvedBtn() {

  const handleScrollToGetInTouch = (id) => {
    setTimeout(()=>{scrollToGetInTouch(id)}, 200);
};

const scrollToGetInTouch = (id) => {
    scroller.scrollTo(id, {
        duration: 400,
      offset: -60,
    });
  };


  return (
    <div className="getInvolvedBtn__container" id="getInvolvedBtn">
      <img src="/images/getInvolved-btn-left.svg" alt="" />

      <Link to="/get-involved">
        <a className="btn btn-primary text-main text-grey"><strong>Get involved</strong></a>
      </Link>

      <img src="/images/getInvolved-btn-right.svg" alt="" />
    </div>
  );
}