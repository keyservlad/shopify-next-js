import HomePage from "../components/HP/HomePage";
import { getAllProductsMeilleuresVentes } from "../lib/shopify";

// TODO add notification when message error comes with router query
const test = ({ products }) => {
  return (
    <>
      <HomePage products={products}/>
    </>
  );
};

export default test;

export async function getStaticProps() {
  let products = await getAllProductsMeilleuresVentes();

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
