import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
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
      <Pricing />
    </>
  );
};

export default OurTeamPage;
