import { useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="bg-[#FAF8F7] w-full h-full">
      <div className="mx-auto px-4 sm:py-10 sm:px-6 lg:px-8">
        {products.length === 0 ? (
          <div className="flex justify-center items-center h-full w-full">
            <h1 className="text-redWine">Aucun produit trouvé</h1>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-6 xl:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
