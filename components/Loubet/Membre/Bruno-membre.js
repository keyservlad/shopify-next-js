import Image from "next/image";
import { createRef } from "react";
import HeaderMembre from "../../../public/images/bruno/header-membres.png";
import MembresAccueil1 from "../../../public/images/bruno/membres-accueil-1.png";
import MembresAccueil2 from "../../../public/images/bruno/membres-accueil-2.png";
import MembresAccueil3 from "../../../public/images/bruno/membres-accueil-3.png";
import BrunoPropose from "./BrunoPropose";

const col1 = {
  imageSrc: MembresAccueil1,
  imageAlt: "Image Bruno Loubet",
  title: <>La cuisine selon Bruno</>,
  text: (
    <>
      Ce n&#39;est pas nécessaire de faire compliqué… pour faire bon&nbsp;! Une
      herbe, une épice, une cuisson maitrisée, un équilibre des saveurs… et
      parfois une “pincée” d&#39;audace. Voila la recette pour “bien faire et
      rendre heureux”&nbsp;!
    </>
  ),
};
const col2 = {
  imageSrc: MembresAccueil2,
  imageAlt: "Image Bruno Loubet",
  title: <>A l&#39;école de Bruno</>,
  text: (
    <>
      Au fil des recettes, je vous propose de partager mon univers. Laissez-vous
      guider… EMOVIN se charge du reste ! “Vos amis ne vous regarderont plus de
      la même façon”&nbsp;😉
    </>
  ),
};
const col3 = {
  imageSrc: MembresAccueil3,
  imageAlt: "Image Bruno Loubet",
  title: <>Et pour l&#39;histoire</>,
  text: (
    <>
      A la fin des années 80, sous la supervision de Bruno (déjà auréolé de
      nombreuses distinctions culinaires), Patrick, Jean-Louis & Bruno ont déjà
      travaillé ensemble à “Le Petit Blanc” à Oxford (Angleterre), 2ème
      restaurant de Raymond Blanc “Manoir aux quat&#39;saisons” - 2 étoiles
      Michelin. Avec EMOVIN, voilà notre trio recomposé&nbsp;!
    </>
  ),
};

const cols = [col1, col2, col3];

const BrunoMembre = () => {
  const refBrunoPropose = createRef();

  const scrollBrunoPropose = () => {
    refBrunoPropose.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="relative w-full">
        {/* TODO larger height on mobile */}
        <Image
          src={HeaderMembre}
          alt="Image fond d'écran bruno"
          objectFit="contain"
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className="px-5 lg:w-1/2 mx-auto text-center">
        <h1 className="">Chers amis,</h1>
        <p className="mt-8 font-light text-2xl">
          Conjuguer évènement, saison, gourmandise et vin… au travers de
          quelques recettes imaginées et créés pour vous, pour EMOVIN&nbsp;!
          Voilà ce que vous trouverez dans ma rubrique “Le Chef Bruno vous
          propose”.
        </p>
        {/* TODO add scroll for now but when history page is implemented link to this page */}
        <button
          onClick={() => {
            scrollBrunoPropose();
          }}
          className="bg-redWine text-white mt-8 font-bold border-solid rounded-xl border-redWine border-4 px-4 py-3 cursor-pointer hover:text-redWine hover:bg-white hover:border-redWine"
        >
          Découvrez mes recettes pour EMOVIN
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-28 align-center justify-center mt-32 px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40">
        {cols.map((col, index) => (
          <div key={index} className="text-left basis-1/3">
            <div
              className={`relative flex justify-center ${
                index !== 0 ? "mt-20" : ""
              } lg:mt-0`}
            >
              <Image
                src={col.imageSrc}
                alt={col.imageAlt}
                objectFit="contain"
                quality={100}
                placeholder="blur"
              />
            </div>
            <h1 className="text-3xl mt-5">{col.title}</h1>
            <p className="mt-3">{col.text}</p>
          </div>
        ))}
      </div>
      <BrunoPropose refBrunoPropose={refBrunoPropose} />
    </>
  );
};

export default BrunoMembre;
