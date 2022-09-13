import MyAccount from "../components/MyAccount/MyAccount";
import { getAllProductsVinotheque } from "../lib/shopify";

const MonCompte = ({ products }) => {
  console.log(products);
  return <MyAccount />;
};

MonCompte.auth = true;
export default MonCompte;

export async function getStaticProps() {
  let products = await getAllProductsVinotheque();

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
