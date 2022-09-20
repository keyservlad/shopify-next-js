import Image from "next/image";
import VectorBackground from "../../../public/images/bruno/Vector.png";
import VectorBackgroundWhite from "../../../public/images/bruno/VectorWhite.png";

const DernieresRecettes = () => {
  return (
    <div className="w-full h-96 relative pt-11">
      <div className="absolute top-0 left-0 w-full">
        <div className="relative h-96">
          <Image
            src={VectorBackground}
            alt="Image fond d'écran bruno"
            objectFit="contain"
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="absolute top-11 left-0 w-full">
        <div className="relative h-96">
          <Image
            src={VectorBackgroundWhite}
            alt="Image fond d'écran bruno"
            objectFit="contain"
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>
      {/* find a solution to get the spacing right in the y axis */}
      qwerty
    </div>
  );
};

export default DernieresRecettes;
