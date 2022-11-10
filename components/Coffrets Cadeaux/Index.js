import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImageFairePlais from "../../public/images/coffrets/faire_plais_formatted.png";
import ImageBelleOccas from "../../public/images/coffrets/belle_occas_formatted.png";
import ImageGrandMoment from "../../public/images/coffrets/grand_moment_formatted.png";

const Index = () => {
  return (
    <>
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 flex flex-col items-center text-center pt-10 sm:pt-20 pb-10">
        <div className="max-w-2xl 2xl:max-w-3xl">
          <h1>Nos coffrets Cadeaux Emovin</h1>
          <h1 className="text-redWine mt-3 sm:mt-0 mb-10">
            Offrez du bonheur&nbsp;!
          </h1>
          <p>
            Pour les fêtes, toutes les fêtes, EMOVIN vous propose un large
            éventail de «&nbsp;Coffrets cadeaux 1&nbsp;bouteille&nbsp;»
            sélectionnés minutieusement et adaptés à chaque occasion.
          </p>
          <p className="font-bold">
            Faites votre choix parmi nos 9 vins. Panachages possibles&nbsp;!
          </p>
          <div className="mt-6 mb-14 text-center inline-block">
            <Link href="/coffrets-cadeaux/commander" passHref>
              <a>
                <button className="bg-redWine text-white font-bold border-solid rounded-xl border-redWine border-[3px] px-5 py-3 cursor-pointer w-full sm:w-auto hover:text-redWine hover:bg-white">
                  Je commande
                </button>
              </a>
            </Link>
          </div>
          <h2 className="font-light text-4xl">Nos trois catégories de prix</h2>
        </div>
      </div>

      {/* Faire plaisir */}
      <div className="w-full bg-[#DFED92] relative px-5 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-9">
          <div className="flex items-center justify-center w-full col-span-4">
            <div className="w-full sm:w-2/3 md:w-1/2 relative max-w-[735px] lg:w-full aspect-[1.367] -mt-5 sm:-mt-8 md:-mt-10 -mb-3">
              <Image
                src={ImageFairePlais}
                alt="Faire plaisir"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                quality={100}
                placeholder="blur"
              />
            </div>
          </div>
          <div className="flex flex-col text-center items-center justify-center col-span-5 my-5 ">
            <h2 className="font-caveat font-bold text-5xl mb-5">
              Faire plaisir&nbsp;!
            </h2>
            <p>Saint-Emilion Grand Cru | Château Franc-Grace-Dieu 2015</p>
            <p>Chablis | Propriétaire-viticulteur Denis Race 2021</p>
            <p>Champagne Brut sélection Gremillet</p>
            <div className="flex flex-row justify-center items-center my-4">
              <div className="flex flex-col">
                <p className="text-xs">Prix Public</p>
                <p className="font-semibold text-3xl">35€</p>
              </div>
              {/* make a 1px vertical separator */}
              <div className="w-px h-full bg-black mx-5" />
              <div className="flex flex-col">
                <p className="text-xs">Prix Membre</p>
                <p className="font-semibold text-3xl">30€</p>
              </div>
            </div>
            <p className="text-xs">Prix € TTC par bouteille (tout compris)</p>
          </div>
        </div>
      </div>

      {/* Une belle occasion */}
      <div className="w-full bg-[#92D8FF] relative mt-12 px-5 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-9">
          <div className="flex flex-col text-center items-center justify-center col-span-5 my-5 order-2 lg:order-1">
            <h2 className="font-caveat font-bold text-5xl mb-5">
              Une belle occasion&nbsp;!
            </h2>
            <p>Gigondas Bio | Château de Saint-Cosme 2020</p>
            <p>
              Chablis 1er Cru «&nbsp;Montmains&nbsp;» Vieilles Vignes | Denis
              Race 2020
            </p>
            <p>Champagne Brut Louise Brison Millésime 2015</p>
            <div className="flex flex-row justify-center items-center my-4">
              <div className="flex flex-col">
                <p className="text-xs">Prix Public</p>
                <p className="font-semibold text-3xl">45€</p>
              </div>
              {/* make a 1px vertical separator */}
              <div className="w-px h-full bg-black mx-5" />
              <div className="flex flex-col">
                <p className="text-xs">Prix Membre</p>
                <p className="font-semibold text-3xl">40€</p>
              </div>
            </div>
            <p className="text-xs">Prix € TTC par bouteille (tout compris)</p>
          </div>
          <div className="flex items-center justify-center w-full col-span-4 order-1 lg:order-2">
            <div className="w-full sm:w-2/3 md:w-1/2 relative max-w-[735px] lg:w-full aspect-[1.367] -mt-5 sm:-mt-8 md:-mt-10 -mb-3">
              <Image
                src={ImageBelleOccas}
                alt="Faire plaisir"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                quality={100}
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Un grand moment */}
      <div className="w-full bg-[#FE9FA2] relative mt-12 px-5 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-9">
          <div className="flex items-center justify-center w-full col-span-4">
            <div className="w-full sm:w-2/3 md:w-1/2 relative max-w-[735px] lg:w-full aspect-[1.367] -mt-5 sm:-mt-8 md:-mt-10 -mb-3">
              <Image
                src={ImageGrandMoment}
                alt="Faire plaisir"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                quality={100}
                placeholder="blur"
              />
            </div>
          </div>
          <div className="flex flex-col text-center items-center justify-center col-span-5 my-5 ">
            <h2 className="font-caveat font-bold text-5xl mb-5">
              Un grand Moment&nbsp;!
            </h2>
            <p>Châteauneuf-du-pape Blanc Bio | Domaine du Galevan 2020</p>
            <p>Côte Rôtie | Saint-Cosme 2020</p>
            <p>Gervrey-Chambertin | Domaine Amiot 2020</p>
            <div className="flex flex-row justify-center items-center my-4">
              <div className="flex flex-col">
                <p className="text-xs">Prix Public</p>
                <p className="font-semibold text-3xl">60€</p>
              </div>
              {/* make a 1px vertical separator */}
              <div className="w-px h-full bg-black mx-5" />
              <div className="flex flex-col">
                <p className="text-xs">Prix Membre</p>
                <p className="font-semibold text-3xl">55€</p>
              </div>
            </div>
            <p className="text-xs">Prix € TTC par bouteille (tout compris)</p>
            <p className="text-xs font-bold">
              ATTENTION : quantité limitée&nbsp;!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
