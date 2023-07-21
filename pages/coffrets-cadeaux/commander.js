import Head from "next/head";
import Script from "next/script";
import Order from "../../components/Coffrets Cadeaux/Order";
import { getAllProductsCoffretsCadeaux } from "../../lib/shopify";

const coffretCadeaux = ({ productsCoffrets }) => {
  console.log(productsCoffrets);
  return (
    <>
      <Head>
        <title>Emovin : Coffrets Cadeaux Commander</title>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
      <div className="min-h-screen pb-12 bg-[#FAF8F7]">
        <Order productsCoffrets={productsCoffrets} />
      </div>
    </>
  );
};

export default coffretCadeaux;

export async function getStaticProps() {
  let productsCoffrets = await getAllProductsCoffretsCadeaux();
  productsCoffrets.map((item) => {
    item.node.title = item.node.title.replace(" Coffret Cadeau", "");
  });
  return {
    props: {
      productsCoffrets,
    },
    revalidate: 10,
  };
}
