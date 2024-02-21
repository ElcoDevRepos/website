import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Team from "@/components/Team";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Read more about us and our team",
  // other metadata
};

const OurTeamPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Team"
        description="Learn a little more about who works at Elco"
      />
      <Team />
    </>
  );
};

export default OurTeamPage;
