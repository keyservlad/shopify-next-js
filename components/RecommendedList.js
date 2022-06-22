import ProductCard from "./ProductCard";

const RecommendedList = ({ products, current }) => {
  let ProductToDisplay = 3;

  return (
    <div className="bg-[#FAF8F7]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Vous aimerez aussi...
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => {
            if (product.node.id === current || ProductToDisplay < 1) {
              return null;
            } else {
              ProductToDisplay -= 1;
              return <ProductCard key={product.node.id} product={product} />;
            }
          })}
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all favorites<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecommendedList;
