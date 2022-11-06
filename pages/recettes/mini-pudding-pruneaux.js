import Image from "next/image";
import Recette from "../../components/Recettes/Recette";
import ImagePorc from "../../public/images/recettes/plat6.png";
import VectorRedWine from "../../public/images/recettes/VectorWhiteWine.png";
import ImageBouteille from "../../public/images/recettes/bouteille6.png";
import Head from "next/head";
import Contact from "../../components/Contact/contact";
import { useState } from "react";

const MiniPuddingPruneaux = () => {
  const recette = {
    title: <>Mini pudding aux pruneaux et armagnac</>,
    numberPerson: 6,
    image: ImagePorc,
    vector: VectorRedWine,
    imageBouteille: ImageBouteille,
    ingredients: (
      <div className="text-[#6D6D6D]">
        <p className="mt-5">
          300g de pruneaux dénoyautés (150g hachés et 150g en purée)
        </p>

        <p>1 c/s de bicarbonate de soude</p>
        <p>300ml d&#39;eau chaude</p>
        <p>100g de beurre très mou plus supplément à la graisse</p>
        <p>170g de cassonade foncée</p>
        <p>2 oeufs</p>
        <p>
          170g de farine à gâteau avec levure incorporée (ou farine + sachet de
          levure)
        </p>
        <p>1 c/s d&#39;essence de vanille</p>
        <p>1 c/s de zeste d&#39;orange râpé</p>
        <p>Armagnac à finir</p>

        <p className="mb-5">250ml de crème fraiche</p>

        <p className="font-bold">Sauce :</p>
        <p>200g de cassonade foncée</p>
        <p>200g de crème épaisse</p>
        <p>80g beurre</p>
        <p>80g de mélasse noire de canne à sucre</p>
      </div>
    ),
    fourneaux: (
      <>
        <p className="font-bold">
          A vos fourneaux&nbsp;… prêt&nbsp;! Partez&nbsp;!
        </p>
        <p>Préchauffer le four à 200°C.</p>

        <p className="mt-3">
          Dans un bol, mélanger les pruneaux hachés, la purée de pruneaux, le
          bicarbonate de soude, ajouter l&#39;eau chaude et réserver.
        </p>

        <p className="mt-3">
          Dans un autre bol, battre le beurre et le sucre jusqu&#39;à obtenir
          une couleur pale, puis ajouter les œufs un à la fois, en fouettant
          continuellement.
          <br />
          Incorporer une cuillère à soupe de farine avec l&#39;œuf final pour
          éviter le caillage.
          <br />
          Incorporer délicatement le reste de la farine, puis ajouter la
          préparation du premier bol avec le zeste de vanille et d&#39;orange.
        </p>
        <p className="mt-3">
          Versez le mélange dans un moule à muffins ou cupcakes (6 unités), puis
          enfourner pendant 20mns (pour vérifier la cuisson, insérer une fine
          lame de couteau dans le gâteau, elle doit ressortir propre).
        </p>
        <p className="mt-3">
          Porter à ébullition tous les ingrédients de la sauce dans une petite
          casserole, baisser le feu et laisser mijoter pendant 5mns.
        </p>
        <p className="font-bold mt-3">Dressage</p>
        <p className="">
          Démouler les puddings et versez 2 c. à soupe de sauce au fond de
          chaque moule. Remettre les puddings dans les moules et enfourner
          pendant 2mns.
        </p>
        <p className="mt-3">
          Démouler les puddings et dresser sur assiette avec une quenelle de
          crème fraîche épaisse et quelques gouttes d&#39;armagnac.
        </p>
      </>
    ),
    recommande: {
      text: (
        <>
          <h2 className="font-light text-3xl">
            Côtes de Gascogne, Domaine Horgelus
            <br />
            Blanc Moelleux 2021
          </h2>
          <p className="text-redWine mt-7">
            Un vin régional pour un dessert régional&nbsp;!
            <br />
            Quand le moelleux, la finesse aromatique et la belle acidité de ce
            vin&nbsp;… vient merveilleusement équilibrer la puissance et le
            confit du pruneau tout en atténuant les saveurs sucrée de la
            cassonade&nbsp;! Une belle rencontre.
          </p>

          <p className="mt-7">
            <strong>
              ... et pour ceux qui n&#39;en ont plus en cave, EMOVIN vous
              propose une Box de 3 bouteilles au doux prix de 25€ TTC,{" "}
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
        <title>Emovin : Pintade rotie</title>
      </Head>
      <Recette recette={recette} color={"white"} />
      <Contact open={isContactFormOpen} setOpen={setIsContactFormOpen} />
    </>
  );
};

MiniPuddingPruneaux.auth = true;
export default MiniPuddingPruneaux;
