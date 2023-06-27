import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";

export function OurWork() {

  return (
    <div>
      <Navbar />
      <HeroCommon background={"/images/ourWork_hero.png"} title="Our work"/>
      <Footer />
    </div>
  );
}

