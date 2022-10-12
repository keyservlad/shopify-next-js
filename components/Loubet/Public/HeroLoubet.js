import Image from "next/image";
import Link from "next/link";
import ImageHero from "../../../public/images/bruno/hero_bruno_2.png";
import ImageHeroBonCoup from "../../../public/images/bon-coup/hero-bon-coup.png";
import { useRouter } from "next/router";

const HeroLoubet = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative lg:aspect-[2.677] 2xl:aspect-[3.2128] w-full">
        <div className="bg-[#89B65F] text-white flex flex-col py-16 px-5 w-full gap-y-5 sm:px-10 lg:absolute lg:top-0 lg:left-0 lg:z-10 lg:px-10 lg:pr-10 lg:py-12 lg:w-[59%] xl:px-28 xl:py-16 xl:w-[55%] 2xl:px-40">
          <h1 className="text-4xl">
            Le grand Chef Bruno Loubet rejoint l&#39;aventure Emovin
          </h1>
          <p className="font-light text-lg">
            Nous sommes très heureux de vous annoncer la collaboration avec le
            Chef français Bruno Loubet, Chef étoilé qui a établi sa réputation à
            Londres dans les années 90. Il va vous gâter avec ses recettes et
            ses conseils… dans l&#39;esprit EMOVIN.
          </p>
          <div className="">
            <Link href="/bruno-loubet/cv" passHref>
              <a className="">
                <button className="bg-white mr-3 text-black font-bold border-solid rounded-xl border-white border-4 px-4 py-3 cursor-pointer hover:text-white hover:bg-black hover:border-black">
                  En savoir plus sur Bruno
                </button>
              </a>
            </Link>
            <Link
              href={{
                pathname: "/login",
                query: {
                  callbackUrl: `${window.location.origin}` + router.asPath,
                },
              }}
              passHref
            >
              <a>
                <button className="bg-black mt-2 sm:mt-0 text-white font-bold border-solid rounded-xl border-black border-4 px-4 py-3 cursor-pointer hover:text-black hover:bg-white">
                  Je me connecte
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="relative aspect-[1.6064] md:w-2/3 mx-auto lg:absolute lg:top-0 lg:right-0 lg:w-[60%] 2xl:w-[50%]">
          <Image
            src={ImageHero}
            alt="Image fond d'écran Bruno Loubet"
            layout="fill"
            objectFit="contain"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="invisible w-full top-0 left-0 relative"></div>
      </div>
    </>
  );
};

export default HeroLoubet;
