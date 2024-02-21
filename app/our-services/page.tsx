import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Read more about what we offer at Elco.",
  // other metadata
};

const OurTeamPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description="Read more about what we offer at Elco."
      />
      <Pricing />
    </>
  );
};

export default OurTeamPage;
