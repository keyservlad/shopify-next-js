import { getAllProductsNotreCave } from "../../lib/shopify";
import BoutiqueTemplate from "../../components/Boutique/BoutiqueTemplate";

export default function Home({ products }) {
  return (
    <>
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
