import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useContext } from "react";
import { CartContext } from "../../context/ShopContext";
import { formatter } from "../../utils/helper";
import Bouteille from "./Bouteille";

const NotreSelection = ({ productsLBC }) => {
  const chateauCedre = {
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
        Ne passez pas à côté de l&#39;un des meilleurs Cahors (90% Malbec, 5%
        Tannât, 5% Merlot). Concentration, densité et volume, le raisin est
        travaillé de telle façon que la puissance n&#39;exclut pas
        l&#39;élégance et la fraîcheur&nbsp;... Le tout en BIO&nbsp;!
        <br />
        <span className="text-[#A51D46]">
          A apprécier particulièrement sur des produits locaux : Magret de
          canard, Confit, Cassoulet...
        </span>
      </>
    ),
    accroche: <>Définitivement La Référence&nbsp;! Succès garanti&nbsp;...</>,
    textColor: "text-[#A51D46]",
    bgColor: "bg-[#F9F3F6]",
    buttonColor: "bg-[#A51D46]",
  };
  const cedreHeritage = {
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
    bio: true,
    hve: false,
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
        Avec cette cuvée 100% Chardonnay, Pascal Verhaeghe a voulu renouer avec
        le cépage côtoyé dans ses débuts de vigneron en Bourgogne! Ce chardonnay
        (15 à 30 ans d&#39;âge) est planté sur des terroirs calcaires ce qui
        confère au vin une grande fraicheur.
        <br />
        <span className="text-[#4EB799]">
          La bouche se caractérise par des notes de poire, de citron et de
          fleurs blanches qui se prolongent sur une finale saline.
        </span>
      </>
    ),
    accroche: (
      <>
        Parfait à l&#39;Apéro avec des copains&nbsp;! ou sur un fromage de
        chèvre&nbsp;...s&#39;il en reste&nbsp;:)
      </>
    ),
    textColor: "text-[#4EB799]",
    bgColor: "bg-[#EFF8F5]",
    buttonColor: "bg-[#4EB799]",
  };
  const domaineRoc = {
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
    bio: false,
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
        Convaincu que les cépages Négrette (cépage roi de l&#39;appellation) et
        Syrah sont complémentaires, Frédéric Ribes crée sa cuvée Don Quichotte
        en 1995! Un assemblage Précurseur - L&#39;esprit de Cervantes entre
        idéal et réalité&nbsp;!
        <br />
        <span className="text-[#A51D46]">
          Nez aux senteurs de fruits mûrs et épices. Bouche structurée, profonde
          et concentrée avec de beaux tanins matures, velouté et une finale sur
          le fruit&nbsp;!
        </span>
      </>
    ),
    accroche: (
      <>
        Coup de Cœur Emovin !! Un bon rôti avec une &#34;&nbsp;cuisinée&nbsp;&#34; de champignons de saison ...
      </>
    ),
    textColor: "text-[#A51D46]",
    bgColor: "bg-[#F9F3F6]",
    buttonColor: "bg-[#A51D46]",
  };

  const bouteilles = [chateauCedre, cedreHeritage, domaineRoc];

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
