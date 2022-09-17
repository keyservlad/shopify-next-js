import Image from "next/image";
import Link from "next/link";

import ImageTitleDecouverteBlanc from "../../public/images/cartes/logo_decouverte_blanc.png";
import ImageTitleImmamquablesBlanc from "../../public/images/cartes/logo_immanquables_blanc.png";
import ImageTitlePrestigeBlanc from "../../public/images/cartes/logo_prestige_blanc.png";

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

const DetailsMobile = ({
  refDecouverteMobile,
  refImmanquablesMobile,
  refPrestigeMobile,
}) => {
  let date = new Date();
  let dateInOneYear = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateInOneYear = new Date(
    dateInOneYear.setFullYear(dateInOneYear.getFullYear() + 1)
  );
  dateInOneYear = new Date(
    dateInOneYear.setHours(dateInOneYear.getHours() - 24)
  );
  date = date.toLocaleDateString("fr-FR", options);
  dateInOneYear = dateInOneYear.toLocaleDateString("fr-FR", options);
  return (
    <>
      {/* decouverte */}
      <div className="w-full px-5 sm:px-10 mt-10">
        <div className="relative bg-[#73992C] px-16 py-6 flex items-center justify-center ">
          <div className="absolute -top-64" ref={refDecouverteMobile} />
          <Image
            src={ImageTitleDecouverteBlanc}
            alt="Titre carte découverte"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="text-center flex flex-col my-6">
            <p className="text-[#8F8F8F] text-sm">à partir de</p>
            <p className="text-2xl">
              <span className="font-semibold">98 € TTC</span> / an
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <div className="w-full h-full border-[3px] border-[#73992C] p-6 text-[#73992C]">
            <p className="font-semibold">
              «&nbsp;LES DÉCOUVERTES DE l&#39;AUTOMNE&nbsp;»
            </p>
            <p>
              Box de 3 bouteilles{" "}
              <span className="font-semibold">en septembre</span> de chaque
              année
            </p>
            <p>+</p>
            <p className="font-semibold">
              «&nbsp;DÉCOUVERTE DE PRINTEMPS&nbsp;»
            </p>
            <p>
              Box de 3 bouteilles{" "}
              <span className="font-semibold">en février</span> de chaque année
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <p className="text-[#8F8F8F] text-sm mt-3 text-left">
            Les deux box vous seront livrées en point Relais ou à domicile
            (supplément 7,20Є TTC sur le prix de l&#39;abonnement annuel)
          </p>
        </div>
        <div className="flex items-center justify-center flex-col ">
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
        <div className="flex items-center justify-center flex-col">
          <div className="bg-[#F8FAF8] flex items-center align-center w-full p-12 mt-6 h-full">
            <div className="border-b-2 border-[#73992C] w-10 mx-auto" />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
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
        <div className="flex items-center justify-center flex-col ">
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
        <div className="flex items-center justify-center flex-col ">
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
        <div className="flex items-center justify-center flex-col">
          <div className="bg-[#F8FAF8] flex items-center align-center w-full p-12 mt-6 h-full">
            <div className="border-b-2 border-[#73992C] w-10 mx-auto" />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="bg-[#F8FAF8] flex items-center align-center w-full p-12 mt-6 h-full">
            <div className="border-b-2 border-[#73992C] w-10 mx-auto" />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <div className="text-center flex flex-col my-6 text-[#73992C]">
            <p className="font-semibold">Validité de l'abonnement :</p>
            <p className="">
              du {date} au {dateInOneYear}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <Link href="/cartes/decouverte" passHref>
            <a className="w-full">
              <button className="mt-3 bg-[#73992C] text-white w-full font-bold border-solid rounded-xl border-[#73992C] border-[3px] px-5 py-3 cursor-pointer hover:text-[#73992C] hover:bg-white">
                Choisir la carte Découverte
              </button>
            </a>
          </Link>
        </div>
      </div>
      {/* Immanquables */}
      <div className="w-full px-5 sm:px-10 mt-24">
        <div className="relative bg-[#7FA8E2] px-16 py-6 flex items-center justify-center ">
          <div className="absolute -top-5" ref={refImmanquablesMobile} />
          <Image
            src={ImageTitleImmamquablesBlanc}
            alt="Titre carte découverte"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="text-center flex flex-col my-6">
            <p className="text-[#8F8F8F] text-sm">à partir de</p>
            <p className="text-2xl">
              <span className="font-semibold">135 € TTC</span> / an
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <div className="w-full h-full border-[3px] border-[#7FA8E2] p-6 text-[#7FA8E2]">
            <p className="font-semibold">«&nbsp;GRANDES APPELLATIONS&nbsp;»</p>
            <p>
              Box de 3 bouteilles{" "}
              <span className="font-semibold">en septembre</span> de chaque
              année
            </p>
            <p>+</p>
            <p className="font-semibold">
              «&nbsp;DÉCOUVERTE DE PRINTEMPS&nbsp;»
            </p>
            <p>
              Box de 3 bouteilles{" "}
              <span className="font-semibold">en février</span> de chaque année
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <p className="text-[#8F8F8F] text-sm mt-3 text-left">
            Les deux box vous seront livrées en point Relais ou à domicile
            (supplément 7,20Є TTC sur le prix de l&#39;abonnement annuel)
          </p>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={CoeurImmanquables}
                  alt="Coeur découverte"
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
        <div className="flex items-center justify-center flex-col">
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
        <div className="flex items-center justify-center flex-col">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={VerresImmanquables}
                  alt="Coeur découverte"
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
        <div className="flex items-center justify-center flex-col ">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={BouteillesImmanquables}
                  alt="Coeur découverte"
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
        <div className="flex items-center justify-center flex-col ">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={MainVerreImmanquables}
                  alt="Coeur découverte"
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
        <div className="flex items-center justify-center flex-col">
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
        <div className="flex items-center justify-center flex-col">
          <div className="bg-[#F8FAF8] flex items-center align-center w-full p-12 mt-6 h-full">
            <div className="border-b-2 border-[#7FA8E2] w-10 mx-auto" />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <div className="text-center flex flex-col my-6 text-[#7FA8E2]">
            <p className="font-semibold">Validité de l'abonnement :</p>
            <p className="">
              du {date} au {dateInOneYear}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <Link href="/cartes/immanquables" passHref>
            <a className="w-full">
              <button className="mt-3 bg-[#7FA8E2] text-white w-full font-bold border-solid rounded-xl border-[#7FA8E2] border-[3px] px-5 py-3 cursor-pointer hover:text-[#7FA8E2] hover:bg-white">
                Choisir la carte Immanquables
              </button>
            </a>
          </Link>
        </div>
      </div>
      {/* Prestige */}
      <div className="w-full px-5 sm:px-10 mt-24">
        <div className="relative bg-[#901340] px-16 py-6 flex items-center justify-center ">
          <div className="absolute -top-5" ref={refPrestigeMobile} />
          <Image
            src={ImageTitlePrestigeBlanc}
            alt="Titre carte découverte"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="text-center flex flex-col my-6">
            <p className="text-[#8F8F8F] text-sm">à partir de</p>
            <p className="text-2xl">
              <span className="font-semibold">195 € TTC</span> / an
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <div className="w-full h-full border-[3px] border-[#901340] p-6 text-[#901340]">
            <p className="font-semibold">«&nbsp;GRANDES APPELLATIONS&nbsp;»</p>
            <p>
              Box de 3 bouteilles{" "}
              <span className="font-semibold">en septembre</span> de chaque
              année
            </p>
            <p>+</p>
            <p className="font-semibold">
              «&nbsp;DÉCOUVERTE DE PRINTEMPS&nbsp;»
            </p>
            <p>
              Box de 3 bouteilles{" "}
              <span className="font-semibold">en février</span> de chaque année
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <p className="text-[#8F8F8F] text-sm mt-3 text-left">
            Les deux box vous seront livrées en point Relais ou à domicile
            (supplément 7,20Є TTC sur le prix de l&#39;abonnement annuel)
          </p>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={CoeurPrestige}
                  alt="Coeur découverte"
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
        <div className="flex items-center justify-center flex-col">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={EtiquettePrestige}
                  alt="etiquette immanquables"
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
        <div className="flex items-center justify-center flex-col">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={VerresPrestige}
                  alt="Coeur découverte"
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
        <div className="flex items-center justify-center flex-col ">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={BouteillesPrestige}
                  alt="Coeur découverte"
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
        <div className="flex items-center justify-center flex-col ">
          <div className="bg-[#F8FAF8] flex flex-row w-full p-6 mt-6 h-full">
            <div className="flex">
              <div className="relative aspect-square w-8 mr-6">
                <Image
                  src={MainVerrePrestige}
                  alt="Coeur découverte"
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
        <div className="flex items-center justify-center flex-col">
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
        <div className="flex items-center justify-center flex-col">
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
        <div className="flex items-center justify-center flex-col ">
          <div className="text-center flex flex-col my-6 text-[#901340]">
            <p className="font-semibold">Validité de l'abonnement :</p>
            <p className="">
              du {date} au {dateInOneYear}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <Link href="/cartes/prestige" passHref>
            <a className="w-full">
              <button className="mt-3 bg-[#901340] text-white w-full font-bold border-solid rounded-xl border-[#901340] border-[3px] px-5 py-3 cursor-pointer hover:text-[#901340] hover:bg-white">
                Choisir la carte Prestige
              </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailsMobile;
