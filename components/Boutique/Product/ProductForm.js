import { formatter } from "../../../utils/helper";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/ShopContext";
import axios from "axios";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetchInventory = (url, id) =>
  axios
    .get(url, {
      params: {
        id: id,
      },
    })
    .then((res) => res.data);

// TODO spacing feels weird on mobile
export default function ProductForm({
  product,
  color,
  scrollVinHistoireSection,
}) {
  const { data: productInventory } = useSWR(
    ["/api/product-available", product.handle],
    (url, id) => fetchInventory(url, id),
    { errorRetryCount: 3, revalidateOnMount: true }
  );

  const [available, setAvailable] = useState(true);
  const [stock, setStock] = useState(true);
  const session = useSession();
  const [variant, setVariant] = useState({
    id: product.variants.edges[0].node.id,
    title: product.title,
    handle: product.handle,
    image: product.images.edges[0].node.originalSrc,
    variantPrice: product.variants.edges[0].node.priceV2.amount,
    variantQuantity: 1,
    prix_membre: product.prix_membre?.value,
  });

  const updateQuant = (quant) => {
    setVariant({ ...variant, variantQuantity: quant });
  };

  const { addToCart } = useContext(CartContext);

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
    <div className="flex flex-col h-full w-full md:w-2/3 items-center">
      <div
        className={`flex items-center flex-col text-center w-full ${
          color === "red" ? "text-redWine" : "text-blueWine"
        }`}
      >
        <h1>{product.title}</h1>
        <h1>
          {product.nom_vin?.value} {product.millesime?.value}
        </h1>
      </div>
      <h2 className="text-2xl mt-2">{product.productType}</h2>
      <h2 className="text-[#8F8F8F] ">{product.vendor}</h2>
      <p className="text-lg mt-5">{product.accroche?.value}</p>
      <button
        onClick={() => {
          scrollVinHistoireSection();
        }}
        className="underline cursor-pointer text-sm mt-2"
      >
        Plus de détails
      </button>
      <p className="mt-5 font-bold">
        L&#39;unité de vente de ce produit est un carton de{" "}
        {product.unite?.value} bouteilles
      </p>

      {stock && stock <= 10 ? <p>{stock} cartons restants</p> : null}

      {/* <div className="border-b border-[#8F8F8F] w-2/3 md:w-1/2 max-w-xs my-3" /> */}
      <div className="flex flex-row gap-x-10 border-y border-[#8F8F8F] py-3 my-3">
        <div className="text-center">
          <p className="text-sm font-bold">Public</p>
          <p className="text-lg">{formatter.format(variant.variantPrice)}</p>
          <p className="text-[#8F8F8F]">
            {formatter.format(
              variant.variantPrice / Number(product.unite?.value)
            )}{" "}
            / bouteille
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-redWine">Membre</p>
          <p className="text-lg text-redWine font-bold">
            {formatter.format(Number(product.prix_membre?.value))}
          </p>
          <p className="text-[#8F8F8F]">
            {formatter.format(
              Number(product.prix_membre?.value) / Number(product.unite?.value)
            )}{" "}
            / bouteille
          </p>
        </div>
      </div>
      {/* <div className="border-b border-[#8F8F8F] w-2/3 md:w-1/2 max-w-xs my-3" /> */}
      <div className="flex flex-row gap-2 md:gap-5 mt-2">
        <div className="bg-white p-3 rounded flex flex-row items-center gap-2 md:gap-5">
          <label htmlFor="qte">Quantité</label>
          <input
            id="qte"
            name="qte"
            type="number"
            value={variant.variantQuantity}
            onChange={(e) => {
              if (
                typeof parseInt(e.target.value) === "number" &&
                parseInt(e.target.value) > 0
              ) {
                if (stock) {
                  // TODO add further check for stock check cumulative with what is inside the cart
                  if (parseInt(e.target.value) < stock) {
                    updateQuant(parseInt(e.target.value));
                  }
                } else {
                  updateQuant(parseInt(e.target.value));
                }
              } else {
                updateQuant(1);
              }
            }}
            className="appearance-none w-14 block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-redWine focus:border-redWine sm:text-sm"
          />
        </div>
        {available ? (
          <button
            onClick={() => {
              addToCart(variant);
            }}
            className="w-48 rounded text-white bg-redWine px-1 py-2 hover:opacity-80"
          >
            Ajouter au panier
          </button>
        ) : (
          <div className="w-48 rounded text-white bg-pink-300 px-1 py-2 cursor-not-allowed">
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
}
