import React from "react";
import './ourInitiatives.css';
import { HeroCommon } from "../HeroCommon";

export function OurInitiatives() {
    return (
        <div className="">
            <h2 className="section__header">Our initiatives</h2>
            <img className="section__underline" src="/images/underline.svg" alt="" />
            <HeroCommon background={"/images/family_hero2.jpg"} title="Te escucho, te acompaño" />
            <div className="text-main text-main-container">
            The "Te escucho, te acompaño" project is based on the main objective of the Family program: to promote and implement initiatives that contribute to emotional and physical wellbeing in the family environment. Mental health is a very important part of a person's life and, although in recent years it has been given the place and importance it deserves, there is still a long way to go. Our team of psychologists will offer free counselling and support throughout the year through talks, workshop and invididual sessions with adults, children and families.
            </div>
        </div>
)}