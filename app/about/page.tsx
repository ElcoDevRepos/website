import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Team from "@/components/Team";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Read more about us and our team",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description=""
      />
      <AboutSectionOne />
      <SectionTitle
          title="Our Team"
          paragraph=""
          center
          width="665px"
        />
      <Team />
    </>
  );
};

export default AboutPage;
