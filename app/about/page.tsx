import AboutHero from "@/components/AboutHero";
import FeaturesHero from "@/components/FeaturesHero";


export const metadata = {
  title: "About us",
};

async function AboutPage() {

  return (
    <>
   <AboutHero/>
   <FeaturesHero/>
    </>
  );
}

export default AboutPage;
