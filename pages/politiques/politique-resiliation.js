import Head from "next/head";
import React from "react";

const PolitiqueRemboursement = () => {
  return (
    <>
      <Head>
        <title>Emovin : Politique de résiliation</title>
      </Head>
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 flex flex-col items-center text-center pt-10 sm:pt-20 pb-10">
        <div className="max-w-2xl xl:max-w-5xl">
          <h1 className="text-redWine mt-3 sm:mt-0 mb-10">
            Politique de résiliation sur les options d&#39;achat
          </h1>
          <h2 className="text-3xl mb-5">Droit de rétractation</h2>
          <p>
            La société EMOVIN propose à ses clients de souscrire un abonnement
            annuel (carte EMOVIN) sur le site web afin de bénéficier des
            produits et services suivants :
          </p>
          <div className="flex flex-col lg:flex-row gap-10 mt-5 text-left w-full">
            <div className="">
              <p className="text-2xl mb-2">Carte découverte</p>
              <ul className="list-disc list-inside">
                <li>
                  Deux box de 3 bouteilles Les découvertes de Printemps
                  (février) + Les découverte de l&#39;automne (septembre)
                </li>
                <li>Programme de fidélité</li>
                <li>Accès illimité au blog &#34;Conseil du sommelier&#34;</li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <p className="text-2xl mb-2">Carte Immanquables</p>
              <ul className="list-disc list-inside">
                <li>
                  Deux box de 3 bouteilles Les découvertes de printemps
                  (février) + Les Grandes Appellations françaises (septembre)
                </li>
                <li>Programme de fidélité</li>
                <li>
                  Remise de 5% sur notre cave et nos achats groupés Le bon coup
                </li>
                <li>Accès illimité au blog &#34;Conseil du sommelier&#34;</li>
                <li>Audit de Cave (50 appellations maximum)</li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <p className="text-2xl mb-2">Carte Prestige</p>
              <ul className="list-disc list-inside">
                <li>
                  Deux box de 3 bouteilles Les découvertes de printemps
                  (février) + Les prestiges de France (septembre)
                </li>
                <li>Programme de fidélité</li>
                <li>
                  Remise de 5% sur notre cave et nos achats groupés Le bon coup
                </li>
                <li>Accès illimité au blog &#34;Conseil du sommelier&#34;</li>
                <li>Audit de Cave (100 appellations maximum)</li>
                <li>Participation à un événement autour du vin</li>
              </ul>
            </div>
          </div>
          <p className="mt-5">
            Tout abonnement est conclu pour un durée ferme de douze (12) mois et
            est payable dans sa totalité en début de termes. Les sommes versées
            à ce titre sont définitivement acquises par la société Emovin, y
            compris en cas de résiliation de l&#39;abonnement avant son terme.
          </p>
          <p>
            L&#39;abonnement Emovin ne peut pas être modifié avant son terme.
          </p>
          <p className="mt-5">
            Trois mois avant le terme de l&#39;abonnement, le client est informé
            de la date de l&#39;échéance et pourra alors :
          </p>
          <ul className="mt-5 list-disc list-inside text-left">
            <li>Modifier son abonnement au bénéfice d&#39;un autre</li>
            <li>Reconduire son abonnement aux conditions qui courent à date</li>
            <li>Ne pas renouveler l&#39;abonnement</li>
          </ul>
          <p className="mt-5">
            Dans tous les cas, le client devra en informer la société Emovin par
            courrier à l&#39;adresse suivante : Emovin, 50 bis rue de la grange
            colombe, 78120 Rambouillet ou par courrier électronique à
            contact@emovin.fr.
          </p>
          <p className="mt-5">
            En cas de résiliation, le crédit de points fidélité non utilisé au
            dernier jour de l&#39;abonnement sera définitivement perdu.
          </p>
          <p className="mt-5">
            Lors de la souscription d&#39;un abonnement, il appartient au client
            de vérifier que l&#39;abonnement est conforme à ses choix (données
            personnelles, options de livraison, formule d&#39;abonnement, lieux
            de livraison et / ou de facturation, etc.)
          </p>
          <p className="mt-5">
            La société Emovin se réserve le droit d&#39;étudier au cas par cas
            et d&#39;accepter ou de refuser toute souscription à un abonnement
            pour laquelle les livraisons doivent avoir lieu hors France,
            notamment au regard des règles et conditions particulières
            applicables dans le pays concerné, ce que le client reconnait et
            accepte expressément.
          </p>
          <p>
            Dans le cas de refus, la société Emovin en informera le client dans
            les plus brefs délais et remboursera du prix déjà payé et prélevé.
          </p>
        </div>
      </div>
    </>
  );
};

export default PolitiqueRemboursement;
