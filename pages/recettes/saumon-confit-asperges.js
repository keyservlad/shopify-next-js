import Image from "next/image";
import Recette from "../../components/Recettes/Recette";
import ImagePorc from "../../public/images/recettes/plat8.jpg";
import VectorRedWine from "../../public/images/recettes/VectorWhiteWine.png";
import ImageBouteille from "../../public/images/recettes/bouteille8.png";
import Head from "next/head";
import Contact from "../../components/Contact/contact";
import { useState } from "react";

const EchinePorcPrille = () => {
  const recette = {
    title: (
      <>Saumon confit aux asperges, pommes de terre nouvelles, gazpacho vert</>
    ),
    numberPerson: 4,
    customPersonNumber: (
      <>
        Ingédients pour 4 personnes (plat principal) ou 6/8 personnes (entrée)
      </>
    ),
    image: ImagePorc,
    vector: VectorRedWine,
    imageBouteille: ImageBouteille,
    ingredients: (
      <div className="text-[#6D6D6D]">
        <p className="my-5">4 pavés de saumon de 170g avec peau</p>

        <p>1 c/s de zeste de citron</p>
        <p>1 c/s de romarin haché</p>
        <p>400ml d&#39;huile d&#39;olive</p>
        <p>24 petites pommes de terre nouvelles</p>
        <p>16 pointes d&#39;asperges</p>
        <p>Sel de céleri</p>

        <p className="font-bold mt-5">Gazpacho :</p>
        <p>4 c/s d&#39;huile d&#39;olive</p>
        <p>1 c/s de vinaigre de cidre</p>
        <p>1 c/s de yaourt à la grecque</p>
        <p>100g de concombre</p>
        <p>1 oignon de printemps</p>
        <p>1 avocat</p>
        <p>½ gousse d&#39;ail</p>
        <p>4 feuilles de basilic</p>
        <p>3 feuilles de menthe</p>
        <p>Poivre et sel</p>
        <p>Poivre vert et piment (pour ceux qui aiment épicé)</p>
        <p>3 pincées de sucre</p>

        <p className="mt-5">Thermomètre de cuisson</p>
      </div>
    ),
    fourneaux: (
      <>
        <p className="font-bold">A vos fourneaux … prêt ! Partez !</p>
        <p>
          Faire mariner les pavés de saumon pendant 2 heures environ au
          réfrigérateur avec le zeste de citron, le romarin et
          l&#39;assaisonnement.
        </p>

        <p className="mt-3">
          Faire chauffer doucement l&#39;huile d&#39;olive à une température de
          50°C dans une petite casserole. Déposer les pavés de saumon sur la
          peau et cuire lentement pendant 30 minutes sans dépasser une
          température de 50/55°C (ajuster la température avec le thermomètre, ou
          régler votre plaque de cuisson sur 1).
        </p>

        <p className="mt-3">
          Cuire les pommes de terre nouvelles à l&#39;eau bouillante salée ou à
          la vapeur pendant environ 8 à 10 minutes. Egoutter et garder au chaud.
        </p>

        <p className="mt-3">
          Pour le gazpacho, mixer dans un premier temps l&#39;huile d&#39;olive,
          le vinaigre de cidre et le yaourt puis ajouter les autres ingrédients
          et mixer avec 2 glaçons pour garder la soupe froide pendant la
          préparation. Vérifier l&#39;assaisonnement et garder au frais.
        </p>
        <p className="mt-3">
          Juste avant de dresser, plonger les pointes d&#39;asperges 2 minutes
          dans l&#39;eau bouillante salée et égoutter.
        </p>
        <p className="mt-3">
          Sortir délicatement les pavés de saumon de la casserole et les déposer
          sur du papier absorbant pour enlever le surplus d&#39;huile.
        </p>

        <p className="font-bold mt-3">Dressage</p>
        <p>
          Dresser harmonieusement sur des assiettes creuses le saumon, les
          pointes d&#39;asperges et les pommes de terre nouvelles. Ajouter un
          fond de gazpacho et servir le reste du gazpacho dans une soupière ou
          des tasses individuelles.
        </p>
        <p className="mt-3 italic">Le petit « truc » du Chef :</p>
        <p>
          Vous pouvez agrémenter l&#39;assiette avec des herbes fraiches du
          jardin.
        </p>
        <p>
          Pour réutiliser l&#39;huile de cuisson, passer la au chinois et garder
          au réfrigérateur.
        </p>
      </>
    ),
    recommande: {
      text: (
        <>
          <h2 className="font-light text-3xl">
            Pouilly-fumé « Mademoiselle de T »
          </h2>
          <h3 className="font-light text-xl">Château de Tracy - 2022</h3>
          <p className="text-redWine mt-7">
            « Le Sauvignon qu&#39;on adore : senteurs d&#39;agrumes, fines
            fragrances printanières et discrète note crayeuse. <br />
            Une merveille pour accompagner ce saumon confit aux asperges&nbsp;!!
            ».
          </p>
          <p>
            Servir à la température de la cave (11-13°C) ou légèrement frais.
          </p>

          <p className="mt-7">
            <strong>
              ... et pour ceux qui n&#39;en ont plus en cave, EMOVIN vous
              propose une Box de 3 bouteilles au doux prix de 67€ TTC, frais de
              livraison en point relais inclus.
            </strong>
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <button
              onClick={() => {
                setIsContactFormOpen(true);
              }}
              className="bg-redWine text-white px-5 py-2 rounded-lg mt-7 hover:bg-white hover:text-redWine border border-redWine"
            >
              Nous contacter
            </button>
          </div>
        </>
      ),
      // product: "", TODO once we have the product
    },
  };

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Emovin : Saumon confit aux asperges</title>
      </Head>
      <Recette recette={recette} color={"white"} />
      <Contact open={isContactFormOpen} setOpen={setIsContactFormOpen} />
    </>
  );
};

EchinePorcPrille.auth = true;
export default EchinePorcPrille;
