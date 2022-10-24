import Image from "next/image";
import ByBruno from "../../public/images/recettes/byBruno.png";
import VectorBackgroundWhite from "../../public/images/bruno/VectorWhite.png";

const Recette = ({ recette, color }) => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 xl:w-3/5 relative text-center overflow-hidden bg-[#FAF8F8] px-[5%]">
          <div className="relative -mt-10">
            <Image
              src={ByBruno}
              alt="Image Bruno"
              objectFit="contain"
              quality={100}
              placeholder="blur"
            />
          </div>
          <h2 className="text-4xl font-light mt-8">{recette.title}</h2>
          <p className="mt-4">Recette pour {recette.numberPerson} personnes</p>
        </div>
        <div className="w-full aspect-[1.52865957] max-h-[50vh] lg:max-h-full lg:w-1/2 xl:w-2/5 relative text-center mt-5 lg:mt-auto m-auto">
          <Image
            src={recette.image}
            alt="Image recette"
            objectFit="contain"
            layout="fill"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 mt-16 md:space-x-10">
        <div className="md:w-1/3">
          <h2 className="font-bold">INGRÉDIENTS</h2>
          <div className="text-sm leading-6">{recette.ingredients}</div>
        </div>
        <div className="mt-10 md:mt-0 md:w-2/3">{recette.fourneaux}</div>
      </div>
      <div className="w-full relative pt-11">
        <div className="absolute left-0 w-full -z-10">
          <div className="relative h-96">
            <Image
              src={recette.vector}
              alt="Image fond d'écran bruno"
              objectFit="contain"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="w-full aspect-[6.343612]" />
        <div
          className={`pb-20 px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40  ${
            color === "red"
              ? "bg-[#F7EEF2]"
              : color === "white"
              ? "bg-[#F2F5EC]"
              : "bg-[#FEF8F4]"
          } -z-10`}
        >
          <div
            className={`border-t flex items-center flex-col ${
              color === "red"
                ? "border-redWine"
                : color === "white"
                ? "border-[#73992B]"
                : "border-[#F3C186]"
            }`}
          >
            <p className="text-lg font-light mt-10">ET POUR LE VIN…</p>
            <h1 className="text-3xl">Emovin vous recommande</h1>
          </div>
          <div className="flex flex-col md:flex-row mt-10 md:gap-x-20">
            <div className="relative aspect-[0.65] max-h-96 w-full md:w-1/3 text-center flex items-center justify-center mx-auto">
              <Image
                src={recette.imageBouteille}
                alt={"bouteille image"}
                objectFit="contain"
                layout="fill"
                quality={100}
              />
            </div>
            <div className="mt-10 md:w-2/3 md:mt-0">
              {recette.recommande.text}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recette;
