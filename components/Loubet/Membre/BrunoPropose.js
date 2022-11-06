import Image from "next/image";
import VectorBackgroundWhite from "../../../public/images/bruno/VectorWhite.png";
import ImagePlat1 from "../../../public/images/recettes/plat4.png";
import ImagePlat2 from "../../../public/images/recettes/plat5.jpg";
import ImagePlat3 from "../../../public/images/recettes/plat6.png";
// import ImagePlat1 from "../../../public/images/bruno/plat1.png";
// import ImagePlat2 from "../../../public/images/bruno/plat5.png";
// import ImagePlat3 from "../../../public/images/bruno/plat6.png";
import RowRecette from "./RowRecette";

const lines = [
  {
    image: ImagePlat1,
    text: (
      <>
        Pintade rôtie, sel de céleri et mélasse de grenade, pudding aux oignons
        et bacon
      </>
    ),
    href: "/recettes/pintade-rotie",
  },
  {
    image: ImagePlat2,
    text: <>Tartare de saumon</>,
    href: "/recettes/tartare-saumon",
  },
  {
    image: ImagePlat3,
    text: <>Mini pudding aux pruneaux et armagnac</>,
    href: "/recettes/mini-pudding-pruneaux",
  },
];

const BrunoPropose = ({ refBrunoPropose }) => {
  return (
    <div ref={refBrunoPropose} className="w-full relative pt-11">
      <div className="absolute left-0 w-full -z-10">
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
      <div className="w-full aspect-[8.276]" />
      <div className="flex flex-col md:gap-x-24 px-5 lg:px-32 xl:px-40 2xl:px-60 bg-[#FAF8F8] pb-10 justify-center items-center">
        <h1>Le Chef Bruno vous propose</h1>
        <div className="mt-10 mb-32">
          {lines.map((line, index) => (
            <div className="" key={index}>
              <RowRecette line={line} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrunoPropose;
