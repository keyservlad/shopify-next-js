import Image from "next/image";
import Recette from "../../components/Recettes/Recette";
import ImagePorc from "../../public/images/recettes/plat7.jpg";
import VectorRedWine from "../../public/images/recettes/VectorWhiteWine.png";
import ImageBouteille from "../../public/images/recettes/bouteille7.png";
import Head from "next/head";
import Contact from "../../components/Contact/contact";
import { useState } from "react";

const EpauleAgneauConfite = () => {
  const recette = {
    title: <>Epaule d&#39;agneau confite, sumac orange et graines de fenouil</>,
    numberPerson: 4,
    image: ImagePorc,
    vector: VectorRedWine,
    imageBouteille: ImageBouteille,
    ingredients: (
      <div className="text-[#6D6D6D]">
        <p className="my-5">
          700g/800g rôti d&#39;épaule d&#39;agneau désossée
        </p>

        <p>1 c/s de sumac</p>
        <p>3 c/s de Chutney de mangue ou de moutarde douce type « Savora »</p>
        <p>1 c/s de grains de fenouil torréfiées et écrasées</p>
        <p>1 c/s de zeste d&#39;orange</p>
        <p>3 aubergines</p>
        <p>1 gros oignon ciselé</p>
        <p>3 gousses d&#39;ail écrasées</p>
        <p>Thym frais</p>
        <p>Sel et poivre</p>
      </div>
    ),
    fourneaux: (
      <>
        <p className="font-bold">A vos fourneaux … prêt ! Partez !</p>
        <p>Préchauffer le four à 195°C.</p>
        <p>
          Couper la ficelle et ouvrir le rôti d&#39;épaule d&#39;agneau.
          Badigeonner les 2 côtés intérieurs avec la moutarde ou la chutney (ou
          les 2), ajouter uniformément le zeste d&#39;orange et les graines de
          fenouil écrasées et assaisonner avec le sumac, sel et poivre
          (attention le sumac a des propriétés salantes).
        </p>
        <p>
          Refermer le rôti et le ficeler fermement. L&#39;entourer de papier
          alu.
        </p>
        <p>
          Mettre le rôti dans un plat à four avec environ 1cm d&#39;eau au fond
          du plat et enfourner pour 3 heures en tournant le rôti toutes les 30
          minutes pour une cuisson uniforme.
        </p>

        <p className="mt-3">
          Couper les aubergines en tranches dans la diagonale. Puis ajouter un
          peu de gros sel pour les faire dégorger. Après 20 minutes, rincer les
          aubergines et faire griller les tranches des 2 côtés avec un peu
          d&#39;huile d&#39;olive jusqu&#39;à ce qu&#39;elles soient bien
          moelleuses.
        </p>
        <p>
          Au bout de 2h30 de cuisson du rôti, placer les aubergines sous le rôti
          avec l&#39;oignon, l&#39;ail et le thym et terminer la cuisson au
          four.
        </p>
        <p className="mt-3">
          Sortir le plat du four et enlever le papier alu en laissant le rôti
          dans le plat pour préserver le jus de cuisson. Sortir le rôti et le
          découper en tranches un peu épaisses.
        </p>
        <p className="font-bold mt-3">Dressage</p>
        <p>
          Dresser à l&#39;assiette en posant une tranche d&#39;épaule sur un lit
          d&#39;aubergines avec un peu de jus de cuisson.
        </p>
        <p>Accompagner d&#39;une salade de Mesclun ou de roquette.</p>
      </>
    ),
    recommande: {
      text: (
        <>
          <h2 className="font-light text-3xl">
            AOP Pic Saint Loup 2020 - Aurélie Vic, Le long chemin
          </h2>
          <p className="text-redWine mt-7">
            « Le nez est profond, aux saveurs de garrigues fraiches, fleurs de
            thym, mûres, cassis. <br />
            Tout se retrouve en Bouche avec la petite goutte bien noire et la
            réglisse, enveloppées par une texture veloutée. <br />
            Voila ce qu&#39;il fallait pour accompagner cette épaule
            d&#39;agneau confite aux saveurs méditérranéennes... ».
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
        <title>Emovin : Epaule d&#39;agneau confite</title>
      </Head>
      <Recette recette={recette} color={"white"} />
      <Contact open={isContactFormOpen} setOpen={setIsContactFormOpen} />
    </>
  );
};

EpauleAgneauConfite.auth = true;
export default EpauleAgneauConfite;
