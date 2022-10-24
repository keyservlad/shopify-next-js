import { getAllProductsRouge } from "../../lib/shopify";
import BoutiqueTemplate from "../../components/Boutique/BoutiqueTemplate";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Emovin : Vins rouges</title>
      </Head>
      <BoutiqueTemplate products={products} pageTitle={"Nos vins rouges"} />
    </>
  );
}

export async function getStaticProps() {
  let products = await getAllProductsRouge();

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
