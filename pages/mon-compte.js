import MyAccount from "../components/MyAccount/MyAccount";
import { getAllCards, getAllProductsVinotheque } from "../lib/shopify";

const MonCompte = ({ products, cards }) => {
  return <MyAccount products={products} cards={cards.edges} />;
};

MonCompte.auth = true;
export default MonCompte;

export async function getStaticProps() {
  let products = await getAllProductsVinotheque();

  products.map((product) => {
    product.node.title = product.node.title.replace(
      " Programme de fidélité",
      ""
    );
  });

  // TODO order croissant de points de la vinotheque (done but manually to have the no photo at the end too) / but need to order and only display the ones with photos
  // but then only display the ones without photos at the end 

  let cards = await getAllCards();

  return {
    props: {
      products,
      cards,
    },
    revalidate: 10,
  };
}
