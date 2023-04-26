import Image from "next/image";
import Recette from "../../components/Recettes/Recette";
import ImagePorc from "../../public/images/recettes/plat9.jpg";
import VectorRedWine from "../../public/images/recettes/VectorWhiteWine.png";
import ImageBouteille from "../../public/images/recettes/bouteille9.jpg";
import Head from "next/head";
import Contact from "../../components/Contact/contact";
import { useState } from "react";

const MousseFraiseSiropBasilic = () => {
  const recette = {
    title: <>Mousse de fraises et sirop au basilic</>,
    numberPerson: 6,
    image: ImagePorc,
    vector: VectorRedWine,
    imageBouteille: ImageBouteille,
    ingredients: (
      <div className="text-[#6D6D6D]">
        <p className="mt-5">300ml de coulis de fraise</p>

        <p>1 feuille de gélatine plongée dans l&#39;eau</p>
        <p>½ c/s de jus de citron</p>
        <p>80g de sucre semoule</p>
        <p>2 blancs d&#39;oeuf</p>
        <p>150ml de crème double</p>
        <p>2 c/s de liqueur de fraise</p>
        <p>200g de fraises écrasées</p>

        <p className="font-bold mt-5">Sirop au basilic :</p>
        <p>100g de sucre semoule</p>
        <p>100ml d&#39;eau</p>
        <p>1 bouquet de basilic grossièrement hachée</p>
        <p>2 c/s Pernod (la touche du Chef)</p>

        <p className="mt-5">Thermomètre de cuisson</p>
      </div>
    ),
    fourneaux: (
      <>
        <p className="font-bold">A vos fourneaux … prêt ! Partez !</p>
        <p>
          Commencer par le sirop au basilic. Faire bouillir l&#39;eau et le
          sucre dans une petite casserole, puis ajouter la basilic. Sortir du
          feu et mixer au blender avec 2 glaçons.
        </p>
        <p>
          Mettre dans un bol posé sur un lit de glace, ajouter le Pernod et bien
          remuer.
        </p>
        <p>Garder au froid.</p>

        <p className="mt-3">
          Faire tiédir 100ml de coulis de fraise, puis ajouter la feuille de
          gélatine ramollie.
        </p>
        <p>
          Bien remuer et ajouter le reste de coulis et le jus de citron.
          Réserver au réfrigérateur.
        </p>

        <p className="mt-3">
          Dans une petite casserole, porter à ébullition 50ml d&#39;eau et le
          sucre jusqu&#39;à ce que la température atteigne 117°C (cuisson au
          Petit Boulé).
        </p>
        <p>
          Monter les blancs en neige et ajouter délicatement le sirop de sucre
          en remuant constamment au fouet jusqu&#39;à refroidissement complet de
          l&#39;appareil.
        </p>

        <p className="mt-3">Monter la crème fouettée.</p>
        <p>
          Mettre le coulis dans un grand bol, remuer vigoureusement et
          incorporer délicatement la crème fouettée, puis les blancs d&#39;oeuf
          montés en neige et les fraises écrasées.
        </p>

        <p className="font-bold mt-3">Dressage</p>
        <p>
          Dresser dans des verrines individuelles enn alternant une couche de
          mousse et 1 c/s de sirop au basilic sur plusieurs niveaux.
        </p>
      </>
    ),
    recommande: {
      text: (
        <>
          <h2 className="font-light text-3xl">
            Blanquette de Limoux « extra Brut » - Aurélie Vic
          </h2>
          <p className="text-redWine mt-7">
            « Un nez de fleurs et de fruits blancs (aubépines, pêches, poires),
            soutenu par une gourmandise abricotée. <br />
            Une explosion de fruits et de saveurs qui viennent se fondre a notre
            mousse de fraise et basilic.{" "}
            <span className="font-caveat text-xl">MIAM&nbsp;!</span>
            <br />
            Le reste déroule avec une bulle fine et riche, alliance de rondeur
            beurrée et de fraîcheur citronnée. »
          </p>
          <p>
            Servir à la température de la cave (11-13°C) ou légèrement frais.
          </p>

          <p className="mt-7">
            <strong>
              ... et pour ceux qui n&#39;en ont plus en cave, EMOVIN vous
              propose une Box de 3 bouteilles au doux prix de 40€ TTC, frais de
              livraison en point relais inclus.
            </strong>
          </p>
          <p>(offre valable jusqu&#39;au 30 juin 2023)</p>
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
        <title>Emovin : Mousse de fraises et sirop au basilic</title>
      </Head>
      <Recette recette={recette} color={"white"} bio={true} />
      <Contact open={isContactFormOpen} setOpen={setIsContactFormOpen} />
    </>
  );
};

MousseFraiseSiropBasilic.auth = true;
export default MousseFraiseSiropBasilic;
