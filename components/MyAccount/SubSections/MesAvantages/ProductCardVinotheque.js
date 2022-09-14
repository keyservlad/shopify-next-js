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
      className="group w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden bg-white p-4 cursor-pointer"
    >
      <div className="flex items-end justify-end h-56 w-full bg-cover">
        <img
          className="h-56 w-full object-cover group-hover:opacity-75"
          src={product.node.images.edges[0].node.originalSrc}
          alt={product.node.title}
        />
      </div>
      <p>qw</p>
      <p>qw</p>
      <p>qw</p>
      <p></p>
      <p>qw</p>
      <p>qw</p>
      <p>qw</p>
    </div>
  );
};

export default ProductCardVinotheque;
