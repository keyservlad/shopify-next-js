import { useSession } from "next-auth/react";
import Image from "next/image";
import { createRef } from "react";
import ImageHeroBonCoup from "../../public/images/bon-coup/hero-bon-coup.png";
import ImageHouraLBC from "../../public/images/bon-coup/houraLBC.png";
import ImageCloche from "../../public/images/HP/boncoup_cloche.webp";
import ImageSerieLimMar from "../../public/images/serie-lim-mar/saintCosmeSerieLim.png";
import ProductForm from "./productForm";

import Photo2Product1 from "../../public/images/serie-lim-mar/femme-nue.png";
import Photo2Product2 from "../../public/images/serie-lim-mar/montagne.png";
import Photo2Product3 from "../../public/images/serie-lim-mar/bateau.png";

import Photo1Product1 from "../../public/images/serie-lim-mar/cote-rotie.jpg";
import Photo1Product2 from "../../public/images/serie-lim-mar/saint-joseph.jpg";
import Photo1Product3 from "../../public/images/serie-lim-mar/crozes-hermitage.jpg";
import UneColonneCommeCa from "./UneColonneCommeCa";

import GIFWineGlass from "../../public/videos/serie-lim-vid.gif";

const productsDescriptions = [
  {
    title1: "SAINT COSME",
    title2: "Côte-Rôtie 2020",
    photo1: Photo1Product1,
    photo2: Photo2Product1,
    desciption: (
      <>
        100% Serine (syrah ancienne). Vendange entière. Schistes et Micaschistes
        aux lieux-dits Semons, But de Mont, Les Bercheries, Maison Rouge,
        Rozier, Côte Rozier, Besset et Bodin. Élevage de douze mois : 30% en
        pièces neuves - 70% en pièces d&#39;un vin. Rose, violette, graphite,
        charbon. Mise en bouteille sans filtration. Aucun vin n&#39;est plus
        sensuel que la Côte-Rôtie. Le charme et la féminité qui s&#39;en
        dégagent sont saisissants.
      </>
    ),
  },
  {
    title1: "SAINT COSME",
    title2: "Saint Joseph 2020",
    photo1: Photo1Product2,
    photo2: Photo2Product2,
    desciption: (
      <>
        70% Vendange égrappée - 30%. Vendange entière. Arènes granitiques du
        vallon de Malleval. Élevage de douze mois : 20% en pièces neuves - 40%
        en pièces d&#39;un vin - 40% en pièces de 2 et 3 vins. Pivoine,
        sous-bois, réglisse, tabac blond. Mise en bouteille sans filtration.
        Dans les froids granits de Malleval, les syrahs anciennes exhalent
        l&#39;âme des Saint Joseph nordiques.
      </>
    ),
  },
  {
    title1: "SAINT COSME",
    title2: "Crozes-Hermitage 2020",
    photo1: Photo1Product3,
    photo2: Photo2Product3,
    desciption: (
      <>
        100% Serine (syrah ancienne). Vendange égrappée. Sols granitiques et
        argilosableux. Élevage de douze mois : 20% en pièces neuves - 40% en
        pièces d&#39;un vin - 40% en pièces de deux vins. Lard fumé, framboise
        des bois, poivre noir, encens. Mise en bouteille sans filtration.
        CrozesHermitage 2020, c&#39;est la tendresse et la douceur du fruit
        enveloppées dans un intense rouge grenat.
      </>
    ),
  },
];

