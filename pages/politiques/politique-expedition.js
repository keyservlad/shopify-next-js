import Head from "next/head";
import React from "react";

const PolitiqueExpedition = () => {
  return (
    <>
      <Head>
        <title>Emovin : Politique d&#39;Expédition</title>
      </Head>
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 flex flex-col items-center text-center pt-10 sm:pt-20 pb-10">
        <div className="max-w-2xl 2xl:max-w-3xl">
          <h1 className="text-redWine mt-3 sm:mt-0 mb-10">
            Politique d&#39;Expédition
          </h1>
          <h2 className="text-3xl mb-5">
            Pour mieux vous satisfaire, EMOVIN vous propose 3 options pour
            l&#39;adresse de livraison :
          </h2>
          <ul className="text-left list-disc list-outside">
            <li>DOMICILE</li>
            <li>
              Point Relais &#34;Chronopost&#34; (uniquement pour les commandes
              inférieures à 20kg soit environ 10 bouteilles)
            </li>
            <li>
              PLATEFORME EMOVIN pour les opérations ponctuelles &#34;Le bon
              coup&#34;&nbsp;:
            </li>
            <ul className="list-[circle] list-inside">
              <li>Rambouillet</li>
              <li>Lyon, Grézieu-La-Varenne</li>
              <li>Avignon, Saint-Laurent-Des-Arbres</li>
              <li>Grenoble, Claix</li>
            </ul>
          </ul>
          <p className="mt-5">
            Nous expédions majoritairement avec les transporteurs suivants :
            Chronopost & Geodis mais pas exclusivement.
          </p>
          <p className="mt-5">
            Le choix du transporteur se fait en fonction de la quantité de
            bouteilles commandées, de la destination de l&#39;envoi.
          </p>
          <p className="mt-5">
            Toutes les bouteilles sont stockées sur notre plateforme logistique
            de Grenoble/Claix qui vous garantie des conditions optimales de
            conservation.
          </p>
          <p className="mt-5">
            Les colis sont préparés directement de notre plateforme logistique
            et expédiés partout en France (nous consulter pour les envois hors
            France).
          </p>
          <p className="mt-5">
            Les colis sont généralement expédiés dans les 72h suivant la
            commande.
          </p>
          <p className="mt-5">
            Tous nos emballages sont en carton renforcé spécialement conçus pour
            le transport du vin (certifié par la Poste).
          </p>
          <p className="mt-5">
            Les livraisons sont effectuées du lundi au vendredi exclusivement
            entre 9h00 et 18h00.
          </p>
          <p className="mt-5">
            Nous offrons la livraison gratuite pour les commandes à partir de
            120 bouteilles. Pour les commandes inférieures à 10 bouteilles,
            application d&#39;un forfait. Pour les commandes à partir de 10
            bouteilles, jusqu&#39;à concurrence de 120 bouteilles, application
            d&#39;un tarif unitaire à la bouteille dégressif.
          </p>
        </div>
      </div>
    </>
  );
};

export default PolitiqueExpedition;
