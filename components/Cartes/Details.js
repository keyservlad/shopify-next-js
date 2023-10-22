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
import PostCard from "../../public/images/page-cartes/postCard.svg";
import HandsCommunity from "../../public/images/page-cartes/handsCommunity.svg";

import { ChevronDownIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { LogoTickVercel } from "./LogoTickVercel";

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
      <div className="block mb-24">
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
                    <p className="font-semibold uppercase">Box de printemps</p>
                    <p className="font-light text-sm">
                      (3 bouteilles + fiche dégustation)
                    </p>
                  </div>
                  <div className="ml-auto">
                    <button
                      onClick={() => {
                        props.setImageContext("Printemps");
                        props.setIsSavoirPlusOpen(true);
                      }}
                      className="rounded-full border text-xs border-gray-400 px-4 py-2 font-normal hover:shadow-lg hover:scale-105"
                    >
                      En savoir
                      <br />
                      plus
                    </button>
                  </div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center">
                <button
                  onClick={() => {
                    props.setImageContext("Printemps");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#73992C]"} />
                </button>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle">
                <button
                  onClick={() => {
                    props.setImageContext("Printemps");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#7FA8E2]"} />
                </button>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle">
                <button
                  onClick={() => {
                    props.setImageContext("Printemps");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#901340]"} />
                </button>
              </td>
            </tr>
            <tr>
              <th className="py-5 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-center">
                    <p className="font-semibold uppercase">Box d&#39;été</p>
                    <p className="font-light text-sm">
                      (3 bouteilles + fiche dégustation)
                    </p>
                  </div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center">
                <LogoTickVercel color={"fill-[#73992C]"} />
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle">
                <LogoTickVercel color={"fill-[#7FA8E2]"} />
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle">
                <LogoTickVercel color={"fill-[#901340]"} />
              </td>
            </tr>
            <tr>
              <th className="py-5 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-center">
                    <p className="font-semibold uppercase">Box d&#39;automne</p>
                    <p className="font-light text-sm">
                      (3 bouteilles + fiche dégustation)
                    </p>
                  </div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle text-[#73992C] p-5 relative pb-10">
                <h3 className="font-semibold">Découvertes d&#39;automne</h3>
                <p className="italic font-light text-sm">
                  Ce ne sont pas les plus connus&nbsp;...
                  <br />
                  et pourtant&nbsp;!
                </p>
                <div className="absolute translate-y-[50%] -translate-x-[50%] bottom-0 left-[50%]">
                  <button
                    onClick={() => {
                      props.setImageContext("DecouverteAutomne");
                      props.setIsSavoirPlusOpen(true);
                    }}
                    className="rounded-full border text-xs border-gray-400 px-4 py-2 font-normal text-black hover:text-[#73992C] hover:shadow-lg hover:scale-105 bg-white"
                  >
                    En savoir
                    <br />
                    plus
                  </button>
                </div>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle text-[#7FA8E2] p-5 pb-10 relative">
                <h3 className="font-semibold">Grandes appellations</h3>
                <p className="italic font-light text-sm">
                  Il faut les avoir dans sa cave&nbsp;!
                </p>
                <div className="absolute translate-y-[50%] -translate-x-[50%] bottom-0 left-[50%]">
                  <button
                    onClick={() => {
                      props.setImageContext("ImmanquablesAutomne");
                      props.setIsSavoirPlusOpen(true);
                    }}
                    className="rounded-full border text-xs border-gray-400 px-4 text-black hover:text-[#7FA8E2] py-2 font-normal hover:shadow-lg hover:scale-105 bg-white"
                  >
                    En savoir
                    <br />
                    plus
                  </button>
                </div>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle text-[#901340] p-5 pb-10 relative">
                <h3 className="font-semibold">Prestige de France</h3>
                <p className="italic font-light text-sm">
                  Les goûter au moins une fois dans sa vie&nbsp;!
                </p>
                <div className="absolute translate-y-[50%] -translate-x-[50%] bottom-0 left-[50%]">
                  <button
                    onClick={() => {
                      props.setImageContext("PrestigeAutomne");
                      props.setIsSavoirPlusOpen(true);
                    }}
                    className="rounded-full border text-xs border-gray-400 px-4 py-2 text-black hover:text-[#901340] font-normal hover:shadow-lg hover:scale-105 bg-white"
                  >
                    En savoir
                    <br />
                    plus
                  </button>
                </div>
              </td>
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
                      src={PostCard}
                      alt="Logo Trinque"
                      height={30}
                      width={30}
                      quality={100}
                    />
                  </div>
                  <h5 className="font-caveat text-3xl">
                    Avantages <span className="text-redWine">EMOVIN</span>
                  </h5>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="py-5 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-left">
                    <p className="font-semibold uppercase">Remise Moyenne</p>
                    <p className="font-light text-sm">
                      sur les Prix Publics &#34;emovin&#34;
                    </p>
                  </div>
                  <div className="ml-auto">
                    <button
                      onClick={() => {
                        props.setImageContext("Boutique");
                        props.setIsSavoirPlusOpen(true);
                      }}
                      className="rounded-full border text-xs border-gray-400 px-4 py-2 font-normal hover:shadow-lg hover:scale-105"
                    >
                      En savoir
                      <br />
                      plus
                    </button>
                  </div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center">
                <p className="text-[#73992C] m-auto text-4xl font-semibold font-caveat">
                  10%
                </p>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle">
                <p className="text-[#7FA8E2] m-auto text-4xl font-semibold font-caveat">
                  10%
                </p>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle">
                <p className="text-[#901340] m-auto text-4xl font-semibold font-caveat">
                  10%
                </p>
              </td>
            </tr>
            <tr>
              <th className="py-5 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-center">
                    <p className="font-semibold uppercase">
                      Programme de fidélité
                    </p>
                  </div>
                  <div className="ml-auto">
                    <button
                      onClick={() => {
                        props.setImageContext("Fidelite");
                        props.setIsSavoirPlusOpen(true);
                      }}
                      className="rounded-full border text-xs border-gray-400 px-4 py-2 font-normal hover:shadow-lg hover:scale-105"
                    >
                      En savoir
                      <br />
                      plus
                    </button>
                  </div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center">
                <button
                  onClick={() => {
                    props.setImageContext("Fidelite");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#73992C]"} />
                </button>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle">
                <button
                  onClick={() => {
                    props.setImageContext("Fidelite");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#7FA8E2]"} />
                </button>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle">
                <button
                  onClick={() => {
                    props.setImageContext("Fidelite");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#901340]"} />
                </button>
              </td>
            </tr>
            <tr>
              <th className="py-5 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-center">
                    <p className="font-semibold uppercase">Ventes privées</p>
                  </div>
                  <div className="ml-auto">
                    <button
                      onClick={() => {
                        props.setImageContext("BonCoup");
                        props.setIsSavoirPlusOpen(true);
                      }}
                      className="rounded-full border text-xs border-gray-400 px-4 py-2 font-normal hover:shadow-lg hover:scale-105"
                    >
                      En savoir
                      <br />
                      plus
                    </button>
                  </div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center py-12">
                <button
                  onClick={() => {
                    props.setImageContext("BonCoup");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#73992C]"} />
                </button>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center py-12">
                <button
                  onClick={() => {
                    props.setImageContext("BonCoup");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#7FA8E2]"} />
                </button>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center relative py-12">
                <button
                  onClick={() => {
                    props.setImageContext("BonCoup");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#901340]"} />
                </button>
                <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-full pb-1">
                  <p className="text-sm text-[#901340]">
                    Accès exclusif
                    <br />
                    aux &#34;allocations réduites&#34;
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* table 3 accédez aux services EMOVIN */}
        <table className="flex-1 table content-start items-stretch border-separate border-spacing-0 w-full border-b border-gray-400 mt-16 max-w-7xl px-3 mx-auto">
          <thead>
            <tr>
              <th className="sticky z-20 pb-4 table-cell font-semibold thirdStickyElement">
                <div className="flex flex-row items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center">
                    <Image
                      src={HandsCommunity}
                      alt="Logo Trinque"
                      height={30}
                      width={30}
                      quality={100}
                    />
                  </div>
                  <h5 className="font-caveat text-3xl">
                    Services <span className="text-redWine">EMOVIN</span>
                  </h5>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="py-5 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-left">
                    <p className="font-semibold uppercase">
                      Conseils personnalisés
                    </p>
                    <p className="font-light text-sm">
                      &#34;Wine Assistance&#34;
                    </p>
                  </div>
                  <div className="ml-auto">
                    <button
                      onClick={() => {
                        props.setImageContext("ConseilPersonnalise");
                        props.setIsSavoirPlusOpen(true);
                      }}
                      className="rounded-full border text-xs border-gray-400 px-4 py-2 font-normal hover:shadow-lg hover:scale-105"
                    >
                      En savoir
                      <br />
                      plus
                    </button>
                  </div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center">
                <button
                  onClick={() => {
                    props.setImageContext("ConseilPersonnalise");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#73992C]"} />
                </button>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle">
                <button
                  onClick={() => {
                    props.setImageContext("ConseilPersonnalise");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#7FA8E2]"} />
                </button>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle">
                <button
                  onClick={() => {
                    props.setImageContext("ConseilPersonnalise");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#901340]"} />
                </button>
              </td>
            </tr>
            <tr>
              <th className="py-5 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-left">
                    <p className="font-semibold uppercase">
                      Invitation aux soirées
                    </p>
                    <p className="font-light text-sm">
                      &#34;Dégustation/vente&#34;
                    </p>
                  </div>
                  <div className="ml-auto">
                    <button
                      disabled
                      onClick={() => {
                        // props.setImageContext("DecouverteAutomne");
                        // props.setIsSavoirPlusOpen(true);
                      }}
                      className="rounded-full border text-xs border-gray-400 px-4 py-2 font-normal hover:shadow-lg hover:scale-105 cursor-not-allowed"
                    >
                      En savoir
                      <br />
                      plus
                    </button>
                  </div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center text-[#73992C]">
                <p className="font-semibold uppercase">GRATUIT</p>
                <p className="font-light text-sm">(places prioritaires)</p>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center text-[#7FA8E2]">
                <p className="font-semibold uppercase">GRATUIT</p>
                <p className="font-light text-sm">(places prioritaires)</p>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center text-[#901340]">
                <p className="font-semibold uppercase">GRATUIT</p>
                <p className="font-light text-sm">(places prioritaires)</p>
              </td>
            </tr>
            <tr>
              <th className="py-5 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-left">
                    <p className="font-semibold uppercase">Site web dédié</p>
                    <p className="font-light text-sm">
                      &#34;Espace Membre&#34;
                    </p>
                  </div>
                  <div className="ml-auto">
                    <button
                      onClick={() => {
                        props.setImageContext("SiteWeb");
                        props.setIsSavoirPlusOpen(true);
                      }}
                      className="rounded-full border text-xs border-gray-400 px-4 py-2 font-normal hover:shadow-lg hover:scale-105"
                    >
                      En savoir
                      <br />
                      plus
                    </button>
                  </div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center">
                <button
                  onClick={() => {
                    props.setImageContext("SiteWeb");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#73992C]"} />
                </button>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle">
                <button
                  onClick={() => {
                    props.setImageContext("SiteWeb");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#7FA8E2]"} />
                </button>
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center align-middle">
                <button
                  onClick={() => {
                    props.setImageContext("SiteWeb");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#901340]"} />
                </button>
              </td>
            </tr>
            <tr>
              <th className="py-5 pr-3 pl-4 border-t border-gray-400 text-left">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-col text-left">
                    <p className="font-semibold uppercase">Audit de cave</p>
                    <p className="font-light text-sm">(sur demande)</p>
                  </div>
                  <div className="ml-auto">
                    <button
                      onClick={() => {
                        props.setImageContext("AuditCave");
                        props.setIsSavoirPlusOpen(true);
                      }}
                      className="rounded-full border text-xs border-gray-400 px-4 py-2 font-normal hover:shadow-lg hover:scale-105"
                    >
                      En savoir
                      <br />
                      plus
                    </button>
                  </div>
                </div>
              </th>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center text-[#73992C] text-3xl">
                -
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center text-[#7FA8E2] text-3xl">
                -
              </td>
              <td className="w-[232px] xl:w-[280px] border-t border-l border-gray-400 text-center">
                <button
                  onClick={() => {
                    props.setImageContext("AuditCave");
                    props.setIsSavoirPlusOpen(true);
                  }}
                  className="hover:scale-110 m-auto flex"
                >
                  <LogoTickVercel color={"fill-[#901340]"} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* mobile */}
      <div className="lg:hidden flex flex-col">
        <DetailsMobile scrollDetailsSection={props.scrollDetailsSection} />
      </div>
    </div>
  );
};

export default Details;
