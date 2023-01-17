import { getCarte } from "../../lib/shopify";
import { Card } from "../../components/CardForms/Card";
import Head from "next/head";

export default function Decouverte({
  carte,
  carteDomicile,
  cartePlusPlusDomicile,
  cartePlusPlus,
}) {
  return (
    <>
      <Head>
        <title>Emovin : Carte découverte</title>
      </Head>
      <Card
        carte={carte}
        carteDomicile={carteDomicile}
        cartePlusPlus={cartePlusPlus}
        cartePlusPlusDomicile={cartePlusPlusDomicile}
      />
    </>
  );
}

export async function getStaticProps() {
  let carte = await getCarte("carte-decouverte");
  let carteDomicile = await getCarte("carte-decouverte-domicile");
  let cartePlusPlus = await getCarte("carte-decouverte-plus-plus");
  let cartePlusPlusDomicile = await getCarte(
    "carte-decouverte-domicile-plus-plus"
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
