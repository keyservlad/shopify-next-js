import Image from "next/image";
import Link from "next/link";

import ImageTitleDecouverteBlanc from "../../public/images/cartes/logo_decouverte_blanc.png";
import ImageTitleImmamquablesBlanc from "../../public/images/cartes/logo_immanquables_blanc.png";
import ImageTitlePrestigeBlanc from "../../public/images/cartes/logo_prestige_blanc.png";
import DetailsMobile from "./DetailsMobile";

import DessinDecouverte from "../../public/images/logo-cartes/dessinDecouverte.png";
import DessinImmanquables from "../../public/images/logo-cartes/dessinImmanquables.png";
import DessinPrestige from "../../public/images/logo-cartes/dessinPrestige.png";

import { ChevronDownIcon } from "@heroicons/react/outline";
import { useEffect } from "react";

const Details = (props) => {
  useEffect(() => {
    const main = document.getElementById("main");
    main.style.overflow = "visible";

    const firstStickyElement = document.getElementById("firstStickyElement");
    const secondStickyElement = document.getElementById("secondStickyElement");

    const heightOfFirstSticky = firstStickyElement.offsetHeight;
    secondStickyElement.style.top = `calc(${heightOfFirstSticky}px - 5px)`;
  }, []);

  return (
    <div className="mt-10 relative">
      {/* desktop */}
      <div className="hidden lg:block mb-[1000px]">
        {/* title */}
        <div
          id="firstStickyElement"
          className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 mt-10 grid grid-cols-1 lg:grid-cols-3 sticky top-[0.45rem] z-10"
        >
          {/* decouverte */}
          <div className="relative bg-[#73992C] px-16 xl:px-20 2xl:px-24 py-6 flex flex-col items-center justify-center ml-6 text-white">
            <p className="mb-2">Option box</p>
            <Image
              src={ImageTitleDecouverteBlanc}
              alt="Titre carte découverte"
              quality={100}
              placeholder="blur"
            />
          </div>
          {/* Immanquables */}
          <div className="relative bg-[#7FA8E2] px-16 xl:px-20 2xl:px-24 py-6 flex flex-col text-white items-center justify-center ml-6">
            <p className="mb-2">Option box</p>
            <Image
              src={ImageTitleImmamquablesBlanc}
              alt="Titre carte immanquables"
              quality={100}
              placeholder="blur"
            />
          </div>
          {/* prestige */}
          <div className="relative bg-[#901340] px-16 xl:px-20 2xl:px-24 pt-6 pb-7 flex flex-col text-white items-center justify-center ml-6">
            <p className="mb-2">Option box</p>
            <Image
              src={ImageTitlePrestigeBlanc}
              alt="Titre carte prestige"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
        {/* Image Carte */}
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3">
          {/* decouverte */}
          <div className="relative max-h-64 aspect-1 m-auto">
            <Image
              src={DessinDecouverte}
              alt="Dessin carte découverte"
              quality={100}
              placeholder="blur"
            />
          </div>
          {/* Immanquables */}
          <div className="relative max-h-64 aspect-1 m-auto">
            <Image
              src={DessinImmanquables}
              alt="Dessin carte immanquables"
              quality={100}
              placeholder="blur"
            />
          </div>
          {/* prestige */}
          <div className="relative max-h-64 aspect-1 m-auto">
            <Image
              src={DessinPrestige}
              alt="Dessin carte prestige"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
        {/* Details */}
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
          {/* decouverte */}
          <div className="flex items-center  flex-col ml-6">
            <div className="text-center flex flex-col">
              <h2 className="font-semibold text-[#73992C] text-xl">
                Découvertes de l&#39;automne
              </h2>
              <p className="">
                Ce ne sont pas les vins les plus connus... et pourtant&nbsp;!
              </p>
            </div>
          </div>
          {/* Immanquables */}
          <div className="flex items-center flex-col ml-6">
            <div className="text-center flex flex-col">
              <h2 className="font-semibold text-[#7FA8E2] text-xl">
                Les grandes appellations françaises
              </h2>
              <p className="">Il faut les avoir dans sa cave&nbsp;!</p>
            </div>
          </div>
          {/* prestige */}
          <div className="flex items-center flex-col ml-6">
            <div className="text-center flex flex-col">
              <h2 className="font-semibold text-[#901340] text-xl">
                Prestige de France
              </h2>
              <p className="">
                Les goûter au moins une fois dans sa vie&nbsp;!
              </p>
            </div>
          </div>
        </div>
        {/* Price */}
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
          <div className="flex items-center justify-center flex-col ml-6">
            <div className="text-center flex flex-col my-6">
              <p className="text-2xl text-[#73992C] font-light">
                <span className="font-semibold">162 € TTC</span> / an
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col ml-6">
            <div className="text-center flex flex-col my-6">
              <p className="text-2xl text-[#7FA8E2] font-light">
                <span className="font-semibold">198 € TTC</span> / an
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col ml-6">
            <div className="text-center flex flex-col my-6">
              <p className="text-2xl text-[#901340] font-light">
                <span className="font-semibold">270 € TTC</span> / an
              </p>
            </div>
          </div>
        </div>
        {/* button */}
        <div
          id="secondStickyElement"
          className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6 sticky z-10"
        >
          {/* decouverte */}
          <div className="flex items-center justify-center flex-col ml-6">
            <Link href="/cartes/decouverte" passHref>
              <a className="w-full">
                <button className="bg-[#73992C] text-white w-full font-bold border-solid rounded-xl border-[#73992C] border-[3px] px-5 py-3 cursor-pointer hover:text-[#73992C] hover:bg-white">
                  Je prends ma carte
                </button>
              </a>
            </Link>
          </div>
          {/* Immanquables */}
          <div className="flex items-center justify-center flex-col ml-6">
            <Link href="/cartes/immanquables" passHref>
              <a className="w-full">
                <button className="bg-[#7FA8E2] text-white w-full font-bold border-solid rounded-xl border-[#7FA8E2] border-[3px] px-5 py-3 cursor-pointer hover:text-[#7FA8E2] hover:bg-white">
                  Je prends ma carte
                </button>
              </a>
            </Link>
          </div>
          {/* prestige */}
          <div className="flex items-center justify-center flex-col ml-6">
            <Link href="/cartes/prestige" passHref>
              <a className="w-full">
                <button className="bg-[#901340] text-white w-full font-bold border-solid rounded-xl border-[#901340] border-[3px] px-5 py-3 cursor-pointer hover:text-[#901340] hover:bg-white">
                  Je prends ma carte
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="h-96"></div>
      </div>
      {/* mobile */}
      <div className="lg:hidden flex flex-col">
        <DetailsMobile scrollDetailsSection={props.scrollDetailsSection} />
      </div>
    </div>
  );
};

export default Details;
