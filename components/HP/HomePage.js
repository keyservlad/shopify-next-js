import { createRef } from "react";
import HeroSection from "./HeroSection";
import NosCartesMembres from "./NosCartesMembres";

const HomePage = () => {
  const refButtonHeroHP = createRef();
  return (
    <>
      <HeroSection refButtonHeroHP={refButtonHeroHP} />
      <NosCartesMembres refButtonHeroHP={refButtonHeroHP} />
    </>
  );
};

export default HomePage;
