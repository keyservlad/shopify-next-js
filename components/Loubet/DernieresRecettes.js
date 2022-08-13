import Image from "next/image";
import VectorBackground from "../../public/images/bruno/Vector.png";

const DernieresRecettes = () => {
  return (
    <div className="w-full h-96">
      <div className="relative h-96">
        <Image
          src={VectorBackground}
          alt="Image fond d'écran bruno"
          layout="fill"
          quality={100}
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default DernieresRecettes;
