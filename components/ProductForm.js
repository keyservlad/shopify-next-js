import { formatter } from "../utils/helper";

export default function ProductForm({ product }) {
  return (
    <div className="flex flex-col h-full w-full md:w-1/3 items-center">
      <h2 className="text-2xl font-bold text-center">{product.title}</h2>
      <p>{formatter.format(product.priceRange.minVariantPrice.amount)}</p>
      <button className="w-48 rounded text-white bg-[#A83D72] px-1 py-2 hover:bg-pink-800 ">Add to cart</button>
    </div>
  );
}
