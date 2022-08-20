import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/embla.css";
import ShopProvider from "../context/ShopContext";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Emovin : le Plaisir de Partager</title> {/* customisable */}
      </Head>
      <SessionProvider session={pageProps.session}>
        <ShopProvider>
          <Layout>
            <Component {...pageProps} key={router.asPath} />
          </Layout>
        </ShopProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
