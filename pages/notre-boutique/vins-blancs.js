import { getAllProductsBlancs } from "../../lib/shopify";
import BoutiqueTemplate from "../../components/Boutique/BoutiqueTemplate";

export default function Home({ products }) {
  return (
    <>
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
