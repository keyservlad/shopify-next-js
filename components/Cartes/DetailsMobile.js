import Image from "next/image";
import Link from "next/link";

import ImageTitleDecouverteBlanc from "../../public/images/cartes/logo_decouverte_blanc.png";
import ImageTitleImmamquablesBlanc from "../../public/images/cartes/logo_immanquables_blanc.png";
import ImageTitlePrestigeBlanc from "../../public/images/cartes/logo_prestige_blanc.png";

import DessinDecouverte from "../../public/images/logo-cartes/dessinDecouverte.png";
import DessinImmanquables from "../../public/images/logo-cartes/dessinImmanquables.png";
import DessinPrestige from "../../public/images/logo-cartes/dessinPrestige.png";

import { ChevronDownIcon } from "@heroicons/react/outline";

const DetailsMobile = ({ scrollDetailsSection }) => {
  return (
    <>
      {/* decouverte */}
      <div className="w-full px-5 sm:px-10 mt-10">
        <div className="relative bg-[#73992C] px-16 xl:px-20 2xl:px-24 py-6 flex flex-col items-center justify-center ml-6 text-white">
          <p className="mb-2">Option box</p>
          <Image
            src={ImageTitleDecouverteBlanc}
            alt="Titre carte découverte"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="relative max-h-64 aspect-1 m-auto">
          <Image
            src={DessinDecouverte}
            alt="Dessin carte découverte"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="flex items-center  flex-col">
          <div className="text-center flex flex-col">
            <h2 className="font-semibold text-[#73992C] text-xl">
              Découvertes de l&#39;automne
            </h2>
            <p className="">
              Ce ne sont pas les vins les plus connus... et pourtant&nbsp;!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="text-center flex flex-col my-6">
            <p className="text-2xl text-[#73992C] font-light">
              <span className="font-semibold">119 € TTC</span> / an
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <Link href="/cartes/decouverte" passHref>
            <a className="">
              <button className="bg-[#73992C] text-white w-full font-bold border-solid rounded-xl border-[#73992C] border-[3px] px-5 py-3 cursor-pointer hover:text-[#73992C] hover:bg-white">
                Je prends ma carte
              </button>
            </a>
          </Link>
          <button
            onClick={() => {
              scrollDetailsSection();
            }}
            className="underline cursor-pointer text-sm mt-3 flex items-center"
          >
            Voir tous les avantages
            <ChevronDownIcon className="inline-block w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="flex items-center  flex-col">
          <div className="text-center flex flex-col my-6 leading-6">
            <p className="text-[#8F8F8F]">
              Exemple de la box &#34;Découverte&#34; :
            </p>
            <p className="font-bold">Crémant de Bourgogne</p>
            <p className="">Blanc pétillant</p>
            <p className="font-bold">Macon Lugny 2021</p>
            <p className="">Blanc sec</p>
            <p className="font-bold">Bourgogne Pinot Noir</p>
            <p className="">Clos Saint-Germain</p>
            <p className="">Rouge 2020</p>
          </div>
        </div>
        {/* Immanquables */}
        <div className="relative bg-[#7FA8E2] px-16 xl:px-20 2xl:px-24 py-6 flex flex-col items-center justify-center ml-6 text-white">
          <p className="mb-2">Option box</p>
          <Image
            src={ImageTitleImmamquablesBlanc}
            alt="Titre carte immanquables"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="relative max-h-64 aspect-1 m-auto">
          <Image
            src={DessinImmanquables}
            alt="Dessin carte immanquables"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="flex items-center flex-col   ">
          <div className="text-center flex flex-col">
            <h2 className="font-semibold text-[#7FA8E2] text-xl">
              Les grandes appellations françaises
            </h2>
            <p className="">Il faut les avoir dans sa cave&nbsp;!</p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col   ">
          <div className="text-center flex flex-col my-6">
            <p className="text-2xl text-[#7FA8E2] font-light">
              <span className="font-semibold">154 € TTC</span> / an
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col   ">
          <Link href="/cartes/immanquables" passHref>
            <a className="">
              <button className="bg-[#7FA8E2] text-white w-full font-bold border-solid rounded-xl border-[#7FA8E2] border-[3px] px-5 py-3 cursor-pointer hover:text-[#7FA8E2] hover:bg-white">
                Je prends ma carte
              </button>
            </a>
          </Link>
          <button
            onClick={() => {
              scrollDetailsSection();
            }}
            className="underline cursor-pointer text-sm mt-3 flex items-center"
          >
            Voir tous les avantages
            <ChevronDownIcon className="inline-block w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="flex items-center  flex-col   ">
          <div className="text-center flex flex-col my-6 leading-6">
            <p className="text-[#8F8F8F]">
              Exemple de la box &#34;Immanquables&#34; :
            </p>
            <p className="font-bold">Chablis Premier Cru 2019</p>
            <p className="">&#34;Montmains&#34; Vieilles Vignes</p>
            <p className="">Blanc Sec</p>
            <p className="font-bold">Château Franc Grace Dieu</p>
            <p className="">Saint Emilion Grand Cru 2015</p>
            <p className="font-bold">
              Vacqueyras &#34;Le Sang des Cailloux&#34;
            </p>
            <p className="">Cuvée Floureto - Rouge 2019 - bio</p>
          </div>
        </div>
        {/* Prestige */}
        <div className="relative bg-[#901340] px-16 xl:px-20 2xl:px-24 py-6 flex flex-col items-center justify-center ml-6 text-white">
          <p className="mb-2">Option box</p>
          <Image
            src={ImageTitlePrestigeBlanc}
            alt="Titre carte prestige"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="relative max-h-64 aspect-1 m-auto">
          <Image
            src={DessinPrestige}
            alt="Dessin carte prestige"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="flex items-center flex-col   ">
          <div className="text-center flex flex-col">
            <h2 className="font-semibold text-[#901340] text-xl">
              Prestige de France
            </h2>
            <p className="">Les goûter au moins une fois dans sa vie&nbsp;!</p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="text-center flex flex-col my-6">
            <p className="text-2xl text-[#901340] font-light">
              <span className="font-semibold">229 € TTC</span> / an
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col   ">
          <Link href="/cartes/prestige" passHref>
            <a className="">
              <button className="bg-[#901340] text-white w-full font-bold border-solid rounded-xl border-[#901340] border-[3px] px-5 py-3 cursor-pointer hover:text-[#901340] hover:bg-white">
                Je prends ma carte
              </button>
            </a>
          </Link>
          <button
            onClick={() => {
              scrollDetailsSection();
            }}
            className="underline cursor-pointer text-sm mt-3 flex items-center"
          >
            Voir tous les avantages
            <ChevronDownIcon className="inline-block w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="flex items-center  flex-col   ">
          <div className="text-center flex flex-col my-6 leading-6">
            <p className="text-[#8F8F8F]">
              Exemple de la box &#34;Prestige&#34; :
            </p>
            <p className="font-bold">Chatauneuf du pape blanc Bio 2019</p>
            <p className="">Domaine de Galevan</p>
            <p className="font-bold">Chataineuf du Pape rouge Bio 2019</p>
            <p className="">Saint Emilion Grand Cru 2015</p>
            <p className="font-bold">Gigondas rouge Bio 2020</p>
            <p className="">Château de Saint-Cosme</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsMobile;
