import Image from "next/image";

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

      <div className="absolute top-1/4 left-[7%]">
        L&#39;Emotion par le vin
        {/* TODO Importer les typos et mettre la page d'acceuil sur index */}
      </div>
    </>
  );
};

export default HomePage;
