import Image from "next/image";
import ImageHero from "../../public/images/bruno/hero_bruno.png";

const HeroLoubet = () => {
  return (
    <div className="lg:relative">
      <div className="bg-[#7FA8E2] text-white flex flex-col gap-y-10 py-16 px-5 w-full sm:px-10 lg:absolute lg:top-0 lg:left-0 lg:z-10 lg:px-20 lg:pr-10 lg:gap-y-7 lg:py-12 lg:w-[59%] xl:px-28 xl:gap-y-10 xl:py-16 xl:w-[55%] 2xl:px-40">
        <h1 className="text-4xl">Bruno Loubet x Emovin</h1>
        <p className="font-light text-lg">
          Nous sommes très heureux de vous annoncer la collaboration avec le
          chef français Bruno Loubet. Il va nous gâter avec ses recettes, nous
          donner des conseils...
        </p>
        <p className="font-bold">Bienvenue chez Emovin !</p>
      </div>
      <div className="relative aspect-[1.6064] lg:absolute lg:top-0 lg:right-0 lg:w-[50%]">
        <Image
          src={ImageHero}
          alt="Image fond d'écran Bruno Loubet"
          layout="fill"
          objectFit="contain"
          quality={100}
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default HeroLoubet;
