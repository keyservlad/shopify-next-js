import Image from "next/image";
import Recette from "../../components/Recettes/Recette";
import ImagePorc from "../../public/images/recettes/plat5.jpg";
import VectorRedWine from "../../public/images/recettes/VectorWhiteWine.png";
import ImageBouteille from "../../public/images/recettes/bouteille5.png";
import Head from "next/head";
import Contact from "../../components/Contact/contact";
import { useState } from "react";

const TartareSaumon = () => {
  const recette = {
    title: <>Tartare de saumon</>,
    numberPerson: 4,
    image: ImagePorc,
    vector: VectorRedWine,
    imageBouteille: ImageBouteille,
    ingredients: (
      <div className="text-[#6D6D6D]">
        <p className="my-5">400g de filet de saumon avec peau</p>

        <p className="font-bold">Marinade :</p>
        <p>2 c/s de sel de mer (Maldon ou Guérande)</p>
        <p>1 c/s de sucre</p>
        <p>1/3 c/s de graines de fenouil</p>
        <p>Zeste râpé de 1/4 de citron</p>
        <p>Poivre noir fraîchement moulu</p>

        <p className="font-bold mt-5">Vinaigrette :</p>
        <p>Jus de 1/2 citron</p>
        <p>1 c/s de miel clair</p>
        <p>1/2 c/s de graine de cumin, torréfiées et ecrasées</p>
        <p>1/3 c/s de gingembre frais finement râpé</p>
        <p>
          1 c/s de mélasse de grenade (des magasins asiatiques ou du
          Moyen-Orient) ou crème de balsamique
        </p>
        <p>1/2 c/s de harissa</p>

        <p className="font-bold mt-5">Garniture :</p>
        <p>
          1 c/s de graines de grenade ou 16 radis frais (selon les goûts
          personnels)
        </p>
        <p>1 c/s de coriandre fraîche hachée finement</p>
        <p>2 c/s de feuilles de menthe coupées en 2 ou 3 morceaux</p>
      </div>
    ),
    fourneaux: (
      <>
        <p className="font-bold">
          A vos fourneaux&nbsp;… prêt&nbsp;! Partez&nbsp;!
        </p>
        <p>
          Mettre le filet de saumon côté peau sur un plat couvert d&#39;une
          grande feuille d&#39;aluminium, badigeonner avec la marinade de façon
          plus généreuse dans la partie épaisse du filet.
          <br />
          Refermer la feuille d&#39;aluminium et poser un autre plat par-dessus.
        </p>

        <p className="mt-3">
          Mettre au réfrigérateur pendant au moins 12 heures.
        </p>

        <p className="mt-3">
          Mixer au blender tous les ingrédients de la vinaigrette.
        </p>

        <p className="font-bold mt-3">Dressage</p>
        <p>
          Sortir le saumon du réfrigérateur, le rincer à l&#39;eau froide,
          sécher en tapotant ou avec du sopalin.
          <br />
          Couper en tranches fines, déposer la garniture et arroser de
          vinaigrette.
        </p>
      </>
    ),
    recommande: {
      text: (
        <>
          <h2 className="font-light text-3xl">
            AOP LIMOUX «&nbsp;Le Long Chemin&nbsp;»
            <br />
            Blanc sec 2021
          </h2>
          <p className="text-redWine mt-7">
            Ce petit bijou de Chardonnay tranquille, élevé 8 mois en fûts de
            chêne neufs développe au premier nez des arômes de pain grillée et
            de fumée qui laisse rapidement place à une farandole de fruits
            blancs et de noisettes fraîches.
            <br />
            Mais au-delà de l&#39;intensité aromatiques, ce vin apportera à
            votre Tartare de saumon du corp et de la structure et répondre et
            équilibrer les saveurs d&#39;herbes aromatiques et les petites
            pointes acidulées du jus de citron.
          </p>

          <p className="mt-7">
            <strong>
              ... et pour ceux qui n&#39;en ont plus en cave, EMOVIN vous
              propose une Box de 3 bouteilles au doux prix de 35€ TTC,{" "}
            </strong>
            frais de livraison en point relais inclus. <br />
            (Offre valable jusqu&#39;au 30 novembre 2022)
          </p>
          <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-center mt-5">
            Pour commander :
            <button
              onClick={() => {
                setIsContactFormOpen(true);
              }}
              className="bg-redWine text-white px-5 py-2 rounded-lg ml-3 hover:bg-white hover:text-redWine border border-redWine"
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
        <title>Emovin : Tartare de saumon</title>
      </Head>
      <Recette recette={recette} color={"white"} />
      <Contact open={isContactFormOpen} setOpen={setIsContactFormOpen} />
    </>
  );
};

TartareSaumon.auth = true;
export default TartareSaumon;
