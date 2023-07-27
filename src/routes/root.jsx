import React from "react";
import { AboutUs } from "../components/AboutUs";
import { GetInTouch } from "../components/GetInTouch";
import { GetInvolvedBtn } from "../components/GetInvolvedBtn";
import { Hero } from "../components/Hero";
import { Partners } from "../components/HoopPartners";
import { OurResults } from "../components/OurResults";
import { OurVision } from "../components/OurVision";
import { OurWork } from "../components/OurWork";
import { Layout } from "../layout/Layout.jsx";
import HoopVolunteers from "../components/HoopVolunteers/HoopVolunteers";


export function Root() {

  return (
    <div>
      <Layout>
        <GetInvolvedBtn />
        <Hero />
        <AboutUs />
        <OurVision />
        <OurWork />
        <OurResults title={"Our Results"} />
        <HoopVolunteers/>
        <Partners />
        <GetInTouch />
      </Layout>

    </div>
  );
}
