import Image from "next/image";
import React, { useContext } from "react";
import { CartContext } from "../../context/ShopContext";

const NotreSelection = ({ productsLBC }) => {
  const cuveeMarine = {
    title: productsLBC[0].node.title,
    id: productsLBC[0].node.variants.nodes[0].id,
    variantQuantity: 1,
    handle: productsLBC[0].node.handle,
    millesime: productsLBC[0].node.millesime.value,
    vendor: productsLBC[0].node.vendor,
    variantPrice: productsLBC[0].node.priceRange.minVariantPrice.amount,
    prix_membre: productsLBC[0].node.prix_membre.value,
    appellations: productsLBC[0].node.appellation.value,
    couleur: productsLBC[0].node.couleur.value,
    image: productsLBC[0].node.featuredImage.url,
    unite: productsLBC[0].node.unite.value,
    textCaisse: (
      <>
        Prix par bouteille, conditionnement : carton de 6 bouteilles. Frais de
        livraison non inclus.
      </>
    ),
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
    textColor: "text-[#4EB799]",
    bgColor: "bg-[#EFF8F5]",
    buttonColor: "bg-[#4EB799]",
  };
  const amandiers = {
    title: productsLBC[1].node.title,
    id: productsLBC[1].node.variants.nodes[0].id,
    handle: productsLBC[0].node.handle,
    variantQuantity: 1,
    millesime: productsLBC[1].node.millesime.value,
    vendor: productsLBC[1].node.vendor,
    variantPrice: productsLBC[1].node.priceRange.minVariantPrice.amount,
    prix_membre: productsLBC[1].node.prix_membre.value,
    appellations: productsLBC[1].node.appellation.value,
    couleur: productsLBC[1].node.couleur.value,
    image: productsLBC[1].node.featuredImage.url,
    unite: productsLBC[1].node.unite.value,
    textCaisse: (
      <>
        Prix par bouteille, conditionnement : carton de 6 bouteilles. Frais de
        livraison non inclus.
      </>
    ),
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
    textColor: "text-[#A51D46]",
    bgColor: "bg-[#F9F3F6]",
    buttonColor: "bg-[#A51D46]",
  };
  const capriceValentin = {
    title: productsLBC[2].node.title,
    id: productsLBC[2].node.variants.nodes[0].id,
    handle: productsLBC[0].node.handle,
    variantQuantity: 1,
    millesime: productsLBC[2].node.millesime.value,
    vendor: productsLBC[2].node.vendor,
    variantPrice: productsLBC[2].node.priceRange.minVariantPrice.amount,
    prix_membre: productsLBC[2].node.prix_membre.value,
    appellations: productsLBC[2].node.appellation.value,
    couleur: productsLBC[2].node.couleur.value,
    image: productsLBC[2].node.featuredImage.url,
    unite: productsLBC[2].node.unite.value,
    textCaisse: (
      <>
        Prix par bouteille, conditionnement : caissse en bois de 6 bouteilles.
        Frais de livraison non inclus.
      </>
    ),
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
    textColor: "text-[#A51D46]",
    bgColor: "bg-[#F9F3F6]",
    buttonColor: "bg-[#A51D46]",
  };

  const bouteilles = [cuveeMarine, amandiers, capriceValentin];

  const { addToCart } = useContext(CartContext);

  return (
    <>
      {/* desktop */}
      <div className="hidden md:block">
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 mt-20 bg-[url('/images/bon-coup/bg-lbc.jpeg')] bg-center bg-cover bg-no-repeat">
          <h1 className="text-center py-20">Notre sélection</h1>
          <div className="grid grid-cols-3 gap-x-10 xl:gap-x-16">
            {bouteilles.map((bouteille) => {
              const variant = {
                id: bouteille.id,
                title: bouteille.title,
                handle: bouteille.handle,
                image: bouteille.image,
                variantQuantity: bouteille.variantQuantity,
                variantPrice: bouteille.variantPrice,
              };

              return (
                <div className="px-3 rounded-t bg-white" key={bouteille.id}>
                  <div
                    className="relative w-full bg-white m-auto aspect-[0.65] max-h-96 overflow-hidden group-hover:opacity-75 sm:h-auto mt-10
              "
                  >
                    <Image
                      src={bouteille.image}
                      alt={
                        bouteille.title
                          ? bouteille.image.title
                          : "Image bouteille"
                      }
                      layout="fill"
                      objectFit="contain"
                      quality={100}
                      className="bg-[url('/images/loader.gif')] bg-center bg-cover bg-no-repeat"
                    />
                  </div>
                  <div className="px-5 py-5 text-center">
                    <h2 className={`font-semibold ${bouteille.textColor}`}>
                      {bouteille.title} {bouteille.millesime}
                    </h2>
                    <p>
                      {bouteille.appellations} {bouteille.couleur}
                    </p>
                    <p className="text-sm text-[#707070]">{bouteille.vendor}</p>
                    <div className="w-full border-b border-[#8F8F8F] mt-10" />
                    <div className="flex flex-row items-center justify-center space-x-10 mt-5">
                      <div className="">
                        <p className="text-xs">Public</p>
                        <p className="text-center">
                          {bouteille.variantPrice / bouteille.unite} €
                        </p>
                      </div>
                      <div className={`font-bold ${bouteille.textColor}`}>
                        <p className="text-xs">Public</p>
                        <p className="text-center">
                          {bouteille.prix_membre / bouteille.unite} €
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(variant)}
                      className={`inline-flex justify-center py-2 px-4 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${bouteille.buttonColor} hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    >
                      Ajouter au panier
                    </button>

                    <p className="text-xs text-[#8F8F8F] mt-5">
                      {bouteille.textCaisse}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40">
          <div className="grid grid-cols-3 gap-x-10 xl:gap-x-16">
            {bouteilles.map((bouteille) => (
              <>
                <div
                  className={`${bouteille.bgColor} p-7 text-left`}
                  key={bouteille.id}
                >
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
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40">
          <div className="grid grid-cols-3 gap-x-10 xl:gap-x-16">
            {bouteilles.map((bouteille) => (
              <>
                <p
                  className={`${bouteille.bgColor} px-7 pb-7 text-left rounded-b font-caveat text-2xl`}
                  key={bouteille.id}
                >
                  {bouteille.accroche}
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden w-full px-5 pb-5 sm:px-10 mt-20 bg-[url('/images/bon-coup/bg-lbc.jpeg')] bg-cover bg-center">
        <h1 className="text-center py-20">Notre sélection</h1>
        {bouteilles.map((bouteille) => {
          const variant = {
            id: bouteille.id,
            title: bouteille.title,
            handle: bouteille.handle,
            image: bouteille.image,
            variantQuantity: bouteille.variantQuantity,
            variantPrice: bouteille.variantPrice,
          };

          return (
            <div className="mb-5">
              <div className="p-3 rounded-t bg-white" key={bouteille.id}>
                <div className="relative w-full bg-white m-auto aspect-[0.65] max-h-96 overflow-hidden sm:h-auto">
                  <Image
                    src={bouteille.image}
                    alt={
                      bouteille.title
                        ? bouteille.image.title
                        : "Image bouteille"
                    }
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    className="bg-[url('/images/loader.gif')] bg-center bg-cover bg-no-repeat"
                  />
                </div>
                <div className="px-5 py-5 text-center">
                  <h2 className={`font-semibold ${bouteille.textColor}`}>
                    {bouteille.title} {bouteille.millesime}
                  </h2>
                  <p>
                    {bouteille.appellations} {bouteille.couleur}
                  </p>
                  <p className="text-sm text-[#707070]">{bouteille.vendor}</p>
                  <div className="w-full border-b border-[#8F8F8F] mt-10" />
                  <div className="flex flex-row items-center justify-center space-x-10 mt-5">
                    <div className="">
                      <p className="text-xs">Public</p>
                      <p className="text-center">
                        {bouteille.variantPrice / bouteille.unite} €
                      </p>
                    </div>
                    <div className={`font-bold ${bouteille.textColor}`}>
                      <p className="text-xs">Public</p>
                      <p className="text-center">
                        {bouteille.prix_membre / bouteille.unite} €
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(variant)}
                    className={`inline-flex justify-center py-2 px-4 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${bouteille.buttonColor} hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    Ajouter au panier
                  </button>

                  <p className="text-xs text-[#8F8F8F] mt-5">
                    {bouteille.textCaisse}
                  </p>
                </div>
              </div>
              <div className={`${bouteille.bgColor} p-7 text-left`}>
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
                </p>
              </div>
              <p
                className={`${bouteille.bgColor} px-7 pb-7 text-left rounded-b font-caveat text-2xl`}
              >
                {bouteille.accroche}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NotreSelection;
