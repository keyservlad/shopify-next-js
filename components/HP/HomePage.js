import { createRef } from "react";
import Carousel from "./Carousel";
import Fidelite from "./Fidelite";
import HeroSection from "./HeroSection";
import LeBonCoup from "./LeBonCoup";
import MeilleuresVentes from "./MeilleuresVentes";
import NosCartesMembres from "./NosCartesMembres";
import NotreConcept from "./NotreConcept";

import { useSession, signOut } from "next-auth/react";

const HomePage = ({ products }) => {
  const sessiondata = useSession();
  console.log(sessiondata);
  const refButtonHeroHP = createRef();
  const SLIDE_COUNT = 3;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <button onClick={() => signOut()}>logout</button>
      <HeroSection refButtonHeroHP={refButtonHeroHP} />
      <NosCartesMembres refButtonHeroHP={refButtonHeroHP} />
      <LeBonCoup />
      <MeilleuresVentes products={products} />
      <Fidelite />
      <Carousel slides={slides} />
      <NotreConcept />
    </>
  );
};

export default HomePage;
