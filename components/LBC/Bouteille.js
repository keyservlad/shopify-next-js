import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import axios from "axios";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { CartContext } from "../../context/ShopContext";
import { formatter } from "../../utils/helper";

const fetchInventory = (url, id) =>
  axios
    .get(url, {
      params: {
        id: id,
      },
    })
    .then((res) => res.data);

const Bouteille = ({ bouteille }) => {
  const { data: productInventory } = useSWR(
    ["/api/product-available", bouteille.handle],
    (url, id) => fetchInventory(url, id),
    { errorRetryCount: 3, revalidateOnMount: true }
  );

  const [variant, setVariant] = useState({
    id: bouteille.id,
    title: bouteille.title,
    handle: bouteille.handle,
    image: bouteille.image,
    variantQuantity: bouteille.variantQuantity,
    variantPrice: bouteille.variantPrice,
    prix_membre: bouteille.prix_membre,
  });

  const [available, setAvailable] = useState(true);
  const [stock, setStock] = useState(true);

  const updateQuant = (quant) => {
    setVariant({ ...variant, variantQuantity: quant });
  };

  useEffect(() => {
    if (productInventory) {
      const checkAvailable = productInventory?.variants.edges.filter(
        (item) => item.node.id === variant.id
      );
      if (checkAvailable[0].node.availableForSale) {
        setAvailable(true);
        setStock(
          checkAvailable[0].node.quantityAvailable
            ? checkAvailable[0].node.quantityAvailable
            : null
        );
      } else {
        setAvailable(false);
        setStock(null);
      }
    }
  }, [productInventory]);

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="hidden md:flex px-3 rounded-t bg-white flex-col justify-start">
        <div className="relative w-full bg-white m-auto aspect-[0.65] max-h-96 overflow-hidden group-hover:opacity-75 sm:h-auto mt-10">
          <Image
            src={bouteille.image}
            alt={bouteille.title ? bouteille.image.title : "Image bouteille"}
            layout="fill"
            objectFit="contain"
            quality={100}
            className="bg-[url('/images/loader.gif')] bg-center bg-cover bg-no-repeat"
          />
        </div>
        <div className="px-5 py-5 text-center flex flex-col justify-start">
          <h2 className={`font-semibold ${bouteille.textColor}`}>
            {bouteille.title} {bouteille.millesime}
          </h2>
          <p>
            {bouteille.appellations} {bouteille.couleur}
          </p>
          <p className="text-sm text-[#707070]">{bouteille.vendor}</p>
          <p className="text-sm text-[#707070] mt-2">
            L&#39;unité de vente de ce produit est un carton de{" "}
            {bouteille.unite} bouteilles
          </p>

          <div className="w-full border-b border-[#8F8F8F] mt-auto pt-5" />

          <div className="flex flex-row items-center justify-center space-x-10 mt-5">
            <div className="">
              <p className="text-xs">Public</p>
              <p className="text-center">
                {formatter.format(bouteille.variantPrice)}
              </p>
              <p className="text-center text-base md:text-sm 2xl:text-base text-[#8F8F8F] font-normal">
                {formatter.format(bouteille.variantPrice / bouteille.unite)} /
                btl
              </p>
            </div>
            <div className={`font-bold ${bouteille.textColor}`}>
              <p className="text-xs">Membre</p>
              <p className="text-center">
                {formatter.format(bouteille.prix_membre)}
              </p>
              <p className="text-center text-base md:text-sm 2xl:text-base text-[#8F8F8F] font-normal">
                {formatter.format(bouteille.prix_membre / bouteille.unite)} /
                btl
              </p>
            </div>
          </div>
          <div className="bg-white rounded flex flex-row items-center gap-2 md:gap-5 justify-center mt-5">
            <label htmlFor="qte">Quantité</label>
            <div className="flex items-center">
              <button
                onClick={() => {
                  if (variant.variantQuantity > 0) {
                    updateQuant(variant.variantQuantity - 1);
                  }
                }}
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
                className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm bg-[#E6E6E6]"
              >
                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <p className="mx-2">{variant.variantQuantity}</p>
              <button
                onClick={() => {
                  if (
                    variant.variantQuantity < stock ||
                    (stock === null && available === true)
                  ) {
                    updateQuant(variant.variantQuantity + 1);
                  }
                }}
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
                className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm bg-[#E6E6E6]"
              >
                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <button
            onClick={() => addToCart(variant)}
            className={`inline-flex justify-center py-2 px-4 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${bouteille.buttonColor} hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            Ajouter au panier
          </button>

          <p className="text-xs text-[#8F8F8F] mt-5">{bouteille.textCaisse}</p>
        </div>
      </div>

      {/* mobile */}
      <div className="mb-5 md:hidden">
        <div className="p-3 rounded-t bg-white">
          <div className="relative w-full bg-white m-auto aspect-[0.65] max-h-96 overflow-hidden sm:h-auto">
            <Image
              src={bouteille.image}
              alt={bouteille.title ? bouteille.image.title : "Image bouteille"}
              layout="fill"
              objectFit="contain"
              quality={100}
              className="bg-[url('/images/loader.gif')] bg-center bg-cover bg-no-repeat"
            />
          </div>
          <div className="px-5 py-5 text-center">
            <h2 className={`font-semibold ${bouteille.textColor}`}>
              {bouteille.title} {bouteille.millesime}
            </h2>
            <p>
              {bouteille.appellations} {bouteille.couleur}
            </p>
            <p className="text-sm text-[#707070]">{bouteille.vendor}</p>
            <p className="text-sm text-[#707070] mt-2">
              L&#39;unité de vente de ce produit est un carton de{" "}
              {bouteille.unite} bouteilles
            </p>

            <div className="w-full border-b border-[#8F8F8F] mt-5" />

            <div className="flex flex-row items-center justify-center space-x-10 mt-5">
              <div className="">
                <p className="text-xs">Public</p>
                <p className="text-center">
                  {formatter.format(bouteille.variantPrice)}
                </p>
                <p className="text-center text-sm text-[#8F8F8F] font-normal">
                  {formatter.format(bouteille.variantPrice / bouteille.unite)} /
                  bouteille
                </p>
              </div>
              <div className={`font-bold ${bouteille.textColor}`}>
                <p className="text-xs">Membre</p>
                <p className="text-center">
                  {formatter.format(bouteille.prix_membre)}
                </p>
                <p className="text-center text-sm text-[#8F8F8F] font-normal">
                  {formatter.format(bouteille.prix_membre / bouteille.unite)} /
                  bouteille
                </p>
              </div>
            </div>
            <div className="bg-white rounded flex flex-row items-center gap-2 md:gap-5 justify-center mt-5">
              <label htmlFor="qte">Quantité</label>
              <div className="flex items-center">
                <button
                  onClick={() => {
                    if (variant.variantQuantity > 0) {
                      updateQuant(variant.variantQuantity - 1);
                    }
                  }}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                  className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm bg-[#E6E6E6]"
                >
                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <p className="mx-2">{variant.variantQuantity}</p>
                <button
                  onClick={() => {
                    if (
                      variant.variantQuantity < stock ||
                      (stock === null && available === true)
                    ) {
                      updateQuant(variant.variantQuantity + 1);
                    }
                  }}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                  className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm bg-[#E6E6E6]"
                >
                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
            <button
              onClick={() => addToCart(variant)}
              className={`inline-flex justify-center py-2 px-4 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${bouteille.buttonColor} hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              Ajouter au panier
            </button>

            <p className="text-xs text-[#8F8F8F] mt-5">
              {bouteille.textCaisse}
            </p>
          </div>
        </div>
        <div className={`${bouteille.bgColor} p-7 text-left`}>
          <p>{bouteille.description}</p>
        </div>
        <p
          className={`${bouteille.bgColor} px-7 pb-7 text-left rounded-b font-caveat text-2xl`}
        >
          {bouteille.accroche}
        </p>
      </div>
    </>
  );
};

export default Bouteille;
