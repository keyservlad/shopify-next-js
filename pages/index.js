import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";

export default function Home({ products }) {
  products = products.collectionByHandle.products.edges;
  return (
    <div className="text-3xl">
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  let products = await getProductsInCollection();
  products = products.collectionByHandle.products.edges;
  return {
    props: {
      products,
    },
  };
}
