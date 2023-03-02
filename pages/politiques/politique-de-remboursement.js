import Head from "next/head";
import React from "react";

const PolitiqueRemboursement = () => {
  return (
    <>
      <Head>
        <title>Emovin : Politique de remboursement</title>
      </Head>
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 flex flex-col items-center text-center pt-10 sm:pt-20 pb-10">
        <div className="max-w-2xl 2xl:max-w-3xl">
          <h1 className="text-redWine mt-3 sm:mt-0 mb-10">
            Politique de remboursement
          </h1>
          <h2 className="text-3xl mb-5">Droit de rétractation</h2>
          <p>
            Conformément aux dispositions des articles L.221-18 et suivant du
            code de la consommation, le client ou le bénéficiaire dispose
            d&#39;un droit de rétractation qui lui permet de se désengager sans
            motif, dans un délais de 14 jours à compter de la réception du ou
            des premiers produit(s) commandé(s).
          </p>
          <p className="mt-5">
            Seuls les frais directs de renvoi de la marchandise en bonne état
            (bouteille(s) non ouverte(s) et non détériorée(s), y compris
            l&#39;étiquette) seront à la charge du client ou du bénéficiaire.
            Pour exercer son droit de rétractation, le client ou le bénéficiaire
            doit notifier sa décision sur papier libre adressé par lettre simple
            à : Emovin, 50 bis rue de la grange colombe, 78120 Rambouillet ou
            par courrier électronique à{" "}
            <a
              href="mailto:contact@emovin.fr"
              className="cursor-pointer underline"
            >
              contact@emovin.fr
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default PolitiqueRemboursement;
