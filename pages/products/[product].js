import { getAllProductsNotreCave, getProduct } from "../../lib/shopify";
import ProductPageContent from "../../components/Boutique/Product/ProductPageContent";
import Head from "next/head";

export default function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>Emovin : {product.title}</title>
      </Head>
      <div className="min-h-screen pb-12 bg-[#FAF8F7]">
        <ProductPageContent product={product} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const products = await getAllProductsNotreCave();
  const paths = products.map((item) => {
    const product = String(item.node.handle);
    return {
      params: {
        product,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product); // TODO initial state for available and stock remaining to avoid small loading time when we click on a product for the first time / webhook?
  return {
    props: {
      product,
    },
    revalidate: 10,
  };
}
