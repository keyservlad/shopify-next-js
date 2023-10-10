import Image from "next/image";
import ImageHeroBonCoup from "../../public/images/bon-coup/379665807_728446922481270_3495090914604774033_n.png";
import ImageHouraLBC from "../../public/images/bon-coup/houraLBC.png";
import ImageCloche from "../../public/images/HP/boncoup_cloche.webp";
import NotreSelection from "./NotreSelection";

const LeBonCoup = ({ productsLBC }) => {
  return (
    <>
      <div className="relative lg:aspect-[2.677] 2xl:aspect-[3.2128] w-full">
        <div className="bg-[#51BBC9] text-white flex flex-col py-16 px-5 w-full sm:px-10 lg:absolute lg:top-0 lg:left-0 lg:z-10 lg:px-20 lg:pr-10 lg:py-12 lg:w-[59%] xl:py-16 xl:w-[50%] 2xl:px-38">
          <h1 className="">Notre Bon Coup du moment&nbsp;!</h1>
          <p className="font-semibold text-xl mt-6">Cap Sud-Ouest&nbsp;!</p>
          <p className="font-light text-xl mt-1">
            Des valeurs sûres que l&#39;on appréciera lorsque les températures
            se feront plus fraîches...
          </p>
          <p className="font-light text-xl mt-1">
            Mais aussi de belles découvertes «&nbsp;Coup de cœur EMOVIN&nbsp;».
          </p>
          <p className="font-light text-xl mt-1">
            ...et tout ça pour moins de 20€ la bouteille&nbsp;!
          </p>
          <p className="font-light mt-10">
            Date limite de commande : 31 octobre 2023
          </p>
        </div>
        <div className="relative aspect-[1.7333333] md:w-2/3 mx-auto lg:absolute lg:top-0 lg:right-0 lg:w-[60%]">
          <Image
            src={ImageHeroBonCoup}
            alt="Image fond d'écran Bruno Loubet"
            layout="fill"
            objectFit="contain"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="invisible w-full top-0 left-0 relative" />
      </div>
      <div className="flex flex-col text-center mt-28">
        <h2 className="text-4xl font-light">Une région, trois histoires</h2>
        <p className="mt-12 md:w-2/3 mx-auto px-5">
          Berceau de la préhistoire&nbsp;: de l&#39;homme de Cro-Magnon des
          Eyzies de Tayac aux grottes de Lascaux... Haut lieu de la
          gastronomie&nbsp;: Foie gras et cèpes du Périgord, confit de canard et
          pommes sarladaises, Rocamadour (un peu calorique, mais
          qu&#39;importe); Et puis une pléiade d&#39;appellations viticoles et
          de cépages qui offrent une diversité unique&nbsp;: la Négrette de
          Fronton, le Côt ou Malbec de Cahors, le Tannat de Madiran, ou encore
          le petit et gros Manseng. Bienvenue dans l&#39;incontournable et
          fascinant Sud-Ouest&nbsp;!
        </p>
      </div>
      {/* TODO faire la section des bouteilles avec à partir de lg un display grid-cols-3 et avant flex-col et faire la div normal et le background une image en position absolute */}
      <NotreSelection productsLBC={productsLBC} />
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
            <p className="mt-5">
              Nous avons une petite confidence à vous faire&#39;: On est plutôt
              fier de nous (rassurez-vous, on a parfois quelques moments de
              doute passagers). Car ce Bon Coup porte très bien son nom. Nous
              avons la chance d&#39;avoir dans notre beau pays une palette de
              très grands vins, voire même exceptionnels, des bouteilles qui
              font rêver mais de plus en plus inaccessibles. Alors, nous sommes
              heureux de vous proposer ces «&nbsp;pépites&nbsp;» rouges
              élaborées par deux très grands vinificateurs et promises à un long
              et bel avenir et tout ça pour moins de 20 Euros la bouteille.
              Excellents dès à présent mais pas grave si vous oubliez les rouges
              en cave quelques années&nbsp;!
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

export default LeBonCoup;
