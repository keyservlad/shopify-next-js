import ProductCard from "../ProductCard";

const MeilleuresVentes = ({ products }) => {
  return (
    <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40">
      <div className="text-redWine border-solid rounded-xl border-redWine border-[1px] px-5 py-3 inline-block uppercase mt-14 mb-11">
        Notre cave
      </div>
      <h1 className="text-4xl text-center sm:text-left sm:text-5xl font-normal sm:font-bold">
        Meilleures ventes
      </h1>
      <div className="mt-8 grid grid-cols-2 gap-y-10 gap-x-1 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
    </div>
  );
};

export default MeilleuresVentes;
