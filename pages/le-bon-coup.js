import LeBonCoup from "../components/LBC/LeBonCoup";
import ToutBu from "../components/LBC/ToutBu";
import { getAllProductsLeBonCoup } from "../lib/shopify";

const leboncoup = ({ productsLBC }) => {
  if (productsLBC.length !== 3) {
    return <ToutBu page={"bonCoup"} />;
  }
  return <ToutBu page={"bonCoup"} />;
  // return <LeBonCoup productsLBC={productsLBC} />;
};

export default leboncoup;

export async function getStaticProps() {
  let productsLBC = await getAllProductsLeBonCoup();
  return {
    props: {
      productsLBC,
    },
  };
}
