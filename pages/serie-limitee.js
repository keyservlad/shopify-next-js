import Head from "next/head";
import ToutBu from "../components/LBC/ToutBu";
import SerieLim from "../components/SerieLim/serieLim";
import { getSerieLimitee } from "../lib/shopify";

const serieLimitee = ({ productSerieLim }) => {
  return (
    <>
      <Head>
        <title>Emovin : Série limitée</title>
      </Head>
      <ToutBu page={"serieLim"} />

      {/* <SerieLim productSerieLim={productSerieLim} /> */}
    </>
  );
};

export async function getStaticProps() {
  let productSerieLim = await getSerieLimitee();
  return {
    props: {
      productSerieLim,
    },
    revalidate: 10,
  };
}
export default serieLimitee;
