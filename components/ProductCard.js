import Image from "next/image";
import Link from "next/link";
import { formatter } from "../utils/helper";

const ProductCard = ({ product }) => {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link href={`/product/${handle}`}>
      <a className="group bg-white rounded-md hover:drop-shadow-lg">
        <div className="group relative">
          <div className="relative w-full m-auto aspect-[0.65] max-h-96 overflow-hidden group-hover:opacity-75 sm:h-auto">
            <Image
              src={originalSrc}
              alt={altText ? altText : "Image bouteille"}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <div className="text-center">
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-1 mb-4 text-sm text-gray-500">{formatter.format(price)}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;

const myLoader = () => {
  return `/images/loader.gif`;
};
