import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/embla.css";
import ShopProvider, { CartContext } from "../context/ShopContext";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import Loading from "../components/Loading";
import { useContext, useEffect } from "react";
import { CookieNotFound } from "@shopify/shopify-api/dist/error";
import Cookies from "js-cookie";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const cookieTemp = Cookies.get("pwd");

  // if (cookieTemp !== "FARIO007") {
  //   return (
  //     <>
  //       <Head>
  //         <title>Emovin : le Plaisir de Partager</title>
  //       </Head>
  //       <div className="flex align-center text-center items-center h-screen w-screen">
  //         <h1 className="text-redWine">
  //           Emovin est en maintenance pour une nouvelle version de
  //           l&#39;application web dans les prochains jours !
  //         </h1>
  //       </div>
  //     </>
  //   );
  // }
  return (
    <>
      <Head>
        <title>Emovin : le Plaisir de Partager</title> {/* customisable */}
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
