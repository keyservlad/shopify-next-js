import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import VectorBackground from "../../../public/images/bruno/Vector.png";
import VectorBackgroundWhite from "../../../public/images/bruno/VectorWhite.png";
import DessinDecouverte from "../../../public/images/cartes/decouverteDessin.png";

const DernieresRecettes = () => {
  const router = useRouter();
  return (
    <div className="w-full relative pt-11 ">
      <div className="absolute top-0 left-0 w-full -z-10">
        <div className="relative h-96">
          <Image
            src={VectorBackground}
            alt="Image fond d'écran bruno"
            objectFit="contain"
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="absolute top-11 left-0 w-full -z-10">
        <div className="relative h-96">
          <Image
            src={VectorBackgroundWhite}
            alt="Image fond d'écran bruno"
            objectFit="contain"
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="w-full aspect-[8.276]" />
      {/* find a solution to get the spacing right in the y axis */}
      <div className="flex flex-row md:gap-x-24 px-5 lg:px-32 xl:px-40 2xl:px-60 bg-[#FAF8F8] pb-10">
        <div className="flex flex-col justify-center md:basis-2/3">
          <h2 className="text-3xl font-semibold mt-5">
            Les conseils et recettes de Bruno Loubet sont réservées aux membres
            Emovin
          </h2>
          <p className="my-5">
            Connectez-vous ou devenez membre Emovin dès maintenant et ne ratez
            plus nos prix avantageux et offres et conseils autour du vins et sa
            culture.
          </p>
          <div className="">
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
                <button className="bg-black mr-5 text-white font-bold border-solid rounded-xl border-black border-4 px-4 py-3 cursor-pointer hover:text-black hover:bg-white">
                  Je me connecte
                </button>
              </a>
            </Link>
            <Link href="/cartes" passHref>
              <a className="">
                <button className="bg-redWine text-white mt-2 sm:mt-0 font-bold border-solid rounded-xl border-redWine border-4 px-4 py-3 cursor-pointer hover:text-redWine hover:bg-white hover:border-redWine">
                  Je découvre Emovin
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="relative bg-transparent md:basis-1/3 hidden md:flex justify-center">
          <Image
            src={DessinDecouverte}
            alt="Image fond d'écran bruno"
            objectFit="contain"
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default DernieresRecettes;
