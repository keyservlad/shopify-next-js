import Image from "next/image";
import Link from "next/link";

import ImageTitleDecouverteBlanc from "../../public/images/cartes/logo_decouverte_blanc.png";
import ImageTitleImmamquablesBlanc from "../../public/images/cartes/logo_immanquables_blanc.png";
import ImageTitlePrestigeBlanc from "../../public/images/cartes/logo_prestige_blanc.png";

import DessinDecouverte from "../../public/images/logo-cartes/dessinDecouverte.png";
import DessinImmanquables from "../../public/images/logo-cartes/dessinImmanquables.png";
import DessinPrestige from "../../public/images/logo-cartes/dessinPrestige.png";

import LogoTrinque from "../../public/images/page-cartes/wine-glass-wine-svgrepo-com.svg";
import PostCard from "../../public/images/page-cartes/postCard.svg";
import HandsCommunity from "../../public/images/page-cartes/handsCommunity.svg";

import { ChevronDownIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { LogoTickVercel } from "./LogoTickVercel";

const DetailsMobile = (props) => {
  const [boxSelected, setBoxSelected] = useState("Decouverte");

  const updateTop = () => {
    const boxMobile = document.getElementById("boxMobile");
    const firstStickyElementMobile = document.getElementById(
      "firstStickyElementMobile"
    );
    const secondStickyElementMobile = document.getElementById(
      "secondStickyElementMobile"
    );
    // const thirdStickyElementMobile = document.getElementById("thirdStickyElementMobile");
    const thirdStickyElementMobiles = document.getElementsByClassName(
      "thirdStickyElementMobile"
    );

    firstStickyElementMobile.style.top = `calc(-${boxMobile.offsetHeight}px - 10px)`;

    const heightOfFirstSticky = firstStickyElementMobile.offsetHeight;

    if (window.innerWidth < 1024) {
      secondStickyElementMobile.style.top = `calc(${heightOfFirstSticky}px - 50px)`;
      for (let i = 0; i < thirdStickyElementMobiles.length; i++) {
        thirdStickyElementMobiles[
          i
        ].style.top = `calc(${heightOfFirstSticky}px - 5px)`;
      }
    }
  };

  const toggleStickyClass = () => {
    const firstStickyElementMobile = document.getElementById(
      "firstStickyElementMobile"
    );
    const buttonMobile = document.getElementById("buttonMobile");
    const el = document.getElementById("secondStickyElementMobile");
    const heightOfFirstSticky = firstStickyElementMobile.offsetHeight;
    const rect = el.getBoundingClientRect();
    const isSticky =
      window.getComputedStyle(el).position === "sticky" &&
      rect.top === heightOfFirstSticky - 50;
    buttonMobile.classList.toggle("py-3", !isSticky);
  };
  useEffect(() => {
    document.getElementById("main").style.overflow = "visible";
    window.addEventListener("resize", updateTop);
    window.addEventListener("scroll", toggleStickyClass);
    updateTop();
    toggleStickyClass(); // Initial check

    return () => {
      window.removeEventListener("resize", updateTop);
      window.removeEventListener("scroll", toggleStickyClass);
    };
  }, []);

  return (
    <>
      {/* title */}
      <div
        id="firstStickyElementMobile"
        className="flex flex-row w-full mt-10 sticky z-20 bg-white"
      >
        {/* decouverte */}
        <div
          style={{
            transitionProperty: "all",
          }}
          onClick={() => {
            setBoxSelected("Decouverte");
            setTimeout(() => {
              updateTop();
            }, 150);
          }}
          className={`relative bg-[#73992C] py-3 transition flex flex-col items-center justify-center text-white ${
            boxSelected === "Decouverte"
              ? "px-3 w-2/3 opacity-100"
              : "opacity-40 w-1/6 px-1"
          }`}
        >
          <p id="boxMobile" className="mb-2">
            Box
          </p>
          <Image
            src={ImageTitleDecouverteBlanc}
            alt="Titre carte découverte"
            quality={100}
            placeholder="blur"
          />
        </div>
        {/* Immanquables */}
        <div
          style={{
            transitionProperty: "all",
          }}
          onClick={() => {
            setBoxSelected("Immanquables");
            setTimeout(() => {
              updateTop();
            }, 150);
          }}
          className={`relative bg-[#7FA8E2] transition py-3 flex flex-col text-white items-center justify-center mx-1 ${
            boxSelected === "Immanquables"
              ? "px-3 w-2/3 opacity-100"
              : "opacity-40 w-1/6 px-1"
          }`}
        >
          <p className="mb-2">Box</p>
          <Image
            src={ImageTitleImmamquablesBlanc}
            alt="Titre carte immanquables"
            quality={100}
            placeholder="blur"
          />
        </div>
        {/* prestige */}
        <div
          style={{
            transitionProperty: "all",
          }}
          onClick={() => {
            setBoxSelected("Prestige");
            setTimeout(() => {
              updateTop();
            }, 150);
          }}
          className={`relative bg-[#901340] transition py-3 flex flex-col text-white items-center justify-center ${
            boxSelected === "Prestige"
              ? "px-3 w-2/3 opacity-100"
              : "opacity-40 w-1/6 px-1"
          }`}
        >
          <p className="mb-2">Box</p>
          <Image
            src={ImageTitlePrestigeBlanc}
            alt="Titre carte prestige"
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>

      {/* Image Carte */}
      <div className="my-5 flex flex-row w-full px-3 mx-auto items-center justify-center">
        <div className="relative m-auto px-10 flex items-center justify-center mx-3">
          <Image
            src={
              boxSelected === "Decouverte"
                ? DessinDecouverte
                : boxSelected === "Immanquables"
                ? DessinImmanquables
                : DessinPrestige
            }
            alt="Dessin carte découverte"
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-row w-full px-3 mx-auto justify-center items-center">
        <div className=" flex items-center justify-center mx-3">
          <div className="text-center flex flex-col">
            <h2
              className={`font-semibold  text-xl ${
                boxSelected === "Decouverte"
                  ? "text-[#73992C]"
                  : boxSelected === "Immanquables"
                  ? "text-[#7FA8E2]"
                  : "text-[#901340]"
              }`}
            >
              {boxSelected === "Decouverte" ? (
                <>Découvertes de l&#39;automne</>
              ) : boxSelected === "Immanquables" ? (
                <>Les grandes appellations françaises</>
              ) : (
                <>Prestige de France</>
              )}
            </h2>
            <p className="">
              {boxSelected === "Decouverte" ? (
                <>
                  Ce ne sont pas les vins les plus connus... et pourtant&nbsp;!
                </>
              ) : boxSelected === "Immanquables" ? (
                <>Il faut les avoir dans sa cave&nbsp;!</>
              ) : (
                <>Les goûter au moins une fois dans sa vie&nbsp;!</>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-row w-full px-3 mx-auto">
        <div className="flex items-center justify-center mx-auto">
          <div className="text-center flex flex-col my-6">
            <p
              className={`text-2xl  font-light ${
                boxSelected === "Decouverte"
                  ? "text-[#73992C]"
                  : boxSelected === "Immanquables"
                  ? "text-[#7FA8E2]"
                  : "text-[#901340]"
              }`}
            >
              <span className="font-semibold">
                {boxSelected === "Decouverte" ? (
                  <>162 € TTC</>
                ) : boxSelected === "Immanquables" ? (
                  <>198 € TTC</>
                ) : (
                  <>270 € TTC</>
                )}
              </span>{" "}
              / an
            </p>
          </div>
        </div>
      </div>

      {/* button */}
      <div
        id="secondStickyElementMobile"
        className="z-10 sticky border-b border-gray-400 py-5 bg-white"
      >
        <div className="flex flex-row w-full px-3 mx-auto">
          <div className="flex items-center justify-center mx-auto w-full">
            <Link
              href={`${
                boxSelected === "Decouverte"
                  ? "/cartes/decouverte"
                  : boxSelected === "Immanquables"
                  ? "/cartes/immanquables"
                  : "/cartes/prestige"
              }`}
              passHref
            >
              <a className="w-full">
                <button
                  style={{
                    transitionProperty: "all",
                  }}
                  id="buttonMobile"
                  className={`text-white w-full font-bold transition border-solid rounded-xl border-[3px] px-5 cursor-pointer hover:bg-white ${
                    boxSelected === "Decouverte"
                      ? "bg-[#73992C] border-[#73992C] hover:text-[#73992C]"
                      : boxSelected === "Immanquables"
                      ? "bg-[#7FA8E2] border-[#7FA8E2] hover:text-[#7FA8E2]"
                      : "bg-[#901340] border-[#901340] hover:text-[#901340]"
                  }`}
                >
                  Je prends ma carte
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* table 1 recevez du vin */}
      <table className="flex-1 table content-start items-stretch border-separate border-spacing-0 w-full border-b border-gray-400 mt-16 px-3 mx-auto">
        <thead>
          <tr>
            <th className="z-20 pb-4 table-cell font-semibold thirdStickyElementMobile bg-white">
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
            {boxSelected === "Decouverte" ? (
              <td className="border-t border-l border-gray-400 text-center w-36">
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
            ) : boxSelected === "Immanquables" ? (
              <td className="border-t border-l border-gray-400 text-center w-36">
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
            ) : (
              <td className="border-t border-l border-gray-400 text-center w-36">
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
            )}
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

            {boxSelected === "Decouverte" ? (
              <td className=" border-t border-l border-gray-400 text-center w-36">
                <LogoTickVercel color={"fill-[#73992C]"} />
              </td>
            ) : boxSelected === "Immanquables" ? (
              <td className=" border-t border-l border-gray-400 text-center w-36">
                <LogoTickVercel color={"fill-[#7FA8E2]"} />
              </td>
            ) : (
              <td className=" border-t border-l border-gray-400 text-center w-36">
                <LogoTickVercel color={"fill-[#901340]"} />
              </td>
            )}
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
            {boxSelected === "Decouverte" ? (
              <td className=" border-t border-l border-gray-400 text-center  text-[#73992C] p-5 relative pb-10 w-36">
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
            ) : boxSelected === "Immanquables" ? (
              <td className="border-t border-l border-gray-400 text-center  text-[#7FA8E2] p-5 pb-10 relative w-36">
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
            ) : (
              <td className="border-t border-l border-gray-400 text-center  text-[#901340] p-5 pb-10 relative w-36">
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
            )}
          </tr>
        </tbody>
      </table>

      {/* table 2 beneficiez des avantages EMOVIN */}
      <table className="flex-1 table content-start items-stretch border-separate border-spacing-0 w-full border-b border-gray-400 mt-16 px-3 mx-auto">
        <thead>
          <tr>
            <th className="z-20 pb-4 table-cell font-semibold thirdStickyElementMobile">
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
                <h5 className="font-caveat text-3xl whitespace-nowrap">
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
                    sur les Prix Publics &#34;Emovin&#34;
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
            {boxSelected === "Decouverte" ? (
              <td className=" border-t border-l border-gray-400 text-center w-36">
                <p className="text-[#73992C] m-auto text-4xl font-semibold font-caveat">
                  10%
                </p>
              </td>
            ) : boxSelected === "Immanquables" ? (
              <td className=" border-t border-l border-gray-400 text-center w-36">
                <p className="text-[#7FA8E2] m-auto text-4xl font-semibold font-caveat">
                  10%
                </p>
              </td>
            ) : (
              <td className=" border-t border-l border-gray-400 text-center w-36">
                <p className="text-[#901340] m-auto text-4xl font-semibold font-caveat">
                  10%
                </p>
              </td>
            )}
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
            {boxSelected === "Decouverte" ? (
              <td className=" border-t border-l border-gray-400 text-center w-36">
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
            ) : boxSelected === "Immanquables" ? (
              <td className=" border-t border-l border-gray-400 text-center w-36">
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
            ) : (
              <td className=" border-t border-l border-gray-400 text-center w-36">
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
            )}
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
            {boxSelected === "Decouverte" ? (
              <td className=" border-t border-l border-gray-400 text-center py-12 w-36">
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
            ) : boxSelected === "Immanquables" ? (
              <td className=" border-t border-l border-gray-400 text-center py-12 w-36">
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
            ) : (
              <td className=" border-t border-l border-gray-400 text-center relative pt-8 pb-24 w-36">
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
            )}
          </tr>
        </tbody>
      </table>

      {/* table 3 accédez aux services EMOVIN */}
      <table className="flex-1 table content-start items-stretch border-separate border-spacing-0 w-full border-b border-gray-400 mt-16 px-3 mx-auto">
        <thead>
          <tr>
            <th className="z-20 pb-4 table-cell font-semibold thirdStickyElementMobile">
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
            {boxSelected === "Decouverte" ? (
              <td className=" border-t border-l border-gray-400 text-center w-36">
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
            ) : boxSelected === "Immanquables" ? (
              <td className=" border-t border-l border-gray-400 text-center w-36">
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
            ) : (
              <td className=" border-t border-l border-gray-400 text-center w-36">
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
            )}
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
            {boxSelected === "Decouverte" ? (
              <td className=" border-t border-l border-gray-400 text-center text-[#73992C] w-36">
                <p className="font-semibold uppercase">GRATUIT</p>
                <p className="font-light text-sm">(places prioritaires)</p>
              </td>
            ) : boxSelected === "Immanquables" ? (
              <td className=" border-t border-l border-gray-400 text-center text-[#7FA8E2] w-36">
                <p className="font-semibold uppercase">GRATUIT</p>
                <p className="font-light text-sm">(places prioritaires)</p>
              </td>
            ) : (
              <td className=" border-t border-l border-gray-400 text-center text-[#901340] w-36">
                <p className="font-semibold uppercase">GRATUIT</p>
                <p className="font-light text-sm">(places prioritaires)</p>
              </td>
            )}
          </tr>
          <tr>
            <th className="py-5 pr-3 pl-4 border-t border-gray-400 text-left">
              <div className="flex flex-row gap-3 items-center">
                <div className="flex flex-col text-left">
                  <p className="font-semibold uppercase">Site web dédié</p>
                  <p className="font-light text-sm">&#34;Espace Membre&#34;</p>
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
            {boxSelected === "Decouverte" ? (
              <td className=" border-t border-l border-gray-400 text-center w-36">
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
            ) : boxSelected === "Immanquables" ? (
              <td className=" border-t border-l border-gray-400 text-center w-36">
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
            ) : (
              <td className=" border-t border-l border-gray-400 text-center w-36">
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
            )}
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
            {boxSelected === "Decouverte" ? (
              <td className=" border-t border-l border-gray-400 text-center text-[#73992C] text-3xl w-36">
                -
              </td>
            ) : boxSelected === "Immanquables" ? (
              <td className=" border-t border-l border-gray-400 text-center text-[#7FA8E2] text-3xl w-36">
                -
              </td>
            ) : (
              <td className=" border-t border-l border-gray-400 text-center w-36">
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
            )}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DetailsMobile;
