import Image from "next/image";
import React from "react";

const ProductCardVinotheque = ({
  product,
  setOpenQuickView,
  setCurrentProduct,
}) => {
  return (
    <div
      onClick={() => {
        setCurrentProduct(product);
        setOpenQuickView(true);
      }}
      className="group w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden bg-white py-6 cursor-pointer"
    >
      <div className="relative aspect-1 max-w-full bg-cover mx-4 group-hover:opacity-75">
        <Image
          src={product.node.images.edges[0].node.originalSrc}
          alt={product.node.images.edges[0].node.altText}
          layout="fill"
          objectFit="contain"
          quality={100}
          className="bg-[url('/images/loader.gif')] bg-center bg-cover bg-no-repeat"
        />
      </div>
      <div className="bg-redWine text-white font-semibold p-2 mt-6 group-hover:opacity-75">
        {product.node.points.value} points
      </div>
      <p className="font-semibold text-sm mt-4">
        {product.node.title} {product.node.millesime.value}
      </p>
      <p className="">{product.node.appellation.value}</p>
      <p className="text-xs">{product.node.vendor}</p>
    </div>
  );
};

export default ProductCardVinotheque;
