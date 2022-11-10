import { getCarte } from "../../lib/shopify";
import { Card } from "../../components/CardForms/Card";
import Head from "next/head";

export default function Immanqubles({ carte, carteDomicile }) {
  return (
    <>
      <Head>
        <title>Emovin : Carte Immanquables</title>
      </Head>
      <Card carte={carte} carteDomicile={carteDomicile} />
    </>
  );
}

export async function getStaticProps() {
  let carte = await getCarte("carte-immanquables");
  let carteDomicile = await getCarte("carte-immanquables-domicile");
  return {
    props: {
      carte,
      carteDomicile,
    },
    revalidate: 10,
  };
}
