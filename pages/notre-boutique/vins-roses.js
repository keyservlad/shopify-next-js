import { getAllProductsRose } from "../../lib/shopify";
import BoutiqueTemplate from "../../components/Boutique/BoutiqueTemplate";

export default function Home({ products }) {
  return (
    <>
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
