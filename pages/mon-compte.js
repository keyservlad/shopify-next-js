import MyAccount from "../components/MyAccount/MyAccount";
import { getAllProductsVinotheque } from "../lib/shopify";

const MonCompte = ({ products }) => {
  return <MyAccount products={products} />;
};

MonCompte.auth = true;
export default MonCompte;

export async function getStaticProps() {
  let products = await getAllProductsVinotheque();
  // TODO order croissant de points de la vinotheque

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
