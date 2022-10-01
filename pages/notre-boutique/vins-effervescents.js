import BoutiqueTemplate from "../../components/Boutique/BoutiqueTemplate";
import { getAllProductsEffervescents } from "../../lib/shopify";

export default function Home({ products }) {
  return (
    <>
      <BoutiqueTemplate products={products} pageTitle={"Nos vins effervescents"} />
    </>
  );
}

export async function getStaticProps() {
  let products = await getAllProductsEffervescents();

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
