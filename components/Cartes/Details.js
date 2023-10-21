import Image from "next/image";
import Link from "next/link";

import ImageTitleDecouverteBlanc from "../../public/images/cartes/logo_decouverte_blanc.png";
import ImageTitleImmamquablesBlanc from "../../public/images/cartes/logo_immanquables_blanc.png";
import ImageTitlePrestigeBlanc from "../../public/images/cartes/logo_prestige_blanc.png";
import DetailsMobile from "./DetailsMobile";

import DessinDecouverte from "../../public/images/logo-cartes/dessinDecouverte.png";
import DessinImmanquables from "../../public/images/logo-cartes/dessinImmanquables.png";
import DessinPrestige from "../../public/images/logo-cartes/dessinPrestige.png";

import LogoTrinque from "../../public/images/page-cartes/wine-glass-wine-svgrepo-com.svg";

import { ChevronDownIcon } from "@heroicons/react/outline";
import { useEffect } from "react";

const Details = (props) => {
  useEffect(() => {
    const updateTop = () => {
      const firstStickyElement = document.getElementById("firstStickyElement");
      const secondStickyElement = document.getElementById(
        "secondStickyElement"
      );
      // const thirdStickyElement = document.getElementById("thirdStickyElement");
      const thirdStickyElements =
        document.getElementsByClassName("thirdStickyElement");

      const heightOfFirstSticky = firstStickyElement.offsetHeight;
      secondStickyElement.style.top = `calc(${heightOfFirstSticky}px - 5px)`;

      for (let i = 0; i < thirdStickyElements.length; i++) {
        thirdStickyElements[
          i
        ].style.top = `calc(${heightOfFirstSticky}px - 5px)`;
      }

      if (window.innerWidth < 1024) {
        secondStickyElement.style.top = `calc(${heightOfFirstSticky}px - 12px)`;
        for (let i = 0; i < thirdStickyElements.length; i++) {
          thirdStickyElements[
            i
          ].style.top = `calc(${heightOfFirstSticky}px - 5px)`;
        }
      }
    };
    const main = document.getElementById("main");
    main.style.overflow = "visible";

    updateTop();

    window.addEventListener("resize", updateTop);

    return () => {
      window.removeEventListener("resize", updateTop);
    };
  }, []);

  return (
    <div className="mt-10 relative">
      {/* desktop */}
      <div className="block mb-[1000px]">
        {/* title */}
        <div
          id="firstStickyElement"
          className="flex flex-row w-full max-w-7xl px-3 mx-auto mt-10 sticky top-0 lg:top-[0.5rem] z-20 bg-white"
        >
          {/* void div */}
          <div className="flex-1 flex" />
          {/* decouverte */}
          <div className="relative bg-[#73992C] w-52 xl:w-64 px-10 py-6 flex flex-col items-center justify-center mx-3 text-white">
            <p className="mb-2">Option box</p>
            <Image
              src={ImageTitleDecouverteBlanc}
              alt="Titre carte découverte"
              quality={100}
              placeholder="blur"
            />
          </div>
          {/* Immanquables */}
          <div className="relative bg-[#7FA8E2] w-52 xl:w-64 px-10 py-6 flex flex-col text-white items-center justify-center mx-3">
            <p className="mb-2">Option box</p>
            <Image
              src={ImageTitleImmamquablesBlanc}
              alt="Titre carte immanquables"
              quality={100}
              placeholder="blur"
            />
          </div>
          {/* prestige */}
          <div className="relative bg-[#901340] w-52 xl:w-64 px-10 pt-6 pb-7 flex flex-col text-white items-center justify-center mx-3">
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
        <div className="my-5 flex flex-row w-full max-w-7xl px-3 mx-auto">
          {/* void div */}
          <div className="flex-1 flex" />
          {/* decouverte */}
          <div className="relative m-auto w-52 xl:w-64 px-10 flex items-center justify-center mx-3">
            <Image
              src={DessinDecouverte}
              alt="Dessin carte découverte"
              quality={100}
              placeholder="blur"
            />
          </div>
          {/* Immanquables */}
          <div className="relative m-auto w-52 xl:w-64 px-10 flex items-center justify-center mx-3">
            <Image
              src={DessinImmanquables}
              alt="Dessin carte immanquables"
              quality={100}
              placeholder="blur"
            />
          </div>
          {/* prestige */}
          <div className="relative m-auto w-52 xl:w-64 px-10 flex items-center justify-center mx-3">
            <Image
              src={DessinPrestige}
              alt="Dessin carte prestige"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-row w-full max-w-7xl px-3 mx-auto">
          {/* void div */}
          <div className="flex-1 flex" />
          {/* decouverte */}
          <div className="w-52 xl:w-64 flex items-center justify-center mx-3">
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
          <div className="w-52 xl:w-64 flex items-center justify-center mx-3">
            <div className="text-center flex flex-col">
              <h2 className="font-semibold text-[#7FA8E2] text-xl">
                Les grandes appellations françaises
              </h2>
              <p className="">Il faut les avoir dans sa cave&nbsp;!</p>
            </div>
          </div>
          {/* prestige */}
          <div className="w-52 xl:w-64 flex items-center justify-center mx-3">
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
        <div className=" flex flex-row w-full max-w-7xl px-3 mx-auto">
          {/* void div */}
          <div className="flex-1 flex" />
          <div className="w-52 xl:w-64 flex items-center justify-center mx-3">
            <div className="text-center flex flex-col my-6">
              <p className="text-2xl text-[#73992C] font-light">
                <span className="font-semibold">162 € TTC</span> / an
              </p>
            </div>
          </div>
          <div className="w-52 xl:w-64 flex items-center justify-center mx-3">
            <div className="text-center flex flex-col my-6">
              <p className="text-2xl text-[#7FA8E2] font-light">
                <span className="font-semibold">198 € TTC</span> / an
              </p>
            </div>
          </div>
          <div className="w-52 xl:w-64 flex items-center justify-center mx-3">
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
          className="sticky z-10 border-b border-gray-400 pb-5 bg-white"
        >
          <div className="flex flex-row w-full max-w-7xl px-3 mx-auto">
            {/* void div */}
            <div className="flex-1 flex" />
            {/* decouverte */}
            <div className="w-52 xl:w-64 flex items-center justify-center mx-3">
              <Link href="/cartes/decouverte" passHref>
                <a className="w-full">
                  <button className="bg-[#73992C] text-white w-full font-bold border-solid rounded-xl border-[#73992C] border-[3px] px-5 py-3 cursor-pointer hover:text-[#73992C] hover:bg-white">
                    Je prends ma carte
                  </button>
                </a>
              </Link>
            </div>
            {/* Immanquables */}
            <div className="w-52 xl:w-64 flex items-center justify-center mx-3">
              <Link href="/cartes/immanquables" passHref>
                <a className="w-full">
                  <button className="bg-[#7FA8E2] text-white w-full font-bold border-solid rounded-xl border-[#7FA8E2] border-[3px] px-5 py-3 cursor-pointer hover:text-[#7FA8E2] hover:bg-white">
                    Je prends ma carte
                  </button>
                </a>
              </Link>
            </div>
            {/* prestige */}
            <div className="w-52 xl:w-64 flex items-center justify-center mx-3">
              <Link href="/cartes/prestige" passHref>
                <a className="w-full">
                  <button className="bg-[#901340] text-white w-full font-bold border-solid rounded-xl border-[#901340] border-[3px] px-5 py-3 cursor-pointer hover:text-[#901340] hover:bg-white">
                    Je prends ma carte
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* table 1 recevez du vin */}
        <table className="flex-1 table content-start items-stretch border-separate border-spacing-0 w-full border-b border-gray-400 mt-16 max-w-7xl px-3 mx-auto">
          <thead>
            <tr>
              <th className="sticky z-20 pb-4 table-cell font-semibold thirdStickyElement">
                <div className="flex flex-row items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center">
                    <Image
                      src={LogoTrinque}
                      alt="Logo Trinque"
                      height={30}
                      width={30}
                      quality={100}
                    />
                  </div>
                  <h5 className="font-caveat text-3xl">Recevez du vin</h5>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="py-5 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-center">
                    <p className="font-semibold">Box de printemps</p>
                    <p className="font-light text-sm">
                      (3 bouteilles + fiche dégustation)
                    </p>
                  </div>
                  <div className="ml-auto">
                    <button className="rounded-full border text-xs border-gray-400 px-4 py-2">
                      En savoir
                      <br />
                      plus
                    </button>
                  </div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
            </tr>
            <tr>
              <th className="py-5 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-center">
                    <p className="font-semibold">Box de printemps</p>
                    <p className="font-light text-sm">
                      (3 bouteilles + fiche dégustation)
                    </p>
                  </div>
                  <div className="ml-auto">PLUS PLSU</div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
            </tr>
            <tr>
              <th className="py-5 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-center">
                    <p className="font-semibold">Box de printemps</p>
                    <p className="font-light text-sm">
                      (3 bouteilles + fiche dégustation)
                    </p>
                  </div>
                  <div className="ml-auto">PLUS PLSU</div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
            </tr>
          </tbody>
        </table>

        {/* table 2 beneficiez des avantages EMOVIN */}
        <table className="flex-1 table content-start items-stretch border-separate border-spacing-0 w-full border-b border-gray-400 mt-16 max-w-7xl px-3 mx-auto">
          <thead>
            <tr>
              <th className="sticky z-20 pb-4 table-cell font-semibold thirdStickyElement">
                <div className="flex flex-row items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center">
                    <Image
                      src={LogoTrinque}
                      alt="Logo Trinque"
                      height={30}
                      width={30}
                      quality={100}
                    />
                  </div>
                  <h5 className="font-caveat text-3xl">
                    Bénéficiez des avantages
                  </h5>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="py-4 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-center">
                    <p className="font-semibold">Box de printemps</p>
                    <p className="font-light text-sm">
                      (3 bouteilles + fiche dégustation)
                    </p>
                  </div>
                  <div className="ml-auto">PLUS PLSU</div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
            </tr>
            <tr>
              <th className="py-4 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-center">
                    <p className="font-semibold">Box de printemps</p>
                    <p className="font-light text-sm">
                      (3 bouteilles + fiche dégustation)
                    </p>
                  </div>
                  <div className="ml-auto">PLUS PLSU</div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
            </tr>
            <tr>
              <th className="py-4 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-center">
                    <p className="font-semibold">Box de printemps</p>
                    <p className="font-light text-sm">
                      (3 bouteilles + fiche dégustation)
                    </p>
                  </div>
                  <div className="ml-auto">PLUS PLSU</div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle"></td>
            </tr>
          </tbody>
        </table>
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
