import { createRef } from "react";
import Carousel from "./Carousel";
import Fidelite from "./Fidelite";
import HeroSection from "./HeroSection";
import LeBonCoup from "./LeBonCoup";
import MeilleuresVentes from "./MeilleuresVentes";
import NosCartesMembres from "./NosCartesMembres";

const HomePage = ({ products }) => {
  const refButtonHeroHP = createRef();
  const SLIDE_COUNT = 3;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <HeroSection refButtonHeroHP={refButtonHeroHP} />
      <NosCartesMembres refButtonHeroHP={refButtonHeroHP} />
      <LeBonCoup />
      <MeilleuresVentes products={products} />
      <Fidelite />
      <Carousel slides={slides} />
    </>
  );
};

export default HomePage;
