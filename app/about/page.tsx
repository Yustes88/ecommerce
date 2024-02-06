import AboutHero from "@/components/AboutHero";
import FeaturesAbout from "@/components/FeaturesAbout";
import TeamAbout from "@/components/TeamAbout";

export const metadata = {
  title: "About us",
};

async function AboutPage() {
  return (
    <>
      <AboutHero />
      <FeaturesAbout />
      <TeamAbout />
    </>
  );
}

export default AboutPage;
