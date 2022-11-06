import { useContext, useState } from "react";
import { CartContext } from "../../../../context/ShopContext";

import Image from "next/image";
import ImageDecouverte from "../../../../public/images/logo-cartes/decouverte.png";
import ImagePrestige from "../../../../public/images/logo-cartes/prestige.png";
import ImageImmanquables from "../../../../public/images/logo-cartes/immanquables.png";
import { PlusIcon } from "@heroicons/react/outline";

import Rows from "../../../Cartes/Rows";
import Renew from "./Renew";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import ImageTitleDecouverteBlanc from "../../../../public/images/cartes/logo_decouverte_blanc.png";
import ImageTitleImmamquablesBlanc from "../../../../public/images/cartes/logo_immanquables_blanc.png";
import ImageTitlePrestigeBlanc from "../../../../public/images/cartes/logo_prestige_blanc.png";

import DessinDecouverte from "../../../../public/images/logo-cartes/dessinDecouverte.png";
import DessinImmanquables from "../../../../public/images/logo-cartes/dessinImmanquables.png";
import DessinPrestige from "../../../../public/images/logo-cartes/dessinPrestige.png";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "rgb(168 61 114)",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(168 61 114)",
    font: "inherit",
    fontSize: "0.75rem",
  },
}));

const MaCarteMembre = ({ cards }) => {
  const { user } = useContext(CartContext);

  const [isRenewingCard, setIsRenewingCard] = useState(false);

  let dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let expirationDate = new Date(user?.expirationDate?.value);
  let expirationDatePlusOneDay = new Date(user?.expirationDate?.value);
  expirationDatePlusOneDay = new Date(
    expirationDatePlusOneDay.setHours(expirationDatePlusOneDay.getHours() + 24)
  );
  let dateInOneYear = new Date(expirationDate);

  dateInOneYear = new Date(
    dateInOneYear.setFullYear(dateInOneYear.getFullYear() + 1)
  );

  let expirationDateMinusOneMonth = new Date(user?.expirationDate?.value);
  expirationDateMinusOneMonth = new Date(
    expirationDateMinusOneMonth.setMonth(
      expirationDateMinusOneMonth.getMonth() - 1
    )
  );

  dateInOneYear = dateInOneYear.toLocaleDateString("fr-FR", dateOptions);
  expirationDatePlusOneDay = expirationDatePlusOneDay.toLocaleDateString(
    "fr-FR",
    dateOptions
  );
  expirationDate = expirationDate.toLocaleDateString("fr-FR", dateOptions);

  let textColorCard,
    imageCard,
    borderColor,
    textMesAvantages,
    textAccroche,
    imageDessin,
    bgColor;

  if (user?.carte?.value === "decouverte") {
    textColorCard = "text-[#73992C]";
    borderColor = "border-[#73992C]";
    bgColor = "bg-[#73992C]";
    imageCard = ImageTitleDecouverteBlanc;
    imageDessin = DessinDecouverte;
    textMesAvantages = <>LES DÉCOUVERTE DE L&#39;AUTOMNE</>;
    textAccroche = (
      <>Ce ne sont pas les vins les plus connus... et pourtant&nbsp;!</>
    );
  } else if (user?.carte?.value === "immanquables") {
    textColorCard = "text-[#7FA8E2]";
    borderColor = "border-[#7FA8E2]";
    bgColor = "bg-[#7FA8E2]";
    imageCard = ImageTitleImmamquablesBlanc;
    imageDessin = DessinImmanquables;
    textMesAvantages = "LES GRANDES APPELLATIONS";
    textAccroche = <>Il faut les avoir dans sa cave&nbsp;!</>;
  } else if (user?.carte?.value === "prestige") {
    textColorCard = "text-[#901340]";
    borderColor = "border-[#901340]";
    bgColor = "bg-[#901340]";
    imageCard = ImageTitlePrestigeBlanc;
    imageDessin = DessinPrestige;
    textMesAvantages = "PRESTIGE DE FRANCE";
    textAccroche = <>Les goûter au moins une fois dans sa vie&nbsp;!</>;
  }

  return (
    <>
      {isRenewingCard ? (
        <Renew setIsRenewingCard={setIsRenewingCard} cards={cards} />
      ) : (
        <div className="lg:col-span-9 px-4 sm:px-10 py-6">
          <div className="flex flex-col text-center justify-center items-center">
            <h1 className="text-redWine text-6xl">Ma carte membre</h1>
            <div className="mt-6">
              <p className="font-bold">Mon status de membre :</p>
              <p className="">Valable jusqu&#39;au {expirationDate}</p>

              {expirationDateMinusOneMonth < new Date() &&
                !user?.nextCarte?.value && (
                  <p className="">
                    En renouvelant maintenant, votre carte sera valable du{" "}
                    {expirationDatePlusOneDay} au {dateInOneYear}
                  </p>
                )}
            </div>
            {expirationDateMinusOneMonth < new Date() &&
              !user?.nextCarte?.value && (
                <div className="mt-6 md:my-6">
                  <BootstrapTooltip
                    title="Vous pouvez renouveler votre carte avant même la date d'expiration"
                    arrow
                    placement="top"
                  >
                    <button
                      onClick={() => {
                        setIsRenewingCard(true);
                      }}
                      className="bg-redWine text-white font-bold py-2 px-4 rounded relative inline-block"
                    >
                      Renouveler ma carte
                    </button>
                  </BootstrapTooltip>
                </div>
              )}
            <p className="md:hidden mb-6 text-sm text-[#8F8F8F]">
              Vous pouvez renouveler votre carte avant même la date
              d&#39;expiration
            </p>

            {/* <div className="relative w-2/3 max-w-xs aspect-[5] mt-6">
              <Image src={imageCard} layout="fill" alt="Image Decouverte" />
            </div> */}

            <div
              className={`mt-6 relative ${bgColor} max-w-sm px-16 xl:px-20 2xl:px-24 py-6 flex flex-col items-center justify-center text-white`}
            >
              <p className="mb-2">Option box</p>
              <Image
                src={imageCard}
                alt="Titre carte découverte"
                quality={100}
                placeholder="blur"
              />
            </div>
            <div className="my-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                {user?.isDomicile?.value === "true"
                  ? "Livraison à domicile"
                  : "Livraison en point relais"}
              </span>
            </div>
            <div className="relative max-h-64 max-w-xs aspect-1 m-auto">
              <Image
                src={imageDessin}
                alt="Dessin carte découverte"
                quality={100}
                placeholder="blur"
              />
            </div>
            <div className="flex items-center  flex-col ml-6">
              <div className="text-center flex flex-col">
                <h2 className={`font-semibold ${textColorCard} text-xl`}>
                  {textMesAvantages}
                </h2>
                <p className="">{textAccroche}</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-left w-full my-3">
              Les boxes seront livrées à l&#39;adresse indiquée dans votre
              profil, vous pouvez la modifier en vous rendant dans la section
              «&nbsp;Profil&nbsp;»
            </p>
            <p className="font-bold mt-10">Mes avantages :</p>
            {/* <div
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
            </div> */}

            <Rows />
          </div>
        </div>
      )}
    </>
  );
};

export default MaCarteMembre;
