import { getAllProducts, getproduct } from "../../lib/shopify";
import ProductPageContent from "../../components/ProductPageContent";

export default function ProductPage({ product }) {
  return (
    <div>
      <ProductPageContent product={product} />
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();
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
  const product = await getproduct(params.product);
  return {
    props: {
      product,
    },
  };
}
