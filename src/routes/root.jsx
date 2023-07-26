import React from "react";
import { AboutUs } from "../components/AboutUs";
import { GetInTouch } from "../components/GetInTouch";
import { GetInvolvedBtn } from "../components/GetInvolvedBtn";
import { Hero } from "../components/Hero";
import { Partners } from "../components/HoopPartners";
import { OurImpact } from "../components/OurImpact";
import { OurResults } from "../components/OurResults";
import { OurVision } from "../components/OurVision";
import { OurWork } from "../components/OurWork";
import { Layout } from "../layout/Layout.jsx";


export function Root() {

  return (
    <div>
      <Layout>
        <GetInvolvedBtn />
        <Hero />
        <AboutUs />
        <OurVision />
        <OurWork />
        <OurImpact />
        <OurResults title={"Our Results"} />
        <Partners />
        <GetInTouch />
      </Layout>

    </div>
  );
}
