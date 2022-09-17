import Image from "next/image";
import Link from "next/link";

import ImageTitleDecouverteBlanc from "../../public/images/cartes/logo_decouverte_blanc.png";
import ImageTitleImmamquablesBlanc from "../../public/images/cartes/logo_immanquables_blanc.png";
import ImageTitlePrestigeBlanc from "../../public/images/cartes/logo_prestige_blanc.png";
import DetailsMobile from "./DetailsMobile";

import DetailsRows from "./DetailsRows";

const Details = (props) => {
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
    <div className="mt-20 sm:mt-32 relative">
      <div className="absolute -top-32" ref={props.refDetailsSection} />
      <h2 className="font-bold text-4xl">
        Tous les avantages de nos cartes en détail
      </h2>
      <p className="text-2xl font-light mt-6">
        Besoin d&#39;aide pour faire votre choix&nbsp;?{" "}
        <span className="underline text-redWine">Contactez-nous</span>
      </p>
      {/* desktop */}
      <div className="hidden lg:block">
        {/* title */}
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 mt-10 grid grid-cols-1 lg:grid-cols-3">
          {/* decouverte */}
          <div className="relative bg-[#73992C] px-16 xl:px-20 2xl:px-24 py-6 flex items-center justify-center ml-6">
            <Image
              src={ImageTitleDecouverteBlanc}
              alt="Titre carte découverte"
              quality={100}
              placeholder="blur"
            />
          </div>
          {/* Immanquables */}
          <div className="relative bg-[#7FA8E2] px-16 xl:px-20 2xl:px-24 py-6 flex items-center justify-center ml-6">
            <Image
              src={ImageTitleImmamquablesBlanc}
              alt="Titre carte immanquables"
              quality={100}
              placeholder="blur"
            />
          </div>
          {/* prestige */}
          <div className="relative bg-[#901340] px-16 xl:px-20 2xl:px-24 py-6 flex items-center justify-center ml-6">
            <Image
              src={ImageTitlePrestigeBlanc}
              alt="Titre carte prestige"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
        {/* Price */}
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
          <div className="flex items-center justify-center flex-col ml-6">
            <div className="text-center flex flex-col my-6">
              <p className="text-[#8F8F8F] text-sm">à partir de</p>
              <p className="text-2xl">
                <span className="font-semibold">98 € TTC</span> / an
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col ml-6">
            <div className="text-center flex flex-col my-6">
              <p className="text-[#8F8F8F] text-sm">à partir de</p>
              <p className="text-2xl">
                <span className="font-semibold">135 € TTC</span> / an
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col ml-6">
            <div className="text-center flex flex-col my-6">
              <p className="text-[#8F8F8F] text-sm">à partir de</p>
              <p className="text-2xl">
                <span className="font-semibold">195 € TTC</span> / an
              </p>
            </div>
          </div>
        </div>
        {/* rectangle */}
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
          <div className="flex items-center justify-center flex-col ml-6">
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
                <span className="font-semibold">en février</span> de chaque
                année
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col ml-6">
            <div className="w-full h-full border-[3px] border-[#7FA8E2] p-6 text-[#7FA8E2]">
              <p className="font-semibold">
                «&nbsp;LES GRANDES APPELLATIONS&nbsp;»
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
                <span className="font-semibold">en février</span> de chaque
                année
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col ml-6">
            <div className="w-full h-full border-[3px] border-[#901340] p-6 text-[#901340]">
              <p className="font-semibold">«&nbsp;PRESTIGE DE FRANCE&nbsp;»</p>
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
                <span className="font-semibold">en février</span> de chaque
                année
              </p>
            </div>
          </div>
        </div>
        {/* description rectangle */}
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
          <div className="flex items-center justify-center flex-col ml-6">
            <p className="text-[#8F8F8F] text-sm mt-3 text-left">
              Les deux box vous seront livrées en point Relais ou à domicile
              (supplément 7,20Є TTC sur le prix de l&#39;abonnement annuel)
            </p>
          </div>
          <div className="flex items-center justify-center flex-col ml-6">
            <p className="text-[#8F8F8F] text-sm mt-3 text-left">
              Les deux box vous seront livrées en point Relais ou à domicile
              (supplément 7,20Є TTC sur le prix de l&#39;abonnement annuel)
            </p>
          </div>
          <div className="flex items-center justify-center flex-col ml-6">
            <p className="text-[#8F8F8F] text-sm mt-3 text-left">
              Les deux box vous seront livrées en point Relais ou à domicile
              (supplément 7,20Є TTC sur le prix de l&#39;abonnement annuel)
            </p>
          </div>
        </div>
        <DetailsRows />
        {/* validity row */}
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
          <div className="flex items-center justify-center flex-col ml-6">
            <div className="text-center flex flex-col my-6 text-[#73992C]">
              <p className="font-semibold">Validité de l'abonnement :</p>
              <p className="">
                du {date} au {dateInOneYear}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col ml-6">
            <div className="text-center flex flex-col my-6 text-[#7FA8E2]">
              <p className="font-semibold">Validité de l'abonnement :</p>
              <p className="">
                du {date} au {dateInOneYear}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col ml-6">
            <div className="text-center flex flex-col my-6 text-[#901340]">
              <p className="font-semibold">Validité de l'abonnement :</p>
              <p className="">
                du {date} au {dateInOneYear}
              </p>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
          <div className="flex items-center justify-center flex-col ml-6">
            <Link href="/cartes/decouverte" passHref>
              <a className="w-full">
                <button className="mt-3 bg-[#73992C] text-white w-full font-bold border-solid rounded-xl border-[#73992C] border-[3px] px-5 py-3 cursor-pointer hover:text-[#73992C] hover:bg-white">
                  Choisir la carte Découverte
                </button>
              </a>
            </Link>
          </div>
          <div className="flex items-center justify-center flex-col ml-6">
            <Link href="/cartes/immanquables" passHref>
              <a className="w-full">
                <button className="mt-3 bg-[#7FA8E2] text-white w-full font-bold border-solid rounded-xl border-[#7FA8E2] border-[3px] px-5 py-3 cursor-pointer hover:text-[#7FA8E2] hover:bg-white">
                  Choisir la carte Immanquables
                </button>
              </a>
            </Link>
          </div>
          <div className="flex items-center justify-center flex-col ml-6">
            <Link href="/cartes/prestige" passHref>
              <a className="w-full">
                <button className="mt-3 bg-[#901340] text-white w-full font-bold border-solid rounded-xl border-[#901340] border-[3px] px-5 py-3 cursor-pointer hover:text-[#901340] hover:bg-white">
                  Choisir la carte Prestige
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="lg:hidden flex flex-col">
        <DetailsMobile
          refDetailsSection={props.refDetailsSection}
          refDecouverteMobile={props.refDecouverteMobile}
          refImmanquablesMobile={props.refImmanquablesMobile}
          refPrestigeMobile={props.refPrestigeMobile}
        />
      </div>
    </div>
  );
};

export default Details;
