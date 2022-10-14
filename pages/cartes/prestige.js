import { getCarte } from "../../lib/shopify";
import { Card } from "../../components/CardForms/Card";

export default function Prestige({ carte, carteDomicile }) {
  return <Card carte={carte} carteDomicile={carteDomicile} />;
}

export async function getStaticProps() {
  let carte = await getCarte("carte-prestige");
  let carteDomicile = await getCarte("carte-prestige-domicile");
  return {
    props: {
      carte,
      carteDomicile,
    },
  };
}
