import { getCarte } from "../../lib/shopify";
import { Card } from "../../components/CardForms/Card";

export default function Example({ carte }) {
  return <Card carte={carte} />;
}

export async function getStaticProps() {
  let carte = await getCarte("carte-immanquables");
  return {
    props: {
      carte,
    },
  };
}
