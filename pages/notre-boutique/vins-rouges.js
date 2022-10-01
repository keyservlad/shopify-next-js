import { getAllProductsRouge } from "../../lib/shopify";
import BoutiqueTemplate from "../../components/Boutique/BoutiqueTemplate";

export default function Home({ products }) {
  return (
    <>
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
