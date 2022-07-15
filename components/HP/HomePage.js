import { createRef } from "react";
import Fidelite from "./Fidelite";
import HeroSection from "./HeroSection";
import LeBonCoup from "./LeBonCoup";
import MeilleuresVentes from "./MeilleuresVentes";
import NosCartesMembres from "./NosCartesMembres";

const HomePage = ({ products }) => {
  const refButtonHeroHP = createRef();
  return (
    <>
      <HeroSection refButtonHeroHP={refButtonHeroHP} />
      <NosCartesMembres refButtonHeroHP={refButtonHeroHP} />
      <LeBonCoup />
      <MeilleuresVentes products={products} />
      <Fidelite />
    </>
  );
};

export default HomePage;
