import Image from "next/image";

import CoeurDecouverte from "../../public/images/mini-logos/decouverte/coeur.svg";
import BouteillesDecouverte from "../../public/images/mini-logos/decouverte/bouteilles.svg";
import MainVerreDecouverte from "../../public/images/mini-logos/decouverte/mainVerre.svg";
import VerresDecouverte from "../../public/images/mini-logos/decouverte/verres.svg";

import CoeurImmanquables from "../../public/images/mini-logos/immanquables/coeur.svg";
import BouteillesImmanquables from "../../public/images/mini-logos/immanquables/bouteilles.svg";
import MainVerreImmanquables from "../../public/images/mini-logos/immanquables/mainVerre.svg";
import VerresImmanquables from "../../public/images/mini-logos/immanquables/verres.svg";
import EtiquetteImmanquables from "../../public/images/mini-logos/immanquables/etiquette.svg";

import CoeurPrestige from "../../public/images/mini-logos/prestige/coeur.svg";
import BouteillesPrestige from "../../public/images/mini-logos/prestige/bouteilles.svg";
import MainVerrePrestige from "../../public/images/mini-logos/prestige/mainVerre.svg";
import VerresPrestige from "../../public/images/mini-logos/prestige/verres.svg";
import EtiquettePrestige from "../../public/images/mini-logos/prestige/etiquette.svg";
import VerreSinglePrestige from "../../public/images/mini-logos/prestige/verreSingle.svg";

