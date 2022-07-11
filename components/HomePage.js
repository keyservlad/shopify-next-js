import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="hidden sm:flex relative w-screen aspect-[2.18] max-h-screen overflow-hidden">
        <Image
          src="/images/HP/hero_HP.png"
          alt="Image fond d'écran Home Page"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
      <div className="sm:hidden relative w-screen aspect-[0.65] max-h-screen overflow-hidden">
        <Image
          src="/images/HP/hero_HP_mobile.jpg"
          alt="Image fond d'écran Home Page mobile"
          layout="fill"
          quality={100}
        />
      </div>

      <div className="absolute mx-auto left-0 right-0 max-w-[14rem] top-1/4  text-center sm:mx-0 sm:left-[3%] sm:top-[10%] md:left-[6%] md:top-[15%] lg:top-[20%] xl:max-w-xs 2xl:left-[7%] 2xl:top-1/4">
        <h1 className="text-6xl sm:text-5xl xl:text-7xl mb-7">
          L&#39;Emotion par le vin
        </h1>
        <Link href="/notre-cave" passHref>
          <a>
            <button className="bg-redWine text-white font-lexend font-bold border-solid rounded-xl border-redWine border-[3px] px-5 py-3 cursor-pointer hover:text-redWine hover:bg-white">
              Découvrir notre cave
            </button>
          </a>
        </Link>
        {/* TODO mettre la page d'acceuil sur index */}
      </div>
    </>
  );
};

export default HomePage;