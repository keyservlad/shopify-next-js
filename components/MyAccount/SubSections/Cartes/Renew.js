import { ArrowLeftIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { CartContext } from "../../../../context/ShopContext";

import ImageDecouverte from "../../../../public/images/logo-cartes/decouverte.png";
import ImagePrestige from "../../../../public/images/logo-cartes/prestige.png";
import ImageImmanquables from "../../../../public/images/logo-cartes/immanquables.png";
import RenewOtherCard from "./RenewOtherCard";

const Renew = ({ setIsRenewingCard }) => {
  const { user } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isRenewingOtherCard, setIsRenewingOtherCard] = useState(false);

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

  dateInOneYear = dateInOneYear.toLocaleDateString("fr-FR", dateOptions);
  expirationDatePlusOneDay = expirationDatePlusOneDay.toLocaleDateString(
    "fr-FR",
    dateOptions
  );
  expirationDate = expirationDate.toLocaleDateString("fr-FR", dateOptions);

  let imageCard =
    user?.carte?.value === "decouverte"
      ? ImageDecouverte
      : user?.carte?.value === "immanquables"
      ? ImageImmanquables
      : ImagePrestige;

  const handleRenewSameCard = () => {
    setIsLoading(true);
    setIsLoading(false);
  };

  //   Note to reuse this component, maybe put some conditionals for the setIsRenewingCard function to not have to pass it as a prop && conditionals wether the user is expired or not
  return (
    <>
      {isRenewingOtherCard ? (
        <RenewOtherCard setIsRenewingOtherCard={setIsRenewingOtherCard} />
      ) : (
        <div className="lg:col-span-9 px-4 sm:px-10 py-6">
          <button
            className="hover:opacity-70 cursor-pointer flex flex-row items-center mb-4 text-sm mt-8"
            onClick={() => {
              setIsRenewingCard(false);
            }}
          >
            <ArrowLeftIcon className="flex-shrink-0 h-4 w-4 mr-2" />
            Annuler
          </button>
          <div className="flex flex-col text-center justify-center items-center">
            <h1 className="text-redWine">Renouveler ma carte membre</h1>

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
            <div className="mt-6">
              <p className="font-bold">Mon status de membre :</p>
              <p className="">Valable jusqu&#39;au {expirationDate}</p>
              <p className="">
                En renouvelant maintenant, votre carte sera valable du{" "}
                {expirationDatePlusOneDay} au {dateInOneYear}
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-around w-full my-10">
              <div className="">
                <p className="">Je souhaite conserver la même carte</p>
                {isLoading ? (
                  <div
                    className={`bg-redWine text-white font-bold py-2 px-4 rounded border-redWine inline-block`}
                  >
                    <svg
                      role="status"
                      className="inline mr-3 w-4 h-4 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Chargement...
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      handleRenewSameCard();
                    }}
                    className="bg-redWine text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-redWine border border-redWine"
                  >
                    Renouveler ma carte
                  </button>
                )}
              </div>
              <div className="mt-5 md:mt-0">
                <p className="">Je souhaite changer de carte</p>
                {isLoading ? (
                  <div
                    className={`bg-blueWine text-white font-bold py-2 px-4 rounded border-blueWine inline-block`}
                  >
                    <svg
                      role="status"
                      className="inline mr-3 w-4 h-4 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Chargement...
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsRenewingOtherCard(true);
                    }}
                    className="bg-blueWine text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-blueWine border border-blueWine"
                  >
                    Sélectionner une autre carte
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Renew;
