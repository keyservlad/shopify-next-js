import Image from "next/image";
import Recette from "../../components/Recettes/Recette";
import ImageSalade from "../../public/images/recettes/plat2.png";
import VectorWhiteWine from "../../public/images/recettes/VectorWhiteWine.png";
import ImageBouteille from "../../public/images/recettes/bouteille2-modif.png";

const recette = {
  title: (
    <>
      <p>Salade d&#39;été pour les copines</p>
      <p>(Végétarien)</p>
    </>
  ),
  numberPerson: 6,
  image: ImageSalade,
  vector: VectorWhiteWine,
  imageBouteille: ImageBouteille,
  ingredients: (
    <div className="text-[#6D6D6D]">
      <p className="mt-5">6 pêches ou nectarines</p>
      <p>300g haricots verts</p>
      <p>300g haricots beurre</p>
      <p>1 salade romaine</p>
      <p>2 oignons rouges</p>
      <p>750g patate douce</p>
      <p>120g quinoa</p>

      <p className="font-bold mt-5">Sauce verte :</p>
      <p>1 yaourt nature (à la grecque)</p>
      <p>1/3 concombre</p>
      <p>Sel et poivre</p>

      <p className="font-bold mt-5">Vinaigrette :</p>
      <p>2 c/s mélasse de grenades (épicerie fine à Carrefour)*</p>
      <p>4 c/s huile d&#39;olive</p>
      <p>1 gousse d&#39;ail Zeste de citron</p>
      <p>2 c/s eau</p>
      <p>12 feuilles de menthe</p>
      <p>Sel et poivre</p>

      <p className="mt-5">*Si mélasse de grenade introuvable...</p>
      <p>Essayez de la crème balsamique aromatisée framboise</p>
    </div>
  ),
  fourneaux: (
    <>
      <p className="font-bold">A vos fourneaux … prêt ! Partez !</p>
      <p>
        Mettre le quinoa dans une casserole d&#39;eau froide. Porter à
        ébullition, égoutter et rincer&nbsp;; Cuire ensuite le quinoa dans une
        casserole d&#39;eau bouillante salée. (Environ 10-15 mn). Egoutter et
        rincer à l&#39;eau froide (cette opération est nécessaire pour enlever
        l&#39;amertume du quinoa. Blanchir les haricots verts dans l&#39;eau
        bouillante salée en gardant une texture ferme et une belle couleur verte
        : les plonger dans un bain d&#39;eau glacée. Renouveler la procédure
        pour les haricots beurre.
      </p>
      <p>
        Couper les patates douces en tranches de 1 cm d&#39;épaisseur et griller
        au BBQ (sans huile).
      </p>
      <p>Couper les oignons en 4 et griller au BBQ.</p>
      <p>
        Couper les pêches en 2, les badigeonner d&#39;huile d&#39;olive et
        marquer au BBQ.
      </p>
      <p>Vinaigrette : mixer tous les ingrédients et réserver au frais.</p>
      <p>Sauce : mixer tous les ingrédients et réserver au frais.</p>

      <p className="mt-3">
        Mettre les aubergines directement sur la flamme (ou sous le grill du
        four) en les retournant jusqu&#39; à ce que la peau gonfle et soit
        complètement brulée. Envelopper dans du film étirable&nbsp;; après
        refroidissement retirer la peau et découper la chair fumée en petits
        cubes (la chair doit être bien moelleuse). Ajouter ensuite l&#39;ail,
        les échalotes, l&#39;huile d&#39;olive, jus de citron et
        l&#39;assaisonnement. Bien remuer et finir la cuisson à la poêle.
      </p>

      <p className="mt-3">
        Griller les échines au BBQ. Au 2/3 de cuisson, mettre les échines dans 1
        ou 2 poêles avec la marinade et terminer la cuisson à feu doux ou moyen
        en retournant souvent. (Attention : la marinade doit être caramélisée
        mais pas brûlée).
      </p>

      <p className="font-bold mt-3">Dressage</p>
      <p>
        Placer harmonieusement les ingrédients de la salade sur une assiette,
        ajouter de façon homogène la vinaigrette et la sauce verte.
      </p>
      <p className="font-bold mt-3">Le + de Bruno !</p>
      <p>
        Vous pouvez également rajouter des dés de chorizo sautés ou de fines
        tranches de suprême de poulet grillé au BBQ.
      </p>
    </>
  ),
  recommande: {
    text: (
      <>
        <h2 className="font-light text-3xl">
          Bordeaux Blanc « Château de Couronneau » Biodynamie
        </h2>
        <p className="text-redWine mt-7">
          «&nbsp;Sauvignon blanc et Sauvignon gris nous offrent un bel équilibre
          de saveur et fraicheur pour accompagner cette salade végétarienne aux
          douceurs méditerranéennes.&nbsp;»
        </p>
        <p>Servir frais : 6-9°C</p>

        <p className="mt-7">
          <strong>
            ... et pour ceux qui n&#39;en ont plus en cave, EMOVIN vous propose
            une Box de 3 bouteilles au prix doux de 38€ TTC.
          </strong>{" "}
          Frais de livraison en point relais inclus.
        </p>
        <div className="w-full flex justify-center md:justify-start">
          <button className="bg-redWine text-white px-5 py-2 rounded-lg mt-7 hover:bg-white hover:text-redWine border border-redWine">
            Nous contacter
          </button>
        </div>
      </>
    ),
    // product: "", TODO once we have the product
  },
};

const SaladeCopines = () => {
  return <Recette recette={recette} color={"white"} />;
};

SaladeCopines.auth = true;
export default SaladeCopines;
