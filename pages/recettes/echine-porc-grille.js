import Image from "next/image";
import Recette from "../../components/Recettes/Recette";
import ImagePorc from "../../public/images/recettes/plat1.png";
import VectorRedWine from "../../public/images/recettes/VectorRedWine.png";
import ImageBouteille from "../../public/images/recettes/bouteille1-modif.png";
import Head from "next/head";

const recette = {
  title: (
    <>
      Enchine de porc grillé en aigre doux et romarin, Aubergine fumée à
      l&#39;ail et petite salade d&#39;herbes
    </>
  ),
  numberPerson: 6,
  image: ImagePorc,
  vector: VectorRedWine,
  imageBouteille: ImageBouteille,
  ingredients: (
    <div className="text-[#6D6D6D]">
      <p className="my-5">6 côtes d&#39;échine de porc</p>

      <p className="font-bold">Marinade :</p>
      <p>2 c/s de concentré de tomate</p>
      <p>2 c/s de miel</p>
      <p>3c/s de vinaigre balsamique</p>
      <p>1c/s de graines de coriandre</p>
      <p>1c/s de moutarde en grains</p>
      <p>1c/café de romarin frais (finement ciselé)</p>
      <p>Zeste de citron</p>
      <p>Sel et poivre</p>
      <p>1c/s pate de miso (épicerie asiatique)</p>

      <p className="font-bold mt-5">Garniture :</p>
      <p>2 à 3 aubergines</p>
      <p>4 gousses d&#39;ail</p>
      <p>2 échalotes</p>
      <p>5 c/s d&#39;huile d&#39;olive</p>
      <p>Sel et poivre</p>
      <p>½ citron pressé</p>
      <p>Sélection d&#39;herbes fraiches (selon marché)</p>

      <p className="mt-5">
        Graines de sésame toastées et olives noires émincées
      </p>
    </div>
  ),
  fourneaux: (
    <>
      <p className="font-bold">A vos fourneaux … prêt ! Partez !</p>
      <p>
        Préparer la marinade : toaster les graines de coriandre et les écraser
        au pilon. Mixer tous les ingrédients de la marinade et faire mariner les
        échines de porc au réfrigérateur pendant au moins 2 heures (idéalement
        la veille).
      </p>

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
        Déposer sur un côté de l&#39;assiette une belle portion d&#39;aubergine
        surmontée d&#39;une petite salade d&#39;herbes fraîches à l&#39;huile
        (chaud ou froid selon les goûts.) Placer l&#39;échine de l&#39;autre
        côté. Arroser avec la marinade restante et saupoudrer de graines de
        sésame toastées et d&#39;olives noires émincées.
      </p>
    </>
  ),
  recommande: {
    text: (
      <>
        <h2 className="font-light text-3xl">
          Beaujolais 1er Cru Morgon Vieilles Vignes
        </h2>
        <p className="text-redWine mt-7">
          « Issu de vieilles vignes de gamay (70-100 ans), un vin gourmand sans
          lourdeur, aux tanins bien fondus. Une belle complexité aromatique sur
          des notes de fruits rouges et d&#39;épices et qui viendront
          délicieusement se fondrent avec le jus aigre doux-romarin de
          l&#39;échine de porc tout en apportant un équilibre aromatique avec
          l&#39;aubergine fumée à l&#39;ail ».
        </p>
        <p>Servir à la température de la cave (11-13°C) ou légèrement frais.</p>

        <p className="mt-7">
          <strong>
            ... et pour ceux qui n&#39;en ont plus en cave, nous contacter
          </strong>
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

const EchinePorcPrille = () => {
  return (
    <>
      <Head>
        <title>Emovin : Echine de porc grille</title>
      </Head>
      <Recette recette={recette} color={"red"} />
    </>
  );
};

EchinePorcPrille.auth = true;
export default EchinePorcPrille;
