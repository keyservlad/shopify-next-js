import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/embla.css";
import ShopProvider from "../context/ShopContext";
import { SessionProvider, useSession } from "next-auth/react";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Emovin : le Plaisir de Partager</title> {/* customisable */}
      </Head>
      <SessionProvider session={pageProps.session}>
        {Component.auth ? (
          <Auth>
            <ShopProvider>
              <Layout>
                <Component {...pageProps} key={router.asPath} />
              </Layout>
            </ShopProvider>
          </Auth>
        ) : (
          <ShopProvider>
            <Layout>
              <Component {...pageProps} key={router.asPath} />
            </Layout>
          </ShopProvider>
        )}
      </SessionProvider>
    </>
  );
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <Loading />;
  }

  return children;
}

export default MyApp;
