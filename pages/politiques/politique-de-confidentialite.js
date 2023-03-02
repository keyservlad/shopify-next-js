import Head from "next/head";
import React from "react";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Head>
        <title>Emovin : Politique de Confidentialité</title>
      </Head>
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 flex flex-col items-center text-center pt-10 sm:pt-20 pb-10">
        <div className="max-w-2xl 2xl:max-w-3xl">
          <h1 className="text-redWine mt-3 sm:mt-0 mb-10">
            Politique de Confidentialité
          </h1>
          <h2 className="text-3xl mb-5">DÉCLARATION DE CONFIDENTIALITÉ</h2>
          <h3 className="text-2xl mb-5">
            ARTICLE 1 - RENSEIGNEMENTS PERSONNELS RECUEILLIS
          </h3>
          <p>
            Lorsque vous effectuez un achat sur notre boutique, dans le cadre de
            notre processus d&#39;achat et de vente, nous recueillons les
            renseignements personnels que vous nous fournissez, tels que votre
            nom, votre adresse et votre adresse e-mail.
          </p>
          <p className="mt-5">
            Lorsque vous naviguez sur notre boutique, nous recevons également
            automatiquement l&#39;adresse de protocole Internet (adresse IP) de
            votre ordinateur, qui nous permet d&#39;obtenir plus de détails au
            sujet du navigateur et du système d&#39;exploitation que vous
            utilisez.
          </p>
          <p className="mt-5">
            Marketing par e-mail (le cas échéant): Avec votre permission, nous
            pourrions vous envoyer des e-mails au sujet de notre boutique, de
            nouveaux produits et d&#39;autres mises à jour.
          </p>
          <h3 className="text-2xl my-5">ARTICLE 2 - CONSENTEMENT</h3>
          <p className="italic underline">
            Comment obtenez-vous mon consentement?
          </p>
          <p className="mt-5">
            Lorsque vous nous fournissez vos renseignements personnels pour
            conclure une transaction, vérifier votre carte de crédit, passer une
            commande, planifier une livraison ou retourner un achat, nous
            présumons que vous consentez à ce que nous recueillions vos
            renseignements et à ce que nous les utilisions à cette fin
            uniquement.
          </p>
          <p className="mt-5">
            Si nous vous demandons de nous fournir vos renseignements personnels
            pour une autre raison, à des fins de marketing par exemple, nous
            vous demanderons directement votre consentement explicite, ou nous
            vous donnerons la possibilité de refuser.
          </p>
          <p className="italic underline mt-5">
            Comment puis-je retirer mon consentement?
          </p>
          <p className="mt-5">
            Si après nous avoir donné votre consentement, vous changez
            d&#39;avis et ne consentez plus à ce que nous puissions vous
            contacter, recueillir vos renseignements ou les divulguer, vous
            pouvez nous en aviser en nous contactant à{" "}
            <a href="mailto:contact@emovin.fr">contact@emovin.fr</a> ou par
            courrier à: Emovin, 50 bis rue de la grange colombe, Rambouillet,
            78120, France
          </p>
          <h3 className="text-2xl my-5">ARTICLE 3 - DIVULGATION</h3>
          <p className="">
            Nous pouvons divulguer vos renseignements personnels si la loi nous
            oblige à le faire ou si vous violez nos Conditions Générales de
            Vente et d&#39;Utilisation.
          </p>
          <h3 className="text-2xl my-5">ARTICLE 4 - SHOPIFY</h3>
          <p className="">
            Notre boutique est hébergée sur Shopify Inc. Ils nous fournissent la
            plate-forme e-commerce en ligne qui nous permet de vous vendre nos
            services et produits.
          </p>
          <p className="mt-5">
            Vos données sont stockées dans le système de stockage de données et
            les bases de données de Shopify, et dans l&#39;application générale de
            Shopify. Vos données sont conservées sur un serveur sécurisé protégé
            par un pare-feu.
          </p>
        </div>
      </div>
    </>
  );
};

export default PolitiqueConfidentialite;
