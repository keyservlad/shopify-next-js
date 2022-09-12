import { useContext } from "react";
import { CartContext } from "../../../context/ShopContext";

import Image from "next/image";
import ImageDecouverte from "../../../public/images/logo-cartes/decouverte.png";
import ImagePrestige from "../../../public/images/logo-cartes/prestige.png";
import ImageImmanquables from "../../../public/images/logo-cartes/immanquables.png";
import { PlusIcon } from "@heroicons/react/outline";

const MaCarteMembre = () => {
  const { user } = useContext(CartContext);

  let expirationDate = new Date(user?.expirationDate.value);
  let dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  expirationDate = expirationDate.toLocaleDateString("fr-FR", dateOptions);

  let textColorCard, imageCard, borderColor, textMesAvantages;

  if (user.carte.value === "decouverte") {
    textColorCard = "text-[#73992C]";
    borderColor = "border-[#73992C]";
    imageCard = ImageDecouverte;
    textMesAvantages = "Les découvertes de l&#39;automne";
  } else if (user.carte.value === "immanquables") {
    textColorCard = "text-[#7FA8E2]";
    borderColor = "border-[#7FA8E2]";
    imageCard = ImageImmanquables;
    textMesAvantages = "Les grandes appelations";
  } else if (user.carte.value === "prestige") {
    textColorCard = "text-[#901340]";
    borderColor = "border-[#901340]";
    imageCard = ImagePrestige;
    textMesAvantages = "Prestige de France";
  }
  textMesAvantages = textMesAvantages.toUpperCase();

  return (
    <div className="lg:col-span-9 px-4 sm:px-6 py-6">
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="text-redWine">Ma carte membre</h1>
        <div className="mt-6">
          <p className="font-bold">Mon status de membre :</p>
          <p className="">Valable jusqu&#39;au {expirationDate}</p>
        </div>
        <div className="relative w-2/3 max-w-xs aspect-[5] mt-6">
          <Image src={imageCard} layout="fill" alt="Image Decouverte" />
        </div>
        <p className="font-bold mt-10">Mes avantages :</p>
        {/* TODO faire la version en une seule row */}
        <div
          className={`flex text-center justify-center items-center flex-col w-full border-[3px] ${borderColor} ${textColorCard} p-4 mt-6`}
        >
          <div className="">
            <p className="font-bold">« {textMesAvantages} »</p>
            <p className="">
              Box de 3 bouteilles <strong>en septembre</strong> de chaque année
            </p>
          </div>
          {/* TODO faire avec une image pour avoir une croix plus epaisse */}
          <PlusIcon
            className="h-8 w-8 text-center font-bold my-6"
            aria-hidden="true"
          />
          <div className="">
            <p className="font-bold">«&nbsp;DÉCOUVERTE DE PRINTEMPS&nbsp;»</p>
            <p className="">
              Box de 3 bouteilles <strong>en février</strong> de chaque année
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaCarteMembre;
