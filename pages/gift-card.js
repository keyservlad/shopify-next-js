import { getAllProductsGiftCards } from "../lib/shopify";
import GiftCard from "../components/GiftCard/GiftCard";

const leboncoup = ({ productsGiftCard }) => {
  return <GiftCard productsGiftCard={productsGiftCard} />;
};

export default leboncoup;

export async function getStaticProps() {
  let productsGiftCard = await getAllProductsGiftCards();
  return {
    props: {
      productsGiftCard,
    },
    revalidate: 10,
  };
}
