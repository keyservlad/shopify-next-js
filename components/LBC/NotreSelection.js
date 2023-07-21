import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useContext } from "react";
import { CartContext } from "../../context/ShopContext";
import { formatter } from "../../utils/helper";
import Bouteille from "./Bouteille";

const NotreSelection = ({ productsLBC }) => {
  const lesPentes = {
    title: productsLBC[0].node.title,
    id: productsLBC[0].node.variants.nodes[0].id,
    idPublic: productsLBC[0].node.variants.nodes[0].id,
    idMembre: productsLBC[0].node.variants.nodes[1]?.id ?? null,
    variantQuantity: 1,
    handle: productsLBC[0].node.handle,
    millesime: productsLBC[0].node.millesime?.value,
    vendor: productsLBC[0].node.vendor,
    variantPrice: productsLBC[0].node.priceRange.maxVariantPrice.amount,
    prix_membre: productsLBC[0].node.prix_membre?.priceV2.amount,
    appellations: productsLBC[0].node.appellation?.value,
    couleur: productsLBC[0].node.couleur?.value,
    image: productsLBC[0].node.images.edges[0].node.originalSrc,
    unite: productsLBC[0].node.unite?.value,
    bio: true,
    hve: false,
    textCaisse: <>Frais de livraison non inclus.</>,
    // cepages: <>Roussanne 50%, Marsanne 50%</>,
    // age: <>21 à 41 ans</>,
    // rendement: <>40 hl/ha</>,
    // vendanges: <>Manuelles</>,
    // elevage: <>6 mois en cuve béton ovoîde</>,
    // garde: <>1 à 6 ans (voire plus)</>,
    // table: (
    //   <>
    //     Saumon à l&#39;oseille façon «&nbsp;Troisgros&nbsp;», volaille de Bresse
    //     aux morilles, Beaufort d&#39;été ou vieux comté
    //   </>
    // ),
    description: (
      <>
        Sylvain Bruneau, vigneron gardien d&#39;un «&nbsp;savoir faire&nbsp;»
        ancestral nous propose un vin plaisir par excellence avec ce 100%
        Cabernet Franc Vieilles Vignes. Des arômes de fruits rouges intenses qui
        annoncent une bouche ample et soyeuse. C&#39;est frais et gourmand à
        souhait&nbsp;!
      </>
    ),
    accroche: (
      <>
        Un petit verre pour les grillardins (Viande ou poisson)&nbsp;☺&nbsp;… et
        ce qui reste pour la table&nbsp;!
      </>
    ),
    textColor: "text-[#A51D46]",
    bgColor: "bg-[#F9F3F6]",
    buttonColor: "bg-[#A51D46]",
  };
  const tracy = {
    title: productsLBC[1].node.title,
    id: productsLBC[1].node.variants.nodes[0].id,
    idPublic: productsLBC[1].node.variants.nodes[0].id,
    idMembre: productsLBC[1].node.variants.nodes[1]?.id ?? null,
    handle: productsLBC[1].node.handle,
    variantQuantity: 1,
    millesime: productsLBC[1].node.millesime?.value,
    vendor: productsLBC[1].node.vendor,
    variantPrice: productsLBC[1].node.priceRange.maxVariantPrice.amount,
    prix_membre: productsLBC[1].node.prix_membre?.priceV2.amount,
    appellations: productsLBC[1].node.appellation?.value,
    couleur: productsLBC[1].node.couleur?.value,
    image: productsLBC[1].node.images.edges[0].node.originalSrc,
    unite: productsLBC[1].node.unite?.value,
    bio: false,
    hve: true,
    textCaisse: <>Frais de livraison non inclus.</>,
    // cepages: <>Syrah 100%</>,
    // age: <>11 à 28 ans</>,
    // rendement: <>41 hl/ha</>,
    // vendanges: <>Manuelles</>,
    // elevage: <>10 mois, moitié en cuve béton et moitié en foudre de 45hl</>,
    // garde: <>3 à 8/10 ans</>,
    // table: (
    //   <>
    //     Oeufs meurettes à la Lyonnaise, côtes d&#39;agneau vert-pré, cochon de
    //     lait à la braise
    //   </>
    // ),
    description: (
      <>
        Ici le Pouilly Fumé est roi&nbsp;! Le sauvignon aussi appelé
        «&nbsp;blanc fumé&nbsp;» dévoile avec cette cuvée son expression
        aromatique, mêlant arômes végétaux à des notes citronnées, de fruits à
        chair blanche et de poivre. Un vin de précision tout en finesse et
        gourmandise&nbsp;!
      </>
    ),
    accroche: (
      <>
        Parfait à toutes les «&nbsp;sauces&nbsp;»&nbsp;…
        <br />
        Et «&nbsp;ça goutte bien&nbsp;»&nbsp;:-)
      </>
    ),
    textColor: "text-[#4EB799]",
    bgColor: "bg-[#EFF8F5]",
    buttonColor: "bg-[#4EB799]",
  };
  const coudray = {
    title: productsLBC[2].node.title,
    id: productsLBC[2].node.variants.nodes[0].id,
    idPublic: productsLBC[2].node.variants.nodes[0].id,
    idMembre: productsLBC[2].node.variants.nodes[1]?.id ?? null,
    handle: productsLBC[2].node.handle,
    variantQuantity: 1,
    millesime: productsLBC[2].node.millesime?.value,
    vendor: productsLBC[2].node.vendor,
    variantPrice: productsLBC[2].node.priceRange.maxVariantPrice.amount,
    prix_membre: productsLBC[2].node.prix_membre?.priceV2.amount,
    appellations: productsLBC[2].node.appellation?.value,
    couleur: productsLBC[2].node.couleur?.value,
    image: productsLBC[2].node.images.edges[0].node.originalSrc,
    unite: productsLBC[2].node.unite?.value,
    bio: true,
    hve: false,
    textCaisse: <>Frais de livraison non inclus.</>,
    // cepages: <>Syrah 100%</>,
    // age: <>65 ans</>,
    // rendement: <>35 hl/ha</>,
    // vendanges: <>Manuelles</>,
    // elevage: <>18 mois en demi-muids neufs</>,
    // garde: <>3 à 15 ans</>,
    // table: (
    //   <>
    //     Filet de canard rôti aux airelles, joue de boeuf au fumet de syrah, ris
    //     de veau aux cèpes
    //   </>
    // ),
    description: (
      <>
        Voisin de ses illustres ainés (Sancerre & Pouilly fumé), ce 100%
        Sauvignon Blanc a un nez agréable aux notes de fleurs blanches et
        d&#39;agrumes, une bouche tendre et vive avec une belle fraicheur. Un
        Quincy typique à la fois sec et fruité&nbsp;!
      </>
    ),
    accroche: (
      <>
        Coup de Cœur Emovin&nbsp;!! Perso, je l&#39;adore à l&#39;apéro&nbsp;…
        Excellent aussi avec des fruits de mer
      </>
    ),
    textColor: "text-[#4EB799]",
    bgColor: "bg-[#EFF8F5]",
    buttonColor: "bg-[#4EB799]",
  };

  const bouteilles = [lesPentes, tracy, coudray];

  return (
    <>
      {/* desktop */}
      <div className="hidden md:block">
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 mt-20 bg-[url('/images/bon-coup/bg-lbc.jpeg')] bg-center bg-cover bg-no-repeat">
          <h1 className="text-center py-20">Notre sélection</h1>
          <div className="grid grid-cols-3 gap-x-10 xl:gap-x-16">
            {bouteilles.map((bouteille) => (
              <Bouteille bouteille={bouteille} key={bouteille.id} />
            ))}
          </div>
        </div>
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40">
          <div className="grid grid-cols-3 gap-x-10 xl:gap-x-16">
            {bouteilles.map((bouteille) => (
              <div
                className={`${bouteille.bgColor} p-7 text-left`}
                key={bouteille.id}
              >
                {/* 
                // To complete when we have the content
                <p>
                  <strong>Cépages : </strong>
                  {bouteille.cepages}
                </p>
                <p>
                  <strong>Age des vignes : </strong>
                  {bouteille.age}
                </p>
                <p>
                  <strong>Rendement : </strong>
                  {bouteille.rendement}
                </p>
                <p>
                  <strong>Vendanges : </strong>
                  {bouteille.vendanges}
                </p>
                <p>
                  <strong>Elevage : </strong>
                  {bouteille.elevage}
                </p>
                <p>
                  <strong>Garde : </strong>
                  {bouteille.garde}
                </p>
                <p>
                  <strong>À table : </strong>
                  {bouteille.table}
                </p> */}
                <p>{bouteille.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40">
          <div className="grid grid-cols-3 gap-x-10 xl:gap-x-16">
            {bouteilles.map((bouteille) => (
              <p
                className={`${bouteille.bgColor} px-7 pb-7 text-left rounded-b font-caveat text-2xl`}
                key={bouteille.id}
              >
                {bouteille.accroche}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden w-full px-5 pb-5 sm:px-10 mt-20 bg-[url('/images/bon-coup/bg-lbc.jpeg')] bg-cover bg-center">
        <h1 className="text-center py-20">Notre sélection</h1>
        {bouteilles.map((bouteille) => (
          <Bouteille bouteille={bouteille} key={bouteille.id} />
        ))}
      </div>
    </>
  );
};

export default NotreSelection;
