import Head from "next/head";
import LeBonCoup from "../components/LBC/LeBonCoup";
import ToutBu from "../components/LBC/ToutBu";
import { getAllProductsLeBonCoup } from "../lib/shopify";

const leboncoup = ({ productsLBC }) => {
  if (productsLBC.length !== 3) {
    return (
      <>
        <Head>
          <title>Emovin : Le bon coup</title>
        </Head>

        <ToutBu page={"bonCoup"} />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Emovin : Le bon coup</title>
      </Head>
      <ToutBu page={"bonCoup"} />
    </>
  );
  // return <LeBonCoup productsLBC={productsLBC} />;
};

export default leboncoup;

export async function getStaticProps() {
  let productsLBC = await getAllProductsLeBonCoup();
  return {
    props: {
      productsLBC,
    },
    revalidate: 10,
  };
}
