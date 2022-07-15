import Image from "next/image";
import Link from "next/link";
import { formatter } from "../utils/helper";
import { StarIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductCard = ({ product }) => {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const rawColor = product.node.couleur.value;
  const color = rawColor.toLowerCase().includes("rouge")
    ? "text-redWine"
    : rawColor.toLowerCase().includes("rosé")
    ? "text-[#FA9898]"
    : "text-blueWine";
  // TODO FIX bug recommendations toujours les memes (en modifiant la collection qui va match avec "blanc" par exemple et non pas notre cave)

  const reviews = { href: "#", average: 4, totalCount: 117 };

  return (
    <Link href={`/product/${handle}`}>
      <a className="group hover:bg-white rounded-md hover:drop-shadow-lg">
        <div className="group relative p-3">
          <div className="relative w-full bg-white m-auto aspect-[0.65] max-h-96 overflow-hidden group-hover:opacity-75 sm:h-auto">
            <Image
              src={originalSrc}
              alt={altText ? altText : "Image bouteille"}
              layout="fill"
              objectFit="contain"
              quality={100}
              className="bg-[url('/images/loader.gif')] bg-center bg-cover bg-no-repeat"
            />
          </div>
          <div className="text-center leading-6 mt-5">
            <h3
              className={`mt-4 font-semibold ${
                rawColor ? color : "text-blueWine"
              }`}
            >
              {title}{" "}
              {product.node.millesime ? product.node.millesime.value : ""}
            </h3>
            <p className="">
              {product.node.nom_vin ? product.node.nom_vin.value : ""}
              {product.node.productType ? " - " + product.node.productType : ""}
            </p>
            <p className="text-xs leading-6 text-gray-500">
              {product.node.vendor ? product.node.vendor : ""}
            </p>
            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Avis</h3>
              <div className="flex justify-center items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} sur 5</p>
                {/* <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} avis
                </a> */}
              </div>
            </div>

            {/* prices */}
            <div className="grid grid-cols-2 w-60 max-w-full mx-auto pt-3 sm:p-3 border-t border-gray-400 mt-6">
              <div className="">
                <p className="text-xs font-normal">Public</p>
                <p>
                  {formatter.format(
                    product.node.priceRange.minVariantPrice.amount
                  )}
                </p>
              </div>
              <div
                className={`font-bold ${rawColor ? color : "text-blueWine"}`}
              >
                <p className="text-xs">Membres</p>
                <p>{formatter.format(product.node.prix_membre.value)}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
