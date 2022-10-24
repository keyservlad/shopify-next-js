import Image from "next/image";
import Recette from "../../components/Recettes/Recette";
import ImagePorc from "../../public/images/recettes/plat4.png";
import VectorRedWine from "../../public/images/recettes/VectorRedWine.png";
import ImageBouteille from "../../public/images/recettes/bouteille4.png";
import Head from "next/head";

const recette = {
  title: (
    <>
      Pintade rôtie, sel de céleri et mélasse de grenade, pudding aux oignons et
      bacon
    </>
  ),
  numberPerson: 4,
  image: ImagePorc,
  vector: VectorRedWine,
  imageBouteille: ImageBouteille,
  ingredients: (
    <div className="text-[#6D6D6D]">
      <p className="mt-5">2 pintades prêtes à cuire</p>
      <p className="">2 grosses pommes de terre</p>
      <p>50ml de vin blanc</p>
      <p>4 brins de thym frais</p>
      <p className="mb-5">100ml de bouillon de veau ou de poulet foncé</p>

      <p className="font-bold">Marinade :</p>
      <p>4 c/s de yaourt naturel</p>
      <p>4 c/s de mélasse de grenade</p>
      <p>2 c/s de sel de céleri</p>
      <p>2 gousses d&#39;ail hachées</p>
      <p>poivre fraîchement moulu</p>
      <p>2 c/s d&#39;eau-de-vie</p>

      <p className="font-bold mt-5">Pudding :</p>
      <p>30g de beurre plus supplément pour le graissage</p>
      <p>200g de bacon strié fumé coupé en petits dés ou lanières</p>
      <p>200g d&#39;oignons bruns finement tranchés</p>
      <p>2 gousses d&#39;ail finement hachées</p>
      <p>50ml de sherry</p>
      <p>60ml de crème</p>
      <p>4 tranches de pain blanc (croûtes enlevées)</p>
      <p>2 grandes feuilles de sauge</p>
      <p>1 oeuf</p>
    </div>
  ),
  fourneaux: (
    <>
      <p className="font-bold">
        A vos fourneaux&nbsp;… prêt&nbsp;! Partez&nbsp;!
      </p>
      <p>
        Mettre tous les ingrédients de la marinade dans un bol et bien mélanger.
        <br />
        Badigeonner les pintades avec la marinade à l&#39;aide d&#39;un pinceau
        alimentaire.
        <br />
        Envelopper les volailles dans un film alimentaire et placer au
        réfrigérateur toute la nuit.
      </p>

      <p className="mt-3">
        Le lendemain, préchauffer le four à 160°C.
        <br />
        Beurrer 4 ramequins (environ 7 cms de diamètre).
        <br />À feu doux, faire mijoter avec le beurre pendant un quizaine de
        minutes le bacon, les oignons et l&#39;ail en évitant la coloration.
      </p>

      <p className="mt-3">
        Mettre cette préparation dans les ramequins et enfourner dans un plat en
        couvrant d&#39;eau à mi-hauteur les ramequins.
        <br />
        Couvrir avec du papier aluminium percé de petits trous. Cuire pendant
        environ 20 minutes.
      </p>
      <p className="mt-3">
        Retirer du feu et réserver, puis augmenter le four à 200°C.
      </p>
      <p className="mt-3">
        Pelez les pommes de terre et coupez-les en tranches uniformes. les
        déposer au fond d&#39;une cocotte et placez les pintades sur le dessus.{" "}
        <br />
        Ajouter le vin blanc, la feuille de laurier et le thym, couvrer avec un
        couvercle et enfourner pendant environ 30 minutes. <br />
        Ajouter le bouillon et faites cuire encore 15 à 20 minutes.
      </p>
      <p className="mt-3">
        Réchauffer les puddings au four ou sur la plaque dans leur bain-marie à
        feu doux.
      </p>

      <p className="font-bold mt-3">Dressage</p>
      <p>Découper les volailles.</p>
      <p className="">
        Répartissez les pommes de terre sur chaque assiette surmontée d&#39;une
        cuisse et d&#39;un suprème de pintade, ajouter un pudding par assiete et
        arroser avec le jus de cuisson.
      </p>
    </>
  ),
  recommande: {
    text: (
      <>
        <h2 className="font-light text-3xl">
          La quintessence de Preignes IGP Pays d&#39;Oc «&nbsp;Les Preignes
          Collection&nbsp;»
          <br />
          Rouge 2020
        </h2>
        <p className="text-redWine mt-7">
          Son passage de 12 mois en barrique lui apporte élégance et Générosité.
          Sa complexité et sa gourmandise lui viennent d&#39;une sélection
          minutieuse des meilleures parcelles&nbsp;!
          <br />
          Voilà un vin qui saura magnifiquement mettre en valeur un plat aux
          saveurs aromatiques exceptionnelles.
        </p>

        <p className="mt-7">
          <strong>
            ... et pour ceux qui n&#39;en ont plus en cave, EMOVIN vous propose
            une Box de 3 bouteilles au doux prix de 42€ TTC,{" "}
          </strong>
          frais de livraison en point relais inclus. <br />
          (Offre valable jusqu&#39;au 30 novemebre 2022)
        </p>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-center mt-5">
          Pour commander{" "}:
          <button className="bg-redWine text-white px-5 py-2 rounded-lg ml-3 hover:bg-white hover:text-redWine border border-redWine">
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
