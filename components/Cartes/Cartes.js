import Image from "next/image";
import FondHeader from "../../public/images/cartes/fond_header_cartes.jpg";
import ImageTitleDecouverte from "../../public/images/logo-cartes/decouverte.png";
import ImageTitleImmanquables from "../../public/images/logo-cartes/immanquables.png";
import ImageTitlePrestige from "../../public/images/logo-cartes/prestige.png";
import DessinDecouverte from "../../public/images/logo-cartes/dessinDecouverte.png";
import DessinImmanquables from "../../public/images/logo-cartes/dessinImmanquables.png";
import DessinPrestige from "../../public/images/logo-cartes/dessinPrestige.png";
import Link from "next/link";
import Details from "./Details";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { createRef } from "react";

const Cartes = () => {
  const refDetailsSection = createRef();
  const refDecouverteMobile = createRef();
  const refImmanquablesMobile = createRef();
  const refPrestigeMobile = createRef();

  const scrollDetailsSection = () => {
    refDetailsSection.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollDecouverteMobile = () => {
    refDecouverteMobile.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollImmanquablesMobile = () => {
    refImmanquablesMobile.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollPrestigeMobile = () => {
    refPrestigeMobile.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col w-full align-center justify-center text-center">
      <div className="sm:mx-10 lg:mx-20 xl:mx-28 2xl:mx-40 relative">
        <Image
          src={FondHeader}
          alt="Fond header cartes"
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className="px-5 md:w-1/2 md:p-0 mx-auto">
        <h1 className="">Trois cartes membre et encore plus d'avantages</h1>
        <p className="text-2xl font-light mt-6">
          Avec chaque carte membre, profitez de plein d&#39;avantages autour du
          vin et dans notre cave. Et deux fois par an d&#39;une wine box
          composée de trois bouteilles du pur plaisir&nbsp;!
        </p>
        <p className="font-light mt-6">
          Offre pour les résidents français, pour les étrangers,{" "}
          <span className="underline">nous&nbsp;consulter</span>
          {/* TODO add formulaire de contact ici */}
        </p>
      </div>
      {/* carte decouverte */}
      <div className="bg-[#F8FAF8] mt-10">
        {/* TODO center that div */}
        <div className="md:w-2/3 mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-16 p-10">
          <div className="relative basis-1/3">
            <Image
              src={DessinDecouverte}
              alt="Dessin carte découverte"
              quality={100}
              placeholder="blur"
            />
          </div>
          <div className="basis-2/3 text-left mt-6 md:mt-0">
            <div className="relative">
              <Image
                src={ImageTitleDecouverte}
                alt="Titre carte découverte"
                quality={100}
                placeholder="blur"
              />
            </div>
            <h2 className="text-xl font-semibold">Les pépites du moment</h2>
            <p>Ce ne sont pas les vins les plus connus... et pourtant&nbsp;!</p>
            <p className="text-[#73992C] font-light text-2xl mt-6">
              <span className="font-semibold">98 €</span> / an{" "}
              <span className="text-base text-black">
                (+ 7,20€ pour la livraison à domicile)
              </span>
            </p>
            <Link href="/cartes/decouverte" passHref>
              <a>
                <button className="mt-3 bg-[#73992C] text-white font-bold border-solid rounded-xl border-[#73992C] border-[3px] px-5 py-3 cursor-pointer hover:text-[#73992C] hover:bg-white">
                  Choisir la carte découverte
                </button>
              </a>
            </Link>
            <p
              onClick={() => {
                scrollDetailsSection();
              }}
              className="underline cursor-pointer mt-6 hidden lg:block"
            >
              Plus d&#39;informations sur la carte "DÉCOUVERTE"
              <ChevronDownIcon className="inline-block w-3 h-3 ml-2" />
            </p>
            <p
              onClick={() => {
                scrollDecouverteMobile();
              }}
              className="underline cursor-pointer mt-6 lg:hidden"
            >
              Plus d&#39;informations sur la carte "DÉCOUVERTE"
              <ChevronDownIcon className="inline-block w-3 h-3 ml-2" />
            </p>
          </div>
        </div>
      </div>
      {/* carte immanquables */}
      <div className="bg-[#F8FAF8] mt-10">
        {/* TODO center that div */}
        <div className="md:w-2/3 mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-16 p-10">
          <div className="relative basis-1/3">
            <Image
              src={DessinImmanquables}
              alt="Dessin carte immanquables"
              quality={100}
              placeholder="blur"
            />
          </div>
          <div className="basis-2/3 text-left mt-6 md:mt-0">
            <div className="relative">
              <Image
                src={ImageTitleImmanquables}
                alt="Titre carte immanquables"
                quality={100}
                placeholder="blur"
              />
            </div>
            <h2 className="text-xl font-semibold">
              Les Grandes Appellations françaises
            </h2>
            <p>Il faut les avoir dans sa cave...</p>
            <p className="text-[#7FA8E2] font-light text-2xl mt-6">
              <span className="font-semibold">135 €</span> / an{" "}
              <span className="text-base text-black">
                (+ 7,20€ pour la livraison à domicile)
              </span>
            </p>
            <Link href="/cartes/immanquables" passHref>
              <a>
                <button className="mt-3 bg-[#7FA8E2] text-white font-bold border-solid rounded-xl border-[#7FA8E2] border-[3px] px-5 py-3 cursor-pointer hover:text-[#7FA8E2] hover:bg-white">
                  Choisir la carte IMMANQUABLES
                </button>
              </a>
            </Link>
            <p
              onClick={() => {
                scrollDetailsSection();
              }}
              className="underline cursor-pointer mt-6 hidden lg:block"
            >
              Plus d&#39;informations sur la carte "IMMANQUABLES"
              <ChevronDownIcon className="inline-block w-3 h-3 ml-2" />
            </p>
            <p
              onClick={() => {
                scrollImmanquablesMobile();
              }}
              className="underline cursor-pointer mt-6 lg:hidden"
            >
              Plus d&#39;informations sur la carte "IMMANQUABLES"
              <ChevronDownIcon className="inline-block w-3 h-3 ml-2" />
            </p>
          </div>
        </div>
      </div>
      {/* carte prestige */}
      <div className="bg-[#F8FAF8] mt-10">
        {/* TODO center that div / might be ok actually */}
        <div className="md:w-2/3 mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-16 p-10">
          <div className="relative basis-1/3">
            <Image
              src={DessinPrestige}
              alt="Dessin carte prestige"
              quality={100}
              placeholder="blur"
            />
          </div>
          <div className="basis-2/3 text-left mt-6 md:mt-0">
            <div className="relative">
              <Image
                src={ImageTitlePrestige}
                alt="Titre carte prestige"
                quality={100}
                placeholder="blur"
              />
            </div>
            <h2 className="text-xl font-semibold">Le prestige de France</h2>
            <p>Les goûter au moins une fois dans sa vie&nbsp;</p>
            <p>
              C&#39;est un peu pour vous, mais aussi pour épater les
              copains&nbsp;!
            </p>
            <p className="text-[#901340] font-light text-2xl mt-3">
              <span className="font-semibold">195 €</span> / an{" "}
              <span className="text-base text-black">
                (+ 7,20€ pour la livraison à domicile)
              </span>
            </p>
            <Link href="/cartes/prestige" passHref>
              <a>
                <button className="mt-3 bg-[#901340] text-white font-bold border-solid rounded-xl border-[#901340] border-[3px] px-5 py-3 cursor-pointer hover:text-[#901340] hover:bg-white">
                  Choisir la carte PRESTIGE
                </button>
              </a>
            </Link>
            <p
              onClick={() => {
                scrollDetailsSection();
              }}
              className="underline cursor-pointer mt-6 hidden lg:block"
            >
              Plus d&#39;informations sur la carte "Prestige"
              <ChevronDownIcon className="inline-block w-3 h-3 ml-2" />
            </p>
            <p
              onClick={() => {
                scrollPrestigeMobile();
              }}
              className="underline cursor-pointer mt-6 lg:hidden"
            >
              Plus d&#39;informations sur la carte "Prestige"
              <ChevronDownIcon className="inline-block w-3 h-3 ml-2" />
            </p>
          </div>
        </div>
      </div>
      <Details
        refDetailsSection={refDetailsSection}
        refDecouverteMobile={refDecouverteMobile}
        refImmanquablesMobile={refImmanquablesMobile}
        refPrestigeMobile={refPrestigeMobile}
      />
    </div>
  );
};

export default Cartes;
