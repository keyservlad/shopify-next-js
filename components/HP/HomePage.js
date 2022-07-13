import { createRef } from "react";
import HeroSection from "./HeroSection";
import LeBonCoup from "./LeBonCoup";
import NosCartesMembres from "./NosCartesMembres";

const HomePage = () => {
  const refButtonHeroHP = createRef();
  return (
    <>
      <HeroSection refButtonHeroHP={refButtonHeroHP} />
      <NosCartesMembres refButtonHeroHP={refButtonHeroHP} />
      <LeBonCoup />
    </>
  );
};

export default HomePage;
