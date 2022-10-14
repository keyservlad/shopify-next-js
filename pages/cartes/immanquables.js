import { getCarte } from "../../lib/shopify";
import { Card } from "../../components/CardForms/Card";

export default function Immanqubles({ carte, carteDomicile }) {
  return <Card carte={carte} carteDomicile={carteDomicile} />;
}

export async function getStaticProps() {
  let carte = await getCarte("carte-immanquables");
  let carteDomicile = await getCarte("carte-immanquables-domicile");
  return {
    props: {
      carte,
      carteDomicile,
    },
  };
}
