import Image from "next/image";
import VectorBackgroundWhite from "../../../public/images/bruno/VectorWhite.png";
import ImagePlat1 from "../../../public/images/recettes/plat7.jpg";
import ImagePlat2 from "../../../public/images/recettes/plat8.jpg";
import ImagePlat3 from "../../../public/images/recettes/plat9.jpg";
// import ImagePlat1 from "../../../public/images/bruno/plat1.png";
// import ImagePlat2 from "../../../public/images/bruno/plat5.png";
// import ImagePlat3 from "../../../public/images/bruno/plat6.png";
import RowRecette from "./RowRecette";

const lines = [
  {
    image: ImagePlat1,
    text: (
      <>
        Epaule d&#39;agneau confite, sumac orange et graines de fenouil
      </>
    ),
    href: "/recettes/epaule-agneau-confite",
  },
  {
    image: ImagePlat2,
    text: <>Saumon confit aux asperges, pommes de terre nouvelles, gazpacho vert</>,
    href: "/recettes/saumon-confit-asperges",
  },
  {
    image: ImagePlat3,
    text: <>Mousse de fraises et sirop au basilic</>,
    href: "/recettes/mousse-fraises-et-sirop-basilic",
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
