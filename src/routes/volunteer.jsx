import React from "react";
import ContentVolunteer from "../components/ContentVolunteer/ContentVolunteer";
import { GetInvolvedBtn } from "../components/GetInvolvedBtn";
import { HeroCommon } from "../components/HeroCommon";
import { Partners } from "../components/HoopPartners";
import HoopVolunteers from "../components/HoopVolunteers/HoopVolunteers";
import { Layout } from "../layout/Layout.jsx";

export function Volunteer() {

  return (
    <div>
      <Layout>
        <GetInvolvedBtn />
        <HeroCommon background={"/images/volunteer_hero.png"} title="Volunteer"/>
        <ContentVolunteer />
        <HoopVolunteers/>
        <Partners />
      </Layout>
    </div>
  );
}