const SerieLim = ({ productSerieLim }) => {
  const session = useSession();

  const petiteHistoire = createRef();
  const descriptionsRef = createRef();

  const scrollPetiteHistoireSection = () => {
    petiteHistoire.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollDescriptions = () => {
    descriptionsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="relative lg:aspect-[2.677] 2xl:aspect-[3.2128] w-full">
        <div className="bg-gradient-to-b from-[#DEC46F] to-[#BB9B48] text-white flex flex-col py-10 px-5 w-full sm:px-10 lg:absolute lg:top-0 lg:left-0 lg:z-10 lg:px-10 lg:w-[59%] xl:py-12 xl:px-28 xl:w-[55%] 2xl:px-34">
          <h1 className="">Nos séries limitées&nbsp;!</h1>
          <p className="font-semibold text-xl lg:text-lg xl:text-xl mt-6">
            La Trilogie du Nord by Saint Cosme
          </p>
          <p className="text-xl lg:text-lg xl:text-xl mt-1">
            Assortiment de 3 bouteilles (100% Syrah - Rouge) Millésime 2020 Côte
            Rôtie, Saint Joseph & Crozes-Hermitage
          </p>
          <p className="font-light text-lg lg:text-base xl:text-lg italic mt-3">
            «&nbsp;A Saint Cosme, nous réalisons le maximum de travaux à la
            main. Je souhaite vinifier des vins qui expriment leur terroir, leur
            origine avec pureté et précision; des vins qui ont de la
            personnalité et de l&#39;équilibre. Je veux qu&#39;ils soient apte à
            Vieillir&nbsp;!&nbsp;»
          </p>
          <p className="font-light mt-2 ml-auto">Louis Barruol</p>
        </div>
        <div className="relative aspect-[1.6064] md:w-2/3 mx-auto lg:absolute lg:top-0 lg:right-0 lg:w-[60%] 2xl:w-[50%]">
          <video
            loop
            muted
            autoPlay
            playsInline
            className="w-full h-full object-cover"
            src="/videos/serie-lim-vid.mp4"
          />
        </div>
        <div className="relative aspect-[1.6064] md:w-2/3 mx-auto lg:absolute lg:top-0 lg:right-0 lg:w-[60%] 2xl:w-[50%] -z-10">
          <Image
            src={GIFWineGlass}
            alt="GIF Wine Glass"
            layout="fill"
            objectFit="cover"
            quality={100}
            className=""
          />
        </div>
        <div className="invisible w-full top-0 left-0 relative"></div>
      </div>
      <div className="flex flex-col text-center mt-24">
        <h2 className="text-4xl font-light">Un vin, son histoire</h2>
        <h3 className="mt-12 font-bold text-lg">
          Millésime 2020&nbsp;: Quel succès dans le Nord du Rhône&nbsp;!
        </h3>
        <p className="md:w-2/3 mx-auto px-5">
          Si les 2019 avaient été des vins particulièrement concentrés par
          rapport aux standards habituels de la région, on revient en 2020 à des{" "}
          <strong>profils classiques et très équilibrés</strong>.
          <br />
          Mais c&#39;est la typologie de 2020 qui est tout à fait intéressante.
          <br />
          Il y a du <strong>fruit mais sans excès</strong> et il se marie
          admirablement bien à un côté minéral si caractéristique du terroir. Il
          y a vraiment une{" "}
          <strong>complexité tout à fait remarquable dans ces 2020</strong> qui
          ont muri sans difficulté grâce à un été relativement sec.
          <br />
          Assurément un <strong>très beau millésime</strong> qui pourra attendre
          sagement au fond de la cave (notamment pour le Côte Rôtie qui pourra
          patienter au moins jusqu&#39;à 2025…)
        </p>
      </div>
      <div className="px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 mt-20">
        <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-center md:space-y-0 md:space-x-4 lg:space-x-8">
          <div className="overflow-hidden w-full md:w-1/3">
            <div
              onClick={() => {
                scrollDescriptions();
              }}
              className="relative m-auto aspect-[0.65] max-h-96 md:max-h-[600px] overflow-hidden cursor-pointer"
            >
              <Image
                src={productSerieLim.featuredImage.url}
                alt="photo bouteille"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
          </div>
          <ProductForm
            scrollPetiteHistoireSection={scrollPetiteHistoireSection}
            productSerieLim={productSerieLim}
          />
        </div>
      </div>
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 mt-20">
        <div className="py-11 md:pb-28 grid grid-cols-1 md:grid-cols-3 md:gap-x-24">
          <div className="m-auto col-span-1 relative">
            <Image
              src={ImageHouraLBC}
              alt="image heart page d'accueil"
              placeholder="blur"
            />
          </div>
          <div
            ref={petiteHistoire}
            className="flex flex-col items-start col-span-2"
          >
            <h2 className="text-4xl font-light">La Petite Histoire</h2>

            <div className="mt-2 relative max-w-sm">
              <Image
                src={ImageSerieLimMar}
                alt="image Marine de la serie lim"
                placeholder="blur"
              />
            </div>
            <p className="mt-5">
              «&nbsp;Quand le Roi du Gigondas remonte un peu dans le nord, cela
              fait encore des étincelles. Et voilà une trilogie époustouflante
              d&#39;appellations prestigieuses dans un millésime exceptionnel
              (N&#39;ayons pas peur des mots&nbsp;!). Le premier problème,
              c&#39;est que cette série limitée porte bien son nom, elle est
              même très limitée et il va donc falloir être réactif. Le deuxième
              est qu&#39;on pourrait aisément envisager de laisser dormir ces
              trésors quelques années en cave, mais êtes-vous assez fort pour
              résister à la tentation&nbsp;?&nbsp;»
            </p>
            <p className="font-caveat text-2xl mt-5">Patrick & Jean-Louis</p>
          </div>
        </div>

        <div
          ref={descriptionsRef}
          className="flex flex-col md:flex-row mx-auto justify-center gap-x-10"
        >
          <UneColonneCommeCa col={productsDescriptions[0]} />
          <UneColonneCommeCa col={productsDescriptions[1]} />
          <UneColonneCommeCa col={productsDescriptions[2]} />
        </div>
      </div>

      {session.status === "unauthenticated" ? (
        <div className="w-full bg-[#E3F2FB] px-5 sm:px-10 2xl:px-40 relative">
          <div className="mt-16 py-9 lg:grid grid-cols-5 gap-x-4">
            <div className="md:grid grid-cols-5 gap-x-4 lg:col-span-4">
              <div className="grid grid-cols-4 md:col-span-2 md:gap-x-3">
                <div className="col-span-1 max-w-[100px] m-auto relative">
                  <Image
                    src={ImageCloche}
                    alt="image ImageCloche"
                    placeholder="blur"
                  />
                </div>
                <h1 className="col-span-3 text-3xl flex items-center mx-auto">
                  Ne passez plus à côté de nos Séries limitées&nbsp;!
                </h1>
              </div>
              <p className="mt-8 sm:mt-3 md:col-span-3 flex justify-center mx-auto flex-col">
                Devenez membre et profitez de notre sélection exclusive et
                irrésistible. Comme son prix d&#39;ailleurs :-)
              </p>
            </div>

            <div className="mt-8 sm:mt-0 flex text-center md:inline-block col-span-1">
              {/* TODO subscribe customer and push notification to user */}
              <button className="mt-8 bg-black text-[#E3F2FB] font-bold border-solid rounded-xl border-black border-[3px] px-5 py-3 cursor-pointer w-full lg:w-auto hover:text-black hover:bg-[#E3F2FB]">
                Je deviens membre EMOVIN
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SerieLim;
