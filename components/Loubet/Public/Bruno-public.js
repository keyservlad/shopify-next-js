import React from "react";
import HeroLoubet from "./HeroLoubet";
import MotDeBruno from "./MotDeBruno";
import ReservedMembres from "./ReservedMembres";

const BrunoPublic = () => {
  return (
    <div className="">
      <HeroLoubet />
      {/* <LinesTextImage lineNumber={1} />
      <LinesTextImage lineNumber={2} />
      <LinesTextImage lineNumber={3} /> */}
      <MotDeBruno />
      <ReservedMembres />
    </div>
  );
};

export default BrunoPublic;
