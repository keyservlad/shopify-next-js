import { getCarte } from "../../lib/shopify";
import { Card } from "../../components/CardForms/Card";
import Head from "next/head";

export default function Prestige({ carte, carteDomicile }) {
  return (
    <>
      <Head>
        <title>Emovin : Carte Prestige</title>
      </Head>
      <Card carte={carte} carteDomicile={carteDomicile} />
    </>
  );
}

export async function getStaticProps() {
  let carte = await getCarte("carte-prestige");
  let carteDomicile = await getCarte("carte-prestige-domicile");
  return {
    props: {
      carte,
      carteDomicile,
    },
    revalidate: 10,
  };
}
