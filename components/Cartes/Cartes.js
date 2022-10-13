import Image from "next/image";
import FondHeader from "../../public/images/cartes/fond_header_cartes.jpg";

import Link from "next/link";
import Details from "./Details";
import { createRef } from "react";
import Rows from "./Rows";

const Cartes = () => {
  const refDetailsSection = createRef();

  const scrollDetailsSection = () => {
    refDetailsSection.current.scrollIntoView({
      behavior: "smooth",
    });
  };

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
    <div className="flex flex-col w-full align-center justify-center text-center mb-10">
      <div className="sm:mx-10 lg:mx-20 xl:mx-28 2xl:mx-40 relative -z-10">
        <Image
          src={FondHeader}
          alt="Fond header cartes"
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className="px-5 md:w-1/2 md:p-0 mx-auto sm:-mt-12">
        <h1 className="">1 carte avec 3 options selon vos goûts</h1>
        <p className="text-2xl font-light mt-6">
          Avec votre carte EMOVIN profitez de plein d&#39;avantages autour du
          vin et des wine box composées de pur plaisir&nbsp;!
        </p>
        <p className="font-light mt-6">
          Validité de votre carte : 1 an à compter de la date d&#39;engagement
          de l&#39;abonnement.
        </p>
        <p>
          (du {date} au {dateInOneYear})
        </p>
        <p className="font-light">
          Offre pour les résidents français, pour les étrangers, {` `}
          <span className="underline cursor-pointer">nous&nbsp;contacter</span>
          {/* TODO add formulaire de contact ici */}
        </p>
      </div>
      <Details scrollDetailsSection={scrollDetailsSection} />
      <div className="w-full text-[#8F8F8F]">
        <p className="">
          Chaque box est composée de 3 bouteilles et inclus une fiche de
          dégustation. Livraison gratuite en automne en «&nbsp;point
          relais&nbsp;».
        </p>
        <p className="">
          Supplément optionnel : 15€ TTC/an pour une livraison en adresse privée
          incluant votre box Option, votre cadeau «&nbsp;Surprise&nbsp;» et les
          3 bouteilles «&nbsp;Découvertes de printemps&nbsp;».
        </p>
      </div>
      <div className="w-full mt-14 relative">
        <div ref={refDetailsSection} className="absolute -top-24" />
        <h2 className="text-xl font-bold text-redWine">
          Tous les autres avantages de votre carte EMOVIN{" "}
        </h2>
      </div>

      <div className="w-full mt-7 mb-14">
        <div className="flex items-center justify-center flex-col mx-5 lg:mx-10 xl:mx-28 2xl:mx-40">
          <Rows />
        </div>
      </div>
    </div>
  );
};

export default Cartes;
