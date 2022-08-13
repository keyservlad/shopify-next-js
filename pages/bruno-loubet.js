import DernieresRecettes from "../components/Loubet/DernieresRecettes";
import HeroLoubet from "../components/Loubet/HeroLoubet";
import LinesTextImage from "../components/Loubet/LinesTextImage";

const brunoloubet = () => {
  return (
    <div className="">
      <HeroLoubet />
      <LinesTextImage lineNumber={1} />
      <LinesTextImage lineNumber={2} />
      <LinesTextImage lineNumber={3} />
      <DernieresRecettes />
    </div>
  );
};

export default brunoloubet;
