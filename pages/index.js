import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Emovin</title>
      </Head>
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  let products = await getProductsInCollection();
  
  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
