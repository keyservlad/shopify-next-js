import { getAllProductsBlancs } from "../../lib/shopify";
import BoutiqueTemplate from "../../components/Boutique/BoutiqueTemplate";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Emovin : Vins blancs</title>
      </Head>
      <BoutiqueTemplate products={products} pageTitle={"Nos vins blancs"} />
    </>
  );
}

export async function getStaticProps() {
  let products = await getAllProductsBlancs();

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
