import { getCarte } from "../../lib/shopify";
import { Card } from "../../components/CardForms/Card";
import Head from "next/head";

export default function Immanqubles({
  carte,
  carteDomicile,
  cartePlusPlusDomicile,
  cartePlusPlus,
}) {
  return (
    <>
      <Head>
        <title>Emovin : Carte Immanquables</title>
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
  let carte = await getCarte("carte-immanquables");
  let carteDomicile = await getCarte("carte-immanquables-domicile");
  let cartePlusPlus = await getCarte("carte-immanquables-plus-plus");
  let cartePlusPlusDomicile = await getCarte(
    "carte-immanquables-domicile-plus-plus"
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
