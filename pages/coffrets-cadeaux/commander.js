import Head from "next/head";
import Order from "../../components/Coffrets Cadeaux/Order";
import { getAllProductsCoffretsCadeaux } from "../../lib/shopify";

const coffretCdeaux = ({ productsCoffrets }) => {
  return (
    <>
      <Head>
        <title>Emovin : Coffrets Cadeaux Commander</title>
      </Head>
      <Order productsCoffrets={productsCoffrets} />
    </>
  );
};

export default coffretCdeaux;

export async function getStaticProps() {
  let productsCoffrets = await getAllProductsCoffretsCadeaux();
  return {
    props: {
      productsCoffrets,
    },
    revalidate: 10,
  };
}
