import Image from "next/image";
import ProductForm from "./ProductForm";
import RecommendedList from "./RecommendedList";

export default function ProductPageContent({ product }) {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-center md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <div className="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
          <div className="relative w-full m-auto aspect-[0.65] max-h-96 overflow-hidden group-hover:opacity-75 sm:h-auto">
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
            />
          </div>
        </div>
        <ProductForm product={product} />
      </div>
      <p className="pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto">
        {product.description}
      </p>
      <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </div>
  );
}
