import { getCarte } from "../../lib/shopify";
import { Card } from "../../components/CardForms/Card";
import Head from "next/head";

export default function Prestige({
  carte,
  carteDomicile,
  cartePlusPlusDomicile,
  cartePlusPlus,
}) {
  return (
    <>
      <Head>
        <title>Emovin : Carte Prestige</title>
      </Head>
      <Card
        carte={carte}
        carteDomicile={carteDomicile}
        cartePlusPlusDomicile={cartePlusPlusDomicile}
        cartePlusPlus={cartePlusPlus}
      />
    </>
  );
}

export async function getStaticProps() {
  let carte = await getCarte("carte-prestige");
  let carteDomicile = await getCarte("carte-prestige-domicile");
  let cartePlusPlus = await getCarte("carte-prestige-plus-plus");
  let cartePlusPlusDomicile = await getCarte(
    "carte-prestige-domicile-plus-plus"
  );

  return {
    props: {
      carte,
      carteDomicile,
      cartePlusPlus,
      cartePlusPlusDomicile,
    },
    revalidate: 10,
  };
}
