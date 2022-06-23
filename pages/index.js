import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Emovin : le Plaisir de Partager</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content="Réunis tous les passionnés « d'art de Vivre » autour du Vin. Celui que l'on achète en toute confiance et que l'on a plaisir à partager avec ses amis !"
        />
        <meta property="og:title" content="Emovin : le Plaisir de Partager" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.emovin.fr" />
        <meta
          property="og:image"
          content="https://www.emovin.fr/images/logo_emovin-05.svg"
        />
        <meta
          property="og:description"
          content="Réunis tous les passionnés « d'art de Vivre » autour du Vin. Celui que l'on achète en toute confiance et que l'on a plaisir à partager avec ses amis !"
        />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:site_name" content="Emovin" />
      </Head>
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  let products = await getProductsInCollection();

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
