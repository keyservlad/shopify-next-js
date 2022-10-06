import Image from "next/image";
import Recette from "../../components/Recettes/Recette";
import ImagePorc from "../../public/images/recettes/plat3.png";
import VectorRedWine from "../../public/images/recettes/VectorRoseWine.png";
import ImageBouteille from "../../public/images/recettes/bouteille3-modif.png";

const recette = {
  title: (
    <>
      Tranche froide de lasagne aux légumes d&#39;été, Vinaigrette d&#39;herbes
      et avocat
    </>
  ),
  numberPerson: 6,
  image: ImagePorc,
  vector: VectorRedWine,
  imageBouteille: ImageBouteille,
  ingredients: (
    <div className="text-[#6D6D6D]">
      <p className="mt-5">8 feuilles de lasagnes (précuites)</p>
      <p>2 poivrons rouges</p>
      <p>1 aubergine</p>
      <p>2 courgettes</p>
      <p>150g de tomates confites</p>
      <p>1 fenouil Huile d&#39;olive</p>
      <p>Poivre et sel</p>

      <p className="font-bold mt-5">Vinaigrette :</p>
      <p>1 avocat</p>
      <p>50 cl d&#39;huile d&#39;olive</p>
      <p>½ citron pressé</p>
      <p>Poivre et sel</p>
      <p>Eau</p>

      <p className="font-bold mt-5">Bechamel :</p>
      <p>15g de beurre</p>
      <p>15g de farine</p>
      <p>20cl de lait</p>
      <p>2 c/s de concentré de tomate</p>
      <p>100g de fromage de chèvre</p>
      <p>50g de Parmesan rapé</p>
    </div>
  ),
  fourneaux: (
    <>
      <p className="font-bold">A vos fourneaux … prêt ! Partez !</p>
      <p>
        Couper l&#39;aubergine et les courgettes dans le sens de la longueur,
        badigeonner d&#39;huile d&#39;olive et assaisonner. Faire griller au BBQ
        sur les 2 faces.
      </p>

      <p>
        Emincer le fenouil et faire revenir à la poêle jusqu&#39;à ce qu&#39;il
        soit doré. (Rajouter éventuellement un peu d&#39;eau et couvrir).
      </p>
      <p>Le fenouil doit être bien moelleux.</p>
      <p>
        Cuire les poivrons au gril jusqu&#39;à ce que la peau noircisse et
        gonfle, mettre dans un plastique fermé quelques minutes, puis enlever la
        peau.
      </p>
      <p>
        <span className="font-semibold"> Béchamel :</span> Faire fondre le
        beurre et ajouter la farine, remuer avec un fouet, ajouter le lait, bien
        remuer au fouet pour éviter les grumeaux. Quand la sauce a épaissi,
        ajouter le concentré de tomate, laisser cuire à feu doux 2 minutes et
        retirer du feu. Ajouter les fromages, et remuer jusqu&#39;à ce
        qu&#39;ils soient bien fondus.
      </p>
      <p>
        <span className="font-semibold">Cuisson des lasagnes :</span> Porter à
        ébullition en y ajoutant une pincée de sel et un peu d&#39;huile pour
        éviter que les lasagnes collent. Disposer les feuilles une à une dans
        l&#39;eau bouillante. Cuire 4-5 mn (Ne pas attendre la cuisson
        complète).
      </p>

      <p>
        Tapisser une terrine de film étirable, badigeonner d&#39;huile
        d&#39;olive à l&#39;aide d&#39;un pinceau. Alterner les couches de
        lasagne, béchamel, légumes en variant les couleurs. Bien presser entre
        chaque couche.
      </p>
      <p>
        Poser un couvercle plat sur la terrine avec un poids et mettre au
        réfrigérateur toute la nuit.
      </p>
      <p>
        <span className="font-semibold">Vinaigrette :</span> Mixer tous les
        ingrédients jusqu&#39;à l&#39;obtention d&#39;une crème lisse.
      </p>

      <p className="font-bold mt-3">Dressage</p>
      <p>
        Couper des tranches de 1 cm (pour une entrée) et 2 cm (pour un plat
        principal) ; Déposer sur une assiette. A l&#39;aide d&#39;un pinceau,
        lustrer le dessus de la terrine d&#39;huile d&#39;olive. Entourer
        d&#39;un filet de vinaigrette et décorer avec des herbes fraiches et
        éventuellement des fleurs comestibles.
      </p>
    </>
  ),
  recommande: {
    text: (
      <>
        <h2 className="font-light text-3xl">
          Côtes de Provence Rosé «&nbsp;La Bravade&nbsp;» Torpez
        </h2>
        <p className="text-redWine mt-7">
          «&nbsp;Un rosé dans la pure tradition de la Provence ... avec du
          caractère mais sans excès pour s&#39;accorder sans le dominer ce plat
          aux «&nbsp;accents italiens&nbsp;» et plein de gourmandises.&nbsp;»
        </p>
        <p>Servir frais : 6-9°C</p>

        <p className="mt-7">
          <strong>
          ... et pour ceux qui n&#39;en ont plus en cave, nous contacter</strong>
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

const LasagneLegumesEte = () => {
  return <Recette recette={recette} color={"rose"} />;
};

LasagneLegumesEte.auth = true;
export default LasagneLegumesEte;
