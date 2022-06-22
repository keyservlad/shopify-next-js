import { formatter } from "../utils/helper";
import { useContext } from "react";
import { CartContext } from "../context/ShopContext";

export default function ProductForm({ product }) {
  const { addToCart } = useContext(CartContext);

  const variant = {
    id: product.variants.edges[0].node.id,
    title: product.title,
    handle: product.handle,
    image: product.images.edges[0].node.originalSrc,
    variantPrice: product.variants.edges[0].node.priceV2.amount,
    variantQuantity: 1,
  };
  return (
    <div className="flex flex-col h-full w-full md:w-1/3 items-center">
      <h2 className="text-2xl font-bold text-center">{product.title}</h2>
      <p>{formatter.format(variant.variantPrice)}</p>
      <button
        onClick={() => {
          addToCart(variant);
        }}
        className="w-48 rounded text-white bg-[#A83D72] px-1 py-2 hover:bg-pink-800 "
      >
        Add to cart
      </button>
    </div>
  );
}
