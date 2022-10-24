import { getAllProductsRose } from "../../lib/shopify";
import BoutiqueTemplate from "../../components/Boutique/BoutiqueTemplate";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Emovin : Vins rosés</title>
      </Head>
      <BoutiqueTemplate products={products} pageTitle={"Nos vins rosés"} />
    </>
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
