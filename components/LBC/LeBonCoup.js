import Image from "next/image";
import ImageHeroBonCoup from "../../public/images/bon-coup/hero-bon-coup.png";
import ImageHouraLBC from "../../public/images/bon-coup/houraLBC.png";
import ImageCloche from "../../public/images/HP/boncoup_cloche.webp";
import NotreSelection from "./NotreSelection";

const LeBonCoup = ({ productsLBC }) => {
  console.log(productsLBC);

  return (
    <>
      <div className="relative lg:aspect-[2.677] 2xl:aspect-[3.2128] w-full">
        <div className="bg-[#51BBC9] text-white flex flex-col py-16 px-5 w-full sm:px-10 lg:absolute lg:top-0 lg:left-0 lg:z-10 lg:px-20 lg:pr-10 lg:py-12 lg:w-[59%] xl:px-28 xl:py-16 xl:w-[55%] 2xl:px-40">
          <h1 className="">Notre Bon Coup du moment&nbsp;!</h1>
          <p className="font-semibold text-xl mt-6">Domaine du Murinais</p>
          <p className="font-semibold text-xl mt-1">AOP Crozes-Hermitage</p>
          <p className="font-light text-xl mt-1">
            “&nbsp;Gorgé de fruit - tout en finesse et complexité&nbsp;”
          </p>
          <p className="font-light mt-10">
            Date limite de commande : 15 octobre 2022
          </p>
        </div>
        <div className="relative aspect-[1.6064] md:w-2/3 mx-auto lg:absolute lg:top-0 lg:right-0 lg:w-[60%] 2xl:w-[50%]">
          <Image
            src={ImageHeroBonCoup}
            alt="Image fond d'écran Bruno Loubet"
            layout="fill"
            objectFit="contain"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="invisible w-full top-0 left-0 relative"></div>
      </div>
      <div className="flex flex-col text-center mt-24">
        <h2 className="text-4xl font-light">Un vin, son histoire</h2>
        <p className="mt-12 md:w-2/3 mx-auto px-5">
          Situé la commune de Beaumont Monteux au sud de l&#39;appellation le
          domaine du Murinais a été crée en 1998 par Catherine et Luc Tardy,
          après la reprise de l&#39;exploitation agricole familiale qui avait vu
          se succéder 7 générations. Plus axée sur la production fruitiere,
          l&#39;exploitation avait toujours eu des vignes mais le raisin était
          alors livré à la cave coopérative.{" "}
          <strong>
            Aujourd&#39;hui, ce domaine de 20 ha de vignes en AOC Crozes
            Hermitage, répartis sur 4 blocs de terroirs assez différents les uns
            des autres a entamé une démarche en agriculture biologique qui sera
            certifiée AB à partir du millésime 2022.
          </strong>{" "}
          Cependant les vignes n&#39;ont eu aucun désherbants ni produits
          chimiques depuis 2011. Catherine et Luc ont également entamé depuis
          2020 une démarche d&#39;agriculture biodynamique afin d&#39;essayer de
          pallier aux problèmes climatiques extrêmes qu&#39;ils prévoient pour
          les millésimes prochains.
        </p>
      </div>
      {/* TODO faire la section des bouteilles avec à partir de lg un display grid-cols-3 et avant flex-col et faire la div normal et le background une image en position absolute */}
      <NotreSelection productsLBC={productsLBC} />
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 mt-20">
        <div className="py-11 md:pb-28 grid grid-cols-1 md:grid-cols-3 md:gap-x-24">
          <div className="m-auto col-span-1">
            <Image
              src={ImageHouraLBC}
              alt="image heart page d'accueil"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col items-start col-span-2">
            <h2 className="text-4xl font-light">La Petite Histoire</h2>
            <p className="mt-5">
              J&#39;ai beaucoup d&#39;affection pour cette cuvée Marine, qui est
              aussi le prénom de ma magnifique filleule, fille de mon associé
              Jean-Louis. Je lui avais offert pour ces 18 ans un magnum de ce
              vin que son papa eut la malencontreuse idée de servir lors
              d&#39;un repas entre amis sans en avoir informé sa fille. Ce
              goujat apprit à ses dépens qu&#39;il ne fallait pas jouer avec le
              feu et dû lui offrir non pas 1 mais 3 magnums de cette belle cuvée
              pour apaiser son courroux.
            </p>
            <p className="font-caveat text-2xl mt-5">Patrick & Jean-Louis</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#E3F2FB] px-5 sm:px-10 2xl:px-40 relative">
        <div className="mt-16 py-9 lg:grid grid-cols-5 gap-x-4">
          <div className="md:grid grid-cols-5 gap-x-4 lg:col-span-4">
            <div className="grid grid-cols-4 md:col-span-2 md:gap-x-3">
              <div className="col-span-1 max-w-[100px] m-auto">
                <Image
                  src={ImageCloche}
                  alt="image ImageCloche"
                  placeholder="blur"
                />
              </div>
              <h1 className="col-span-3 text-3xl flex items-center mx-auto">
                Ne ratez plus un Bon Coup&nbsp;!
              </h1>
            </div>
            <p className="mt-8 sm:mt-3 md:col-span-3 flex justify-center mx-auto flex-col">
              Restez branché&nbsp;! Vite, contactez-nous et nous vous informons
              dès qu&#39;un nouveau Bon Coup se mette en route.
            </p>
          </div>

          <div className="mt-8 sm:mt-0 flex text-center md:inline-block col-span-1">
            {/* TODO subscribe customer and push notification to user */}
            <button className="mt-8 bg-black text-[#E3F2FB] font-bold border-solid rounded-xl border-black border-[3px] px-5 py-3 cursor-pointer w-full lg:w-auto hover:text-black hover:bg-[#E3F2FB]">
              Tenez-moi au courant
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeBonCoup;
