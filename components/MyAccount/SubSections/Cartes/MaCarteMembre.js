import { useContext, useState } from "react";
import { CartContext } from "../../../../context/ShopContext";

import Image from "next/image";
import ImageDecouverte from "../../../../public/images/logo-cartes/decouverte.png";
import ImagePrestige from "../../../../public/images/logo-cartes/prestige.png";
import ImageImmanquables from "../../../../public/images/logo-cartes/immanquables.png";
import { PlusIcon } from "@heroicons/react/outline";

import CoeurDecouverte from "../../../../public/images/mini-logos/decouverte/coeur.svg";
import BouteillesDecouverte from "../../../../public/images/mini-logos/decouverte/bouteilles.svg";
import MainVerreDecouverte from "../../../../public/images/mini-logos/decouverte/mainVerre.svg";
import VerresDecouverte from "../../../../public/images/mini-logos/decouverte/verres.svg";

import CoeurImmanquables from "../../../../public/images/mini-logos/immanquables/coeur.svg";
import BouteillesImmanquables from "../../../../public/images/mini-logos/immanquables/bouteilles.svg";
import MainVerreImmanquables from "../../../../public/images/mini-logos/immanquables/mainVerre.svg";
import VerresImmanquables from "../../../../public/images/mini-logos/immanquables/verres.svg";
import EtiquetteImmanquables from "../../../../public/images/mini-logos/immanquables/etiquette.svg";

import CoeurPrestige from "../../../../public/images/mini-logos/prestige/coeur.svg";
import BouteillesPrestige from "../../../../public/images/mini-logos/prestige/bouteilles.svg";
import MainVerrePrestige from "../../../../public/images/mini-logos/prestige/mainVerre.svg";
import VerresPrestige from "../../../../public/images/mini-logos/prestige/verres.svg";
import EtiquettePrestige from "../../../../public/images/mini-logos/prestige/etiquette.svg";
import VerreSinglePrestige from "../../../../public/images/mini-logos/prestige/verreSingle.svg";
import RowItem from "./RowItem";
import Rows from "../../../Cartes/Rows";
import Renew from "./Renew";

const MaCarteMembre = () => {
  const { user } = useContext(CartContext);

  const [isRenewingCard, setIsRenewingCard] = useState(false);

  let expirationDate = new Date(user?.expirationDate?.value);
  let dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  expirationDate = expirationDate.toLocaleDateString("fr-FR", dateOptions);

  let textColorCard, imageCard, borderColor, textMesAvantages;

  if (user?.carte?.value === "decouverte") {
    textColorCard = "text-[#73992C]";
    borderColor = "border-[#73992C]";
    imageCard = ImageDecouverte;
    textMesAvantages = <>LES DÉCOUVERTE DE L&#39;AUTOMNE</>;
  } else if (user?.carte?.value === "immanquables") {
    textColorCard = "text-[#7FA8E2]";
    borderColor = "border-[#7FA8E2]";
    imageCard = ImageImmanquables;
    textMesAvantages = "LES GRANDES APPELLATIONS";
  } else if (user?.carte?.value === "prestige") {
    textColorCard = "text-[#901340]";
    borderColor = "border-[#901340]";
    imageCard = ImagePrestige;
    textMesAvantages = "PRESTIGE DE FRANCE";
  }

  return (
    <>
      {isRenewingCard ? (
        <Renew setIsRenewingCard={setIsRenewingCard} />
      ) : (
        <div className="lg:col-span-9 px-4 sm:px-10 py-6">
          <div className="flex flex-col text-center justify-center items-center">
            <h1 className="text-redWine">Ma carte membre</h1>
            <div className="mt-6">
              <p className="font-bold">Mon status de membre :</p>
              <p className="">Valable jusqu&#39;au {expirationDate}</p>
            </div>
            <div className="my-6">
              <button
                onClick={() => {
                  setIsRenewingCard(true);
                }}
                className="bg-redWine text-white font-bold py-2 px-4 rounded"
              >
                Renouveler ma carte
              </button>
            </div>
            <div className="relative w-2/3 max-w-xs aspect-[5] mt-6">
              <Image src={imageCard} layout="fill" alt="Image Decouverte" />
              <div className="absolute -top-5 right-0">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  {user?.isDomicile?.value === "true"
                    ? "Livraison à domicile"
                    : "Livraison en point relais"}
                </span>
              </div>
            </div>
            <p className="font-bold mt-10">Mes avantages :</p>
            {/* TODO faire la version en une seule row */}
            <div
              className={`flex text-center justify-around items-center flex-col md:flex-row w-full border-[3px] ${borderColor} ${textColorCard} p-4 mt-6`}
            >
              <div className="">
                <p className="font-bold">«&nbsp;{textMesAvantages}&nbsp;»</p>
                <p className="">
                  Box de 3 bouteilles <strong>en septembre</strong> de chaque
                  année
                </p>
              </div>

              <PlusIcon
                className="h-8 w-8 text-center font-bold my-6"
                aria-hidden="true"
              />
              <div className="">
                <p className="font-bold">
                  «&nbsp;DÉCOUVERTE DE PRINTEMPS&nbsp;»
                </p>
                <p className="">
                  Box de 3 bouteilles <strong>en février</strong> de chaque
                  année
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-left w-full my-3">
              Les boxes seront livrées à l&#39;adresse indiquée dans votre
              profil, vous pouvez la modifier en vous rendant dans la section
              «&nbsp;Profil&nbsp;»
            </p>
            <Rows />
          </div>
        </div>
      )}
    </>
  );
};

export default MaCarteMembre;
