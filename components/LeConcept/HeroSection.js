import Image from "next/image";
import ImageHeroBonCoup from "../../public/images/concept/visuel_concept_2022.jpg";
// import ImageHeroBonCoup from "../../public/images/concept/concept_hero.jpg";


// TODO fox resolution hero chevauchement pour tablette (md-lg)
const HeroSection = () => {
  return (
    <div className="relative lg:aspect-[2.677] 2xl:aspect-[3.2128] w-full">
      <div className="bg-redWine text-white flex flex-col py-12 px-5 w-full sm:px-10 lg:absolute lg:top-0 lg:left-0 lg:z-10 lg:px-20 lg:pr-10 lg:py-16 lg:w-[59%] xl:px-28 xl:py-16 xl:w-[55%] 2xl:px-40">
        <h1 className="">Le concept</h1>
        <p className="font-light text-xl mt-5">
          Réunir tous les passionnés “d&#39;art de vivre” autour du vin. Celui
          que l&#39;on achète en toute confiance et, que l&#39;on a plaisir à
          partager avec ses amis&nbsp;!
        </p>
        <p className="font-light text-xl">
          Appréhender le vin pour ce qu&#39;il apporte en “émotion”. Pas de
          “chichi” et point de discours “pompeux”… juste la vérité de
          l&#39;instant&nbsp;!
        </p>
      </div>
      <div className="relative aspect-[1.6119403] md:w-2/3 mx-auto lg:absolute lg:top-0 lg:right-0 lg:w-[60%] 2xl:w-[50%]">
        <Image
          src={ImageHeroBonCoup}
          alt="Image fond d'écran Bruno Loubet"
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className="invisible w-full top-0 left-0 relative"></div>
    </div>
  );
};

export default HeroSection;
