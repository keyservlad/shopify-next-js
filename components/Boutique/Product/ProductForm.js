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

export default function ProductForm({ product, color }) {
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
          {product.nom_vin.value} {product.millesime.value}
        </h1>
      </div>
      <h2 className="text-3xl mt-2">{product.productType}</h2>
      <h2 className="text-[#8F8F8F] ">{product.vendor}</h2>
      <p className="text-lg mt-5">{product.accroche.value}</p>
      <button className="underline cursor-pointer text-sm mt-2">
        Plus de détails
      </button>
      <p className="mt-5 font-bold">
        L'unité de vente de ce produit est un carton de {product.unite.value}{" "}
        bouteilles
      </p>

      <p>{formatter.format(variant.variantPrice)}</p>

      {stock ? <p>{stock} cartons restants</p> : null}

      {available ? (
        <button
          onClick={() => {
            addToCart(variant);
            console.log(variant);
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
  );
}
