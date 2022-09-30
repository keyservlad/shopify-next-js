import { getAllProductsRose } from "../../lib/shopify";
import ProductList from "../../components/ProductList";

export default function Home({ products }) {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  let products = await getAllProductsRose();

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
