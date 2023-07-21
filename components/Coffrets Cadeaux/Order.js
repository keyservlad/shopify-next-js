import Image from "next/image";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { CartContext } from "../../context/ShopContext";
import Image3Coffrets from "../../public/images/coffrets/3_images_formatted.png";
import Image3CoffretsMobile from "../../public/images/coffrets/3_images_mobile_formatted.png";
import ProductRow from "./ProductRow";

import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import {
  checkoutAddress,
  checkoutCustomerAssociate,
  checkoutDiscount,
  checkoutEmailAssociate,
  createCheckout,
} from "../../lib/shopifyCheckout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

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

const Order = ({ productsCoffrets }) => {
  const { user } = useContext(CartContext);
  const session = useSession();
  const router = useRouter();

  const commander = async () => {
    setIsLoading(true);
    // check that we have at least three products in the order state
    if (
      Object.values(orderState).reduce((acc, product) => {
        return acc + product.quantity;
      }, 0) < 3
    ) {
      setIsLoading(false);
      return;
    }
    // create the variants (array or integrate in the object directly?)

    const variants = [];
    Object.values(orderState).map((product) => {
      if (product.quantity > 0) {
        variants.push({
          variantQuantity: product.quantity,
          id:
            user && session.status === "authenticated"
              ? product.product.variants.nodes[1].id
              : product.product.variants.nodes[0].id,
          handle: product.product.handle,
        });
      }
    });

    // create the checkout

    let checkout = await createCheckout(variants);

    // apply discounts if the user is logged in
    if (user && session.status === "authenticated") {
      checkout = await checkoutCustomerAssociate(
        checkout.id,
        session.data.user.token.accessToken
      );

      let defaultAddress = user.defaultAddress;
      delete defaultAddress.id;
      defaultAddress = JSON.stringify(defaultAddress);
      defaultAddress = defaultAddress.replace(/"([^"]+)":/g, "$1:"); // remove quotes for keys
      checkout = await checkoutAddress(checkout.id, defaultAddress);
      checkout = await checkoutEmailAssociate(checkout.id, user.email);
      // for (let i = 0; i < variants.length; i++) {
      //   checkout = await checkoutDiscount(checkout.id, variants[i].handle);
      // }

      // removed bc idk what it does // maybe it's for the coffret cadeau member reduction?
      // checkout = await checkoutDiscount(checkout.id, "coffret-cadeau");
    }

    checkout;

    // route to checkout url

    router.push(checkout.webUrl);

    // setIsLoading(false);
  };

  const [orderState, setOrderState] = useState(
    productsCoffrets.map((item) => {
      return {
        quantity: 0,
        product: item.node,
      };
    })
  );
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   console.log(orderState);
  // }, [orderState]);

  const [variant, setVariant] = useState({
    id: "product.variants.edges[0].node.id",
    title: "product.title",
    handle: "product.handle",
    image: "product.images.edges[0].node.originalSrc",
    variantPrice: "product.variants.edges[0].node.priceV2.amount",
    variantQuantity: 1,
    prix_membre: "product.prix_membre?.priceV2.amount",
  });

  useEffect(() => {
    console.log(orderState);
  }, [orderState]);
  return (
    <div className="px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 flex flex-col">
      <div className="flex flex-col lg:flex-row justify-center gap-14 mt-10 lg:mt-24">
        <div className="basis-2/5">
          <div className="relative aspect-[0.8226087] max-w-md lg:max-w-xl mx-auto hidden lg:block">
            <Image
              src={Image3Coffrets}
              alt="3 coffrets"
              layout="fill"
              objectFit="contain"
              quality={100}
              placeholder="blur"
            />
          </div>
          <div className="relative aspect-[1.23305085] max-w-md lg:max-w-xl mx-auto lg:hidden">
            <Image
              src={Image3CoffretsMobile}
              alt="3 coffrets"
              layout="fill"
              objectFit="contain"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex flex-col basis-3/5 justify-center">
          <h1 className="text-center">Coffret Cadeaux 1 bouteille</h1>
          <p className="font-semibold mt-3 text-center">
            Faites votre choix parmi 9 vins
            <br />
            Commande minimum&nbsp;: 3 bouteilles
          </p>
          <ul className="mt-6">
            <li>• Emballage étui cadeau pour chaque bouteille</li>
            <li>• Panachage possible</li>
            <li>• Livraison sous 8 jours (date de paiement)</li>
            <li>
              • Livraison en point relais jusqu&#39;à 9 bouteilles, au delà chez
              vous
            </li>
            <li>• Prix € TTC par bouteille (tout compris)</li>
          </ul>
          {/* <p className="underline cursor-pointer font-semibold mt-8 text-sm">
            Tout savoir sur nos bouteilles cadeaux
          </p> */}
          {/* divider horizontal 2px */}
          <div className="w-full h-0.5 bg-black my-8" />
          <p className="font-bold text-sm mb-3">
            Faire plaisir à partir de 30€ TTC
          </p>
          {productsCoffrets.slice(0, 3).map((product, i, arr) => {
            return (
              <ProductRow
                key={product.node.id}
                product={product}
                i={i}
                arr={arr}
                orderState={orderState}
                setOrderState={setOrderState}
              />
            );
          })}

          <p className="font-bold text-sm mt-8 mb-3">
            Une belle occasion à partir de 38€ TTC
          </p>
          {productsCoffrets.slice(3, 6).map((product, i, arr) => {
            return (
              <ProductRow
                key={product.node.id}
                product={product}
                i={i + 3}
                arr={arr}
                orderState={orderState}
                setOrderState={setOrderState}
              />
            );
          })}

          <p className="font-bold text-sm mt-8 mb-3">
            Un grand moment à partir de 55€ TTC
          </p>
          {productsCoffrets.slice(6, 9).map((product, i, arr) => {
            return (
              <ProductRow
                key={product.node.id}
                product={product}
                i={i + 6}
                arr={arr}
                orderState={orderState}
                setOrderState={setOrderState}
              />
            );
          })}
          <div className="w-full h-px bg-black mt-14" />
          <div className="flex text-xl">
            <p className="mr-10 my-3">Nombre de bouteilles</p>
            <p className="ml-auto flex items-center">
              {Object.values(orderState).reduce((acc, product) => {
                return acc + product.quantity;
              }, 0)}
            </p>
          </div>
          <div className="w-full h-0.5 bg-black" />
          <div className="flex text-xl font-bold">
            <p className="mr-10 my-3">Prix total</p>
            <p className="ml-auto flex items-center">
              {Object.values(orderState).reduce(
                (acc, product) =>
                  user
                    ? (acc +=
                        product.quantity *
                        Number(product.product.prix_membre?.priceV2.amount))
                    : (acc +=
                        product.quantity *
                        Number(
                          product.product.priceRange.maxVariantPrice.amount
                        )),
                0
              )}{" "}
              € TTC
            </p>
          </div>
          <div className="flex flex-col items-end mt-5">
            {Object.values(orderState).reduce((acc, product) => {
              return acc + product.quantity;
            }, 0) < 3 ? (
              <>
                <p className="md:hidden text-end text-sm text-orange-600 mb-3">
                  Vous devez selectionner au moins 3 bouteilles pour continuer
                </p>
                <BootstrapTooltip
                  title="Vous devez selectionner au moins 3 bouteilles pour continuer"
                  arrow
                  placement="top"
                >
                  <button className="bg-redWine inline-block text-white font-bold border-solid rounded-xl border-redWine border-[3px] px-5 py-3 cursor-not-allowed opacity-75">
                    Commander
                  </button>
                </BootstrapTooltip>
              </>
            ) : isLoading ? (
              <button
                disabled
                className={`bg-redWine inline-block text-white font-bold border-solid rounded-xl border-redWine border-[3px] px-5 py-3 cursor-wait opacity-75`}
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
              </button>
            ) : (
              <button
                onClick={() => commander()}
                className="bg-redWine inline-block text-white font-bold border-solid rounded-xl border-redWine border-[3px] px-5 py-3 cursor-pointer hover:text-redWine hover:bg-white"
              >
                Commander
              </button>
            )}
          </div>
          <p className="text-[#8F8F8F] mt-3 flex justify-end text-end">
            Taxes et frais de port inclus.
            <br />
            Emballage renforcé. Paiement 100% sécurisé.
          </p>
        </div>
      </div>
      {/* 
      seleciton Faire plaisir 
      TODO add a component for taht
      
      <div className="relative py-12 px-9 mt-20 bg-white w-full rounded">
        <h1 className="text-3xl text-center">
          Notre sélection &#34;Faire Plaisir&#34;
        </h1>
        <p className="mt-5">asas</p>
      </div> */}
    </div>
  );
};

export default Order;
