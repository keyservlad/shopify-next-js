import Image from "next/image";
import ImageHero from "../../public/images/HP/hero_HP.png";
import ImageHeroMobile from "../../public/images/HP/hero_HP_mobile.jpg";
import Link from "next/link";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";

const HeroSection = (props) => {
  const scrollHeroHP = () => {
    props.refButtonHeroHP.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-screen aspect-[0.65] sm:aspect-[2.18] max-h-screen overflow-hidden">
      <div className="hidden sm:flex relative h-full w-full">
        <Image
          src={ImageHero}
          alt="Image fond d'écran Home Page"
          layout="fill"
          objectFit="contain"
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className="sm:hidden relative h-full w-full">
        <Image
          src={ImageHeroMobile}
          alt="Image fond d'écran Home Page mobile"
          layout="fill"
          objectFit="contain"
          quality={100}
          placeholder="blur"
        />
      </div>

      <div className="absolute mx-auto left-0 right-0 max-w-[14rem] top-1/4  text-center sm:mx-0 sm:left-[3%] sm:top-[10%] md:left-[6%] md:top-[15%] lg:top-[20%] xl:max-w-xs 2xl:left-[7%] 2xl:top-1/4">
        <h1 className="text-6xl sm:text-5xl xl:text-7xl mb-7">
          L&#39;Emotion par le vin
        </h1>
        <Link href="/notre-boutique" passHref>
          <a>
            <button className="bg-redWine text-white font-bold border-solid rounded-xl border-redWine border-[3px] px-5 py-3 cursor-pointer hover:text-redWine hover:bg-white">
              Découvrir notre cave
            </button>
          </a>
        </Link>
      </div>
      <ArrowCircleDownIcon
        onClick={() => scrollHeroHP()}
        className="hidden sm:block absolute left-0 right-0 mx-auto bottom-3 h-14 w-14 duration-500 hover:scale-125 ease-[cubic-bezier(.47,2.02,.31,-.36)] cursor-pointer"
        aria-hidden="true"
      />
    </div>
  );
};

export default HeroSection;
