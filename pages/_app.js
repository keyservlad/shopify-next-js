import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/embla.css";
import ShopProvider, { CartContext } from "../context/ShopContext";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import Loading from "../components/Loading";
import { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Script
        id="1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="2">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Head>
        <title>Emovin : le Plaisir de Partager</title>{" "}
        {/* default title : customisable on each page */}
      </Head>
      <SessionProvider session={pageProps.session}>
        {Component.auth ? (
          <ShopProvider>
            <Auth>
              <Layout>
                <Component {...pageProps} key={router.asPath} />
              </Layout>
            </Auth>
          </ShopProvider>
        ) : (
          <ShopProvider>
            <Layout>
              <Component {...pageProps} key={router.asPath} />
            </Layout>
          </ShopProvider>
        )}
      </SessionProvider>
      <Analytics />
    </>
  );
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const session = useSession({ required: true });
  const { fetchUser } = useContext(CartContext);

  useEffect(() => {
    if (session.status === "authenticated") {
      fetchUser(session.data.user.token.accessToken);
    }
  }, [session.status]);

  if (session.status === "loading") {
    return <Loading />;
  }

  // Check token expiry date
  if (Date.parse(session.data.user.token.expiresAt) > Date.now()) {
    return children;
  } else {
    signOut();
  }
}

export default MyApp;
