import { getCarte } from "../../lib/shopify";
import { Card } from "../../components/CardForms/Card";

export default function Decouverte({ carte, carteDomicile }) {
  return <Card carte={carte} carteDomicile={carteDomicile} />;
}

export async function getStaticProps() {
  let carte = await getCarte("carte-decouverte");
  let carteDomicile = await getCarte("carte-decouverte-domicile");
  return {
    props: {
      carte,
      carteDomicile,
    },
  };
}
