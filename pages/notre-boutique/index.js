import { getAllProductsNotreCave } from "../../lib/shopify";
import BoutiqueTemplate from "../../components/Boutique/BoutiqueTemplate";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Emovin : Notre boutique</title>
      </Head>
      <BoutiqueTemplate products={products} pageTitle={"Notre boutique"} />
    </>
  );
}

export async function getStaticProps() {
  let products = await getAllProductsNotreCave();

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
