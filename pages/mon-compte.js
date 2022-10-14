import MyAccount from "../components/MyAccount/MyAccount";
import { getAllCards, getAllProductsVinotheque } from "../lib/shopify";

const MonCompte = ({ products, cards }) => {
  return <MyAccount products={products} cards={cards.edges} />;
};

MonCompte.auth = true;
export default MonCompte;

export async function getStaticProps() {
  let products = await getAllProductsVinotheque();
  // TODO order croissant de points de la vinotheque

  let cards = await getAllCards();

  return {
    props: {
      products,
      cards
    },
    revalidate: 10,
  };
}
