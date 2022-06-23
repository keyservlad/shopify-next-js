import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import ShopProvider from "../context/ShopContext";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Emovin : le Plaisir de Partager</title> {/* customisable */}
      </Head>
      <ShopProvider>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </ShopProvider>
    </>
  );
}

export default MyApp;
