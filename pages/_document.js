/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="True"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
