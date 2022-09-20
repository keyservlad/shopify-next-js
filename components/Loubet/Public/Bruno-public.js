import React from "react";
import DernieresRecettes from "./DernieresRecettes";
import HeroLoubet from "./HeroLoubet";
import LinesTextImage from "./LinesTextImage";
import MotDeBruno from "./MotDeBruno";

const BrunoPublic = () => {
  return (
    <div className="">
      <HeroLoubet />
      {/* <LinesTextImage lineNumber={1} />
      <LinesTextImage lineNumber={2} />
      <LinesTextImage lineNumber={3} /> */}
      <MotDeBruno />
      <DernieresRecettes />
    </div>
  );
};

export default BrunoPublic;
