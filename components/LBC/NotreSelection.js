import React from "react";

const NotreSelection = ({ productsLBC }) => {
  const cuveeMarine = {
    title: productsLBC[0].node.title,
    id: productsLBC[0].node.variants.nodes[0].id,
    variantQuantity: 1,
    millesime: productsLBC[0].node.millesime.value,
    vendor: productsLBC[0].node.vendor,
    price: productsLBC[0].node.priceRange.minVariantPrice.amount,
    prix_membre: productsLBC[0].node.prix_membre.value,
    appellations: productsLBC[0].node.appellation.value,
    couleur: productsLBC[0].node.couleur.value,
    featuredImage: productsLBC[0].node.featuredImage,
    unite: productsLBC[0].node.unite.value,
    cepages: <>Roussanne 50%, Marsanne 50%</>,
    age: <>21 à 41 ans</>,
    rendement: <>40 hl/ha</>,
    vendanges: <>Manuelles</>,
    elevage: <>6 mois en cuve béton ovoîde</>,
    garde: <>1 à 6 ans (voire plus)</>,
    table: (
      <>
        Saumon à l&#39;oseille façon «&nbsp;Troisgros&nbsp;», volaille de Bresse
        aux morilles, Beaufort d&#39;été ou vieux comté
      </>
    ),
    accroche: <>Un Crozes tendu et puissant apte au vieillissement&nbsp;!</>,
  };
  const amandiers = {
    title: productsLBC[1].node.title,
    id: productsLBC[1].node.variants.nodes[0].id,
    variantQuantity: 1,
    millesime: productsLBC[1].node.millesime.value,
    vendor: productsLBC[1].node.vendor,
    price: productsLBC[1].node.priceRange.minVariantPrice.amount,
    prix_membre: productsLBC[1].node.prix_membre.value,
    appellations: productsLBC[1].node.appellation.value,
    couleur: productsLBC[1].node.couleur.value,
    featuredImage: productsLBC[1].node.featuredImage,
    unite: productsLBC[1].node.unite.value,
    cepages: <>Syrah 100%</>,
    age: <>11 à 28 ans</>,
    rendement: <>41 hl/ha</>,
    vendanges: <>Manuelles</>,
    elevage: <>10 mois, moitié en cuve béton et moitié en foudre de 45hl</>,
    garde: <>3 à 8/10 ans</>,
    table: (
      <>
        Oeufs meurettes à la Lyonnaise, côtes d&#39;agneau vert-pré, cochon de
        lait à la braise
      </>
    ),
    accroche: (
      <>
        La syrah qu&#39;on aime croquante et gourmande, gorgée de fruits&nbsp;!
      </>
    ),
  };
  const capriceValentin = {
    title: productsLBC[2].node.title,
    id: productsLBC[2].node.variants.nodes[0].id,
    variantQuantity: 1,
    millesime: productsLBC[2].node.millesime.value,
    vendor: productsLBC[2].node.vendor,
    price: productsLBC[2].node.priceRange.minVariantPrice.amount,
    prix_membre: productsLBC[2].node.prix_membre.value,
    appellations: productsLBC[2].node.appellation.value,
    couleur: productsLBC[2].node.couleur.value,
    featuredImage: productsLBC[2].node.featuredImage,
    unite: productsLBC[2].node.unite.value,
    cepages: <>Syrah 100%</>,
    age: <>65 ans</>,
    rendement: <>35 hl/ha</>,
    vendanges: <>Manuelles</>,
    elevage: <>18 mois en demi-muids neufs</>,
    garde: <>3 à 15 ans</>,
    table: (
      <>
        Filet de canard rôti aux airelles, joue de boeuf au fumet de syrah, ris
        de veau aux cèpes
      </>
    ),
    accroche: <>Le fleuron du Domaine, tout en finesse et complexité&nbsp;!</>,
  };

  return <div>NotreSelection</div>;
};

export default NotreSelection;
