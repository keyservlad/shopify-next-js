import Image from "next/image";
import ByBruno from "../../public/images/recettes/byBruno.png";

const Recette = ({ recette }) => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-1/2">
        <Image
          src={ByBruno}
          alt="Image Bruno"
          objectFit="contain"
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default Recette;
