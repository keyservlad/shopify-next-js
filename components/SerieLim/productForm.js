import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { CartContext } from "../../context/ShopContext";
import { formatter } from "../../utils/helper";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Router, useRouter } from "next/router";

const fetchInventory = (url, id) =>
  axios
    .get(url, {
      params: {
        id: id,
      },
    })
    .then((res) => res.data);

const ProductForm = ({ productSerieLim, scrollPetiteHistoireSection }) => {
  const { data: productInventory } = useSWR(
    ["/api/product-available", productSerieLim.handle],
    (url, id) => fetchInventory(url, id),
    { errorRetryCount: 3, revalidateOnMount: true }
  );

  const router = useRouter();

  const [available, setAvailable] = useState(true);
  const [stock, setStock] = useState(true);

  const [variant, setVariant] = useState({
    id: productSerieLim.variants.nodes[0].id,
    title: productSerieLim.title,
    handle: productSerieLim.handle,
    image: productSerieLim.featuredImage.url,
    variantPrice: productSerieLim.priceRange.minVariantPrice.amount,
    variantQuantity: 1,
  });

  const updateQuant = (quant) => {
    setVariant({ ...variant, variantQuantity: quant });
  };

  const { addToCart } = useContext(CartContext);
  const session = useSession();

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

  return (
    <div className="flex flex-col h-full w-full md:w-2/3 items-center m-auto mt-20">
      <div className="flex items-center flex-col text-center w-full text-[#BB9B48]">
        <h1>{productSerieLim.title}</h1>
      </div>
      <h2 className="text-2xl mt-2">{productSerieLim.productType}</h2>
      <p className="text-lg mt-5">
        {productSerieLim.couleur?.value} - Millésime{" "}
        {productSerieLim.millesime.value}
      </p>
      <button
        onClick={() => {
          scrollPetiteHistoireSection();
        }}
        className="underline cursor-pointer text-sm mt-2"
      >
        Plus de détails
      </button>
      <p className="mt-5 font-bold text-center">
        L&#39;unité de vente de ce produit est un carton de{" "}
        {productSerieLim.unite?.value} bouteilles
      </p>

      <p className="text-red-600">{!stock ? "0" : stock} cartons restants</p>

      {/* <div className="border-b border-[#8F8F8F] w-2/3 md:w-1/2 max-w-xs my-3" /> */}
      <div className="flex flex-row gap-x-10 border-y border-[#8F8F8F] py-3 my-3">
        <div className="text-center">
          <p className="text-sm font-bold">Prix exclusivement Membre</p>
          <p className="text-lg">{formatter.format(variant.variantPrice)}</p>
        </div>
      </div>
      {/* <div className="border-b border-[#8F8F8F] w-2/3 md:w-1/2 max-w-xs my-3" /> */}
      <div className="flex flex-col gap-2 md:gap-5 mt-2">
        <div className="bg-white rounded flex flex-row items-center gap-2 md:gap-5 justify-center">
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
                if (variant.variantQuantity < stock) {
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
        {available && session.status === "authenticated" ? (
          <button
            onClick={() => {
              addToCart(variant);
            }}
            className="w-48 rounded text-white bg-redWine px-1 py-2 hover:opacity-80 text-center"
          >
            Ajouter au panier
          </button>
        ) : available ? (
          <div className="flex flex-row">
            <Link
              href={{
                pathname: "/login",
                query: {
                  callbackUrl: typeof window === "undefined" ? "https://www.emovin.fr" + router.asPath : `${window.location.origin}` + router.asPath,
                },
              }}
            >
              <button className="w-48 rounded text-white bg-redWine px-1 py-2 hover:opacity-80 text-center mr-3">
                Se connecter
              </button>
            </Link>
            <Link href={"/cartes"}>
              <button className="w-48 rounded text-white bg-redWine px-1 py-2 hover:opacity-80 text-center">
                Devenir membre
              </button>
            </Link>
          </div>
        ) : (
          <div className="w-48 rounded text-white bg-pink-300 px-1 py-2 cursor-not-allowed text-center">
            En rupture de stock...
          </div>
        )}
      </div>
      <p className="text-[#8F8F8F] text-center mt-3 w-2/3 ">
        Taxes incluses. <span className="underline"></span> Frais de port
        calculés à l&#39;étape de paiement. Emballage renforcé. Paiement 100%
        sécurisé.
      </p>
    </div>
  );
};

export default ProductForm;
