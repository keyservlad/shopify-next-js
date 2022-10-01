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

export default function ProductForm({ product }) {
  const { data: productInventory } = useSWR(
    ["/api/product-available", product.handle],
    (url, id) => fetchInventory(url, id),
    { errorRetryCount: 3, revalidateOnMount: true }
  );

  const [available, setAvailable] = useState(true);
  const [stock, setStock] = useState(true);
  const session = useSession();

  const { addToCart } = useContext(CartContext);

  let variant = {
    id: product.variants.edges[0].node.id,
    title: product.title,
    handle: product.handle,
    image: product.images.edges[0].node.originalSrc,
    variantPrice: product.variants.edges[0].node.priceV2.amount,
    variantQuantity: 1,
    prix_membre: product.prix_membre?.value,
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

  return (
    <div className="flex flex-col h-full w-full md:w-1/3 items-center">
      <h2 className="text-2xl font-bold text-center">{product.title}</h2>
      <p>{formatter.format(variant.variantPrice)}</p>

      {stock ? <p>{stock} bouteilles restantes</p> : null}

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
