import { ArrowLeftIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import ProductForm from "./ProductForm";
import RecommendedList from "./RecommendedList";

export default function ProductPageContent({ product }) {
  console.log(product);
  let color = product.tags.includes("rouge") ? "red" : null;

  return (
    <>
      <Link href="/notre-boutique" passHref>
        <a className="hover:opacity-70 cursor-pointer flex flex-row items-center mb-16 text-sm pt-8 ml-5 w-fit">
          <ArrowLeftIcon className="flex-shrink-0 h-4 w-4 mr-2" />
          Retourner sur la boutique
        </a>
      </Link>
      <div className="px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40">
        <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-center md:space-y-0 md:space-x-4 lg:space-x-8">
          <div className="overflow-hidden w-full md:w-1/3">
            <div className="relative m-auto aspect-[0.65] max-h-96 md:max-h-[600px] overflow-hidden">
              <Image
                src={product.images.edges[0].node.originalSrc}
                alt={
                  product.images.edges[0].node.altText
                    ? product.images.edges[0].node.altText
                    : "Image bouteille"
                }
                layout="fill"
                objectFit="contain"
                quality={100}
                className="bg-[url('/images/loader.gif')] bg-center bg-cover bg-no-repeat"
              />
            </div>
          </div>
          <ProductForm product={product} color={color} />
        </div>
        <p className="pt-16 space-y-8 md:space-x-4 lg:space-x-8">
          {product.description}
        </p>
        <RecommendedList
          current={product.id}
          products={product.collections.edges[0].node.products.edges}
        />
      </div>
    </>
  );
}
