import Image from "next/image";
import ImageHeroBonCoup from "../../public/images/bon-coup/hero-bon-coup.png";
import ImageHouraLBC from "../../public/images/bon-coup/houraLBC.png";
import ImageCloche from "../../public/images/HP/boncoup_cloche.webp";
import ImageSerieLimMar from "../../public/images/serie-lim-mar/saintCosmeSerieLim.png"

const SerieLim = ({ productSerieLim }) => {
  console.log(productSerieLim);
  return (
    <>
      <div className="relative lg:aspect-[2.677] 2xl:aspect-[3.2128] w-full">
        <div className="bg-gradient-to-b from-[#DEC46F] to-[#BB9B48] text-white flex flex-col py-12 px-5 w-full sm:px-10 lg:absolute lg:top-0 lg:left-0 lg:z-10 lg:px-20 lg:pr-10 lg:py-16 lg:w-[59%] xl:px-28 xl:py-16 xl:w-[55%] 2xl:px-40">
          <h1 className="">Nos séries limitées&nbsp;!</h1>
          <p className="font-semibold text-xl mt-6">
            La Trilogie du Nord by Saint Cosme
          </p>
          <p className="font-semibold text-xl mt-1">
            Assortiment de 3 bouteilles (100% Syrah - Rouge) Millésime 2020 Côte
            Rôtie, Saint Joseph & Crozes-Hermitage
          </p>
          <p className="font-light text-xl mt-1">
            «&nbsp;A Saint Cosme, nous réalisons le maximum de travaux à la
            main. Je souhaite vinifier des vins qui expriment leur terroir, leur
            origine avec pureté et précision; des vins qui ont de la
            personnalité et de l&#39;équilibre. Je veux qu&#39;ils soient apte à
            Vieillir&nbsp;!&nbsp;»
          </p>
          <p className="font-light mt-10">Louis Barruol</p>
        </div>
        <div className="relative aspect-[1.6064] md:w-2/3 mx-auto lg:absolute lg:top-0 lg:right-0 lg:w-[60%] 2xl:w-[50%]">
          {/* <Image
            src={ImageHeroBonCoup}
            alt="Image fond d'écran Bruno Loubet"
            layout="fill"
            objectFit="contain"
            quality={100}
            placeholder="blur"
          /> */}
          <video
            loop
            muted
            autoPlay
            playsInline
            className="w-full h-full object-cover"
            src="/videos/serie-lim-vid.mp4"
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
      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 mt-20">
        <div className="py-11 md:pb-28 grid grid-cols-1 md:grid-cols-3 md:gap-x-24">
          <div className="m-auto col-span-1 relative">
            <Image
              src={ImageHouraLBC}
              alt="image heart page d'accueil"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col items-start col-span-2">
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
      </div>
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

export default SerieLim;
