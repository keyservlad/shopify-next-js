import { ArrowLeftIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { CartContext } from "../../../../context/ShopContext";
import { createCheckoutCustomAttribute } from "../../../../lib/shopifyCheckout";
import { formatter } from "../../../../utils/helper";

const RenewOtherCard = ({ setIsRenewingOtherCard, cards }) => {
  const router = useRouter();
  const { user } = useContext(CartContext);

  const cardsSorted = cards.sort(
    (a, b) =>
      Number(a.node.priceRange.minVariantPrice.amount) -
      Number(b.node.priceRange.minVariantPrice.amount)
  );

  let expirationDate = new Date(user?.expirationDate?.value);
  let expirationDatePlusOneDay = new Date(user?.expirationDate?.value);
  expirationDatePlusOneDay = new Date(
    expirationDatePlusOneDay.setHours(expirationDatePlusOneDay.getHours() + 24)
  );
  let dateInOneYear = new Date(expirationDate);

  dateInOneYear = new Date(
    dateInOneYear.setFullYear(dateInOneYear.getFullYear() + 1)
  );

  const [isLoading, setIsLoading] = useState(false);

  // TODO verification that user has not already a next card
  const handleRenewSameCard = async (variant) => {
    setIsLoading(true);
    const isDomicile = variant.title.includes("Domicile");
    const carteTitle = variant.title.toLowerCase().includes("prestige")
      ? "prestige"
      : variant.title.toLowerCase().includes("découverte")
      ? "decouverte"
      : "immanquables";
    let input;
    if (isDomicile === "true") {
      input = {
        email: user.email,
        metafields: [
          {
            key: "nextCarte",
            namespace: "custom",
            value: carteTitle,
            type: "single_line_text_field",
          },
          {
            key: "nextExpirationdate",
            namespace: "custom",
            value: dateInOneYear.toISOString().split("T")[0],
            type: "date",
          },
          {
            key: "nextIsDomicile",
            namespace: "custom",
            type: "boolean",
            value: "true",
          },
        ],
      };
    } else {
      input = {
        email: user.email,
        metafields: [
          {
            key: "nextCarte",
            namespace: "custom",
            value: carteTitle,
            type: "single_line_text_field",
          },
          {
            key: "nextExpirationdate",
            namespace: "custom",
            value: dateInOneYear.toISOString().split("T")[0],
            type: "date",
          },
          {
            key: "nextIsDomicile",
            namespace: "custom",
            type: "boolean",
            value: "false",
          },
          {
            key: "nextPlateforme",
            namespace: "custom",
            value: "Chronopost",
            type: "single_line_text_field",
          },
        ],
      };
    }

    const customAttribute = {
      key: "newCustomerInput",
      value: JSON.stringify(input),
    };

    const checkout = await createCheckoutCustomAttribute(
      [variant],
      customAttribute,
      user.email
    );

    router.push(checkout.checkout.webUrl);
    // setIsLoading(false); disabled cause router.push slow
  };

  return (
    <div className="lg:col-span-9 px-4 sm:px-10 py-6">
      <button
        className="hover:opacity-70 cursor-pointer flex flex-row items-center mb-4 text-sm mt-8"
        onClick={() => {
          setIsRenewingOtherCard(false);
        }}
      >
        <ArrowLeftIcon className="flex-shrink-0 h-4 w-4 mr-2" />
        Annuler
      </button>
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="text-redWine">Renouveler ma carte membre</h1>
        <p className="text-gray-500 text-sm">
          Pour plus de détails sur les différentes options de la carte membre,
          consultez notre{" "}
          <Link href={"/cartes"} passHref>
            <a className="text-redWine font-bold">page dédiée</a>
          </Link>
        </p>
      </div>

      {/* map all the cards to display them as product cards */}
      <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 w-full">
        {cardsSorted.map((card) => {
          const variant = {
            id: card.node.variants.edges[0].node.id,
            title: card.node.title,
            handle: card.node.handle,
            image: card.node.images.edges[0].node.originalSrc,
            variantPrice: card.node.priceRange.minVariantPrice.amount,
            variantQuantity: 1,
          };
          return (
            <>
              <div
                key={variant.id}
                className="group hover:bg-white rounded-md hover:drop-shadow-lg"
              >
                <div className="group relative p-3 h-full flex flex-col justify-start">
                  <div className="relative w-full bg-white aspect-1 max-h-96 overflow-hidden group-hover:opacity-75 sm:h-auto">
                    <Image
                      src={variant.image}
                      alt={
                        card.node.images.edges[0].node.altText
                          ? card.node.images.edges[0].node.altText
                          : "Image carte"
                      }
                      layout="fill"
                      objectFit="contain"
                      quality={100}
                      className="bg-[url('/images/loader.gif')] bg-center bg-cover bg-no-repeat"
                    />
                  </div>
                  <div className="text-center leading-6 my-5">
                    <h2 className={`mt-4 font-semibold`}>{card.node.title}</h2>
                  </div>
                  {/* prices */}
                  <div className="w-60 max-w-full mx-auto pt-3 sm:p-3 border-t border-gray-400 mt-auto text-center">
                    <p>{formatter.format(Number(variant.variantPrice))}</p>
                  </div>
                  <div>
                    {isLoading ? (
                      <button
                        className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-redWine hover:bg-redWine focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redWine"
                        disabled
                      >
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                        Chargement...
                      </button>
                    ) : (
                      <button
                        className="w-full bg-redWine text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-redWineDark"
                        onClick={() => {
                          handleRenewSameCard(variant);
                        }}
                      >
                        Je renouvelle ma carte
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RenewOtherCard;