const DetailsRows = () => {
  return (
    <>
      {/* first row */}
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
        {/* decouverte */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={CoeurDecouverte}
                  alt="Coeur découverte"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#73992C] font-semibold">
                Accès au programme de fidélité pour des cadeaux
                «&nbsp;privilèges&nbsp;».{" "}
              </span>
              (Accès à des vins de «&nbsp;précision&nbsp;» et des millésimes
              recherchés)
            </p>
          </div>
        </div>
        {/* immanquables */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={CoeurImmanquables}
                  alt="Coeur immanquables"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#7FA8E2] font-semibold">
                Accès au programme de fidélité pour des cadeaux
                «&nbsp;privilèges&nbsp;».{" "}
              </span>
              (Accès à des vins de «&nbsp;précision&nbsp;» et des millésimes
              recherchés)
            </p>
          </div>
        </div>
        {/* prestige */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={CoeurPrestige}
                  alt="Coeur prestige"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#901340] font-semibold">
                Accès au programme de fidélité pour des cadeaux
                «&nbsp;privilèges&nbsp;».{" "}
              </span>
              (Accès à des vins de «&nbsp;précision&nbsp;» et des millésimes
              recherchés)
            </p>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
        {/* decouverte */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex items-center align-center w-full p-6 mt-6 h-full">
            <div className="border-b-2 border-[#73992C] w-10 mx-auto" />
          </div>
        </div>
        {/* immanquables */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={EtiquetteImmanquables}
                  alt="etiquette immanquables"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#7FA8E2] font-semibold">
                Remise de 5% sur notre cave{" "}
              </span>
              (Boutique et séries limitées){" "}
              <span className="text-[#7FA8E2] font-semibold">
                et les opérations ponctuelles «&nbsp;Le Bon Coup&nbsp;»
              </span>
            </p>
          </div>
        </div>
        {/* prestige */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={EtiquettePrestige}
                  alt="etiquette prestige"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#901340] font-semibold">
                Remise de 5% sur notre cave{" "}
              </span>
              (Boutique et séries limitées){" "}
              <span className="text-[#901340] font-semibold">
                et les opérations ponctuelles «&nbsp;Le Bon Coup&nbsp;»
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* third row */}
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
        {/* decouverte */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={VerresDecouverte}
                  alt="Coeur découverte"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#73992C] font-semibold">
                Accès prioritaire aux opérations ponctuelles «&nbsp;Le Bon
                Coup&nbsp;»
              </span>
            </p>
          </div>
        </div>
        {/* immanquables */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={VerresImmanquables}
                  alt="Coeur immanquables"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#7FA8E2] font-semibold">
                Accès prioritaire aux opérations ponctuelles «&nbsp;Le Bon
                Coup&nbsp;»
              </span>
            </p>
          </div>
        </div>
        {/* prestige */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={VerresPrestige}
                  alt="Coeur prestige"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#901340] font-semibold">
                Accès prioritaire aux opérations ponctuelles «&nbsp;Le Bon
                Coup&nbsp;»
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* fourth row */}
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
        {/* decouverte */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={BouteillesDecouverte}
                  alt="Coeur découverte"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#73992C] font-semibold">
                Un conseil personnalisé pour constituer ta cave{" "}
              </span>
              selon tes goûts ou une réponse à un besoin spécifique
              (anniversaire, événements «&nbsp;festifs&nbsp;», cadeaux...)
            </p>
          </div>
        </div>
        {/* immanquables */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={BouteillesImmanquables}
                  alt="Coeur immanquables"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#7FA8E2] font-semibold">
                Un conseil personnalisé pour constituer ta cave{" "}
              </span>
              selon tes goûts ou une réponse à un besoin spécifique
              (anniversaire, événements «&nbsp;festifs&nbsp;», cadeaux...)
            </p>
          </div>
        </div>
        {/* prestige */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={BouteillesPrestige}
                  alt="Coeur prestige"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#901340] font-semibold">
                Un conseil personnalisé pour constituer ta cave{" "}
              </span>
              selon tes goûts ou une réponse à un besoin spécifique
              (anniversaire, événements «&nbsp;festifs&nbsp;», cadeaux...)
            </p>
          </div>
        </div>
      </div>

      {/* fifth row */}
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
        {/* decouverte */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={MainVerreDecouverte}
                  alt="Coeur découverte"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#73992C] font-semibold">
                Accès illimité aux conseils du sommelier par e-mail
              </span>
            </p>
          </div>
        </div>
        {/* immanquables */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={MainVerreImmanquables}
                  alt="Coeur immanquables"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#7FA8E2] font-semibold">
                Accès illimité aux conseils du sommelier par e-mail
              </span>
            </p>
          </div>
        </div>
        {/* prestige */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={MainVerrePrestige}
                  alt="Coeur prestige"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#901340] font-semibold">
                Accès illimité aux conseils du sommelier par e-mail
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* sixth row */}
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
        {/* decouverte */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex align-center items-center w-full p-6 mt-6 h-full">
            <div className="border-b-2 border-[#73992C] w-10 mx-auto" />
          </div>
        </div>
        {/* immanquables */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6"></div>
            </div>
            <p className="text-left">
              <span className="text-[#7FA8E2] font-semibold">
                Audit de ta cave dans une limite de 50 appellations maximum{" "}
              </span>
              (Nous contacter via{" "}
              <span className="underline cursor-pointer">
                contact@emovin.fr
              </span>{" "}
              pour en savoir plus.)
            </p>
          </div>
        </div>
        {/* prestige */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6"></div>
            </div>
            <p className="text-left">
              <span className="text-[#901340] font-semibold">
                Audit de ta cave dans une limite de 100 appellations maximum{" "}
              </span>
              (Nous contacter via{" "}
              <span className="underline cursor-pointer">
                contact@emovin.fr
              </span>{" "}
              pour en savoir plus.)
            </p>
          </div>
        </div>
      </div>

      {/* seventh row */}
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
        {/* decouverte */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex align-center items-center w-full p-6 mt-6 h-full">
            <div className="border-b-2 border-[#73992C] w-10 mx-auto" />
          </div>
        </div>
        {/* immanquables */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex align-center items-center w-full p-6 mt-6 h-full">
            <div className="border-b-2 border-[#7FA8E2] w-10 mx-auto" />
          </div>
        </div>
        {/* prestige */}
        <div className="flex items-center justify-center flex-col ml-6">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={VerreSinglePrestige}
                  alt="Coeur prestige"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-left">
              <span className="text-[#901340] font-semibold">
                Accès prioritaire aux événements organisés par l&#39;équipe
                EMOVIN
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsRows;
